'use client';

import { useEffect, useRef, useState } from 'react';

const SPACING = 14;
const DOT_SIZE = 1.5;
const DOT_COLOR = '#2A2A30';
const RADIUS = 90;
const EASE = 0.04;
const PUSH = 0.4;
const REST_THRESHOLD = 0.1;

type Dot = { x: number; y: number; ox: number; oy: number };

function buildDots(w: number, h: number): Dot[] {
  const dots: Dot[] = [];
  for (let y = SPACING; y < h; y += SPACING) {
    for (let x = SPACING; x < w; x += SPACING) {
      dots.push({ x, y, ox: x, oy: y });
    }
  }
  return dots;
}

export default function DotGrid() {
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setEnabled(!window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (enabled !== true) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let dots = buildDots(w, h);
    let rafId = 0;
    const cursor = { x: -9999, y: -9999 };

    function applySize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    applySize();

    function tick() {
      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = DOT_COLOR;
      ctx!.beginPath();

      let active = false;

      for (const dot of dots) {
        // Compute target: displaced if near cursor, otherwise origin
        let tx = dot.ox;
        let ty = dot.oy;

        const dx = cursor.x - dot.ox;
        const dy = cursor.y - dot.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS && dist > 0) {
          const force = (RADIUS - dist) / RADIUS;
          tx = dot.ox - dx * force * PUSH;
          ty = dot.oy - dy * force * PUSH;
        }

        // Lerp toward target
        dot.x += (tx - dot.x) * EASE;
        dot.y += (ty - dot.y) * EASE;

        if (Math.abs(dot.x - dot.ox) > REST_THRESHOLD || Math.abs(dot.y - dot.oy) > REST_THRESHOLD) {
          active = true;
        }

        ctx!.rect(dot.x, dot.y, DOT_SIZE, DOT_SIZE);
      }

      ctx!.fill();

      if (active || cursor.x > -1000) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    }

    function onMouseMove(e: MouseEvent) {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      if (rafId === 0) {
        rafId = requestAnimationFrame(tick);
      }
    }

    function onMouseLeave() {
      cursor.x = -9999;
      cursor.y = -9999;
    }

    function onResize() {
      cancelAnimationFrame(rafId);
      w = window.innerWidth;
      h = window.innerHeight;
      applySize();
      dots = buildDots(w, h);
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [enabled]);

  if (enabled !== true) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: -1 }}
    />
  );
}
