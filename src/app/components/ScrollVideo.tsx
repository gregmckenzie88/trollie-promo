'use client';

import { useEffect, useRef } from 'react';

const FRAME_COUNT = 90;
const FRAME_PATH = '/frames/frame-';

function getFrameSrc(index: number): string {
  const num = String(index + 1).padStart(4, '0');
  return `${FRAME_PATH}${num}.webp`;
}

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Preload all frames
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    function drawFrame(index: number) {
      if (!ctx || !canvas) return;
      const img = images[index];
      if (!img || !img.complete) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width * dpr;
      const h = rect.height * dpr;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      ctx.clearRect(0, 0, w, h);

      // Draw image maintaining aspect ratio, centered
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

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (i === 0) {
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

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
      cleanup?.();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="mx-auto w-full max-w-5xl px-6">
          <canvas
            ref={canvasRef}
            className="w-full rounded-lg"
            style={{ aspectRatio: '1920 / 1140' }}
          />
        </div>
        {/* Bottom fade to black */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              'linear-gradient(to bottom, transparent, black)',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
