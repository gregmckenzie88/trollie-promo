'use client';

import { useEffect, useRef } from 'react';

const FRAME_COUNT = 90;
const INITIAL_BATCH = 10;
const FRAME_PATH = '/frames/frame-';

function getFrameSrc(index: number): string {
  const num = String(index + 1).padStart(4, '0');
  return `${FRAME_PATH}${num}.webp`;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    Array(FRAME_COUNT).fill(null)
  );
  const currentFrameRef = useRef(0);
  const allLoadedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;

    function drawFrame(index: number) {
      if (!ctx || !canvas) return;
      const img = images[index];
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width * dpr;
      const h = rect.height * dpr;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      ctx.clearRect(0, 0, w, h);

      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = w / h;

      let drawW: number, drawH: number, drawX: number, drawY: number;
      if (canvasAspect > imgAspect) {
        drawH = h;
        drawW = h * imgAspect;
        drawX = (w - drawW) / 2;
        drawY = 0;
      } else {
        drawW = w;
        drawH = w / imgAspect;
        drawX = 0;
        drawY = (h - drawH) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }

    let cancelled = false;

    // Load initial batch first, then remaining frames on intersection
    async function loadBatch(start: number, end: number) {
      const promises: Promise<void>[] = [];
      for (let i = start; i < end && i < FRAME_COUNT; i++) {
        if (images[i] || cancelled) continue;
        promises.push(
          loadImage(getFrameSrc(i)).then((img) => {
            if (!cancelled) {
              images[i] = img;
              if (i === 0) drawFrame(0);
            }
          })
        );
      }
      await Promise.all(promises);
    }

    // Load first batch immediately for the initial visible frame
    loadBatch(0, INITIAL_BATCH);

    // Load remaining frames when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !allLoadedRef.current) {
          allLoadedRef.current = true;
          observer.disconnect();
          loadBatch(INITIAL_BATCH, FRAME_COUNT);
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(container);

    // Import and set up GSAP + ScrollTrigger
    let cleanup: (() => void) | undefined;

    async function setupScrollTrigger() {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(self.progress * FRAME_COUNT)
          );
          if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            drawFrame(frameIndex);
          }
        },
      });

      cleanup = () => {
        trigger.kill();
      };
    }

    setupScrollTrigger();

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      drawFrame(currentFrameRef.current);
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelled = true;
      cleanup?.();
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center">
        <div className="mx-auto w-full max-w-5xl px-6">
          <canvas
            ref={canvasRef}
            className="w-full rounded-lg aspect-[1920/1140] max-sm:aspect-[4/3]"
            role="img"
            aria-label="Trollie app demo — scroll to see the focus session interface in action"
          />
        </div>
      </div>
    </section>
  );
}
