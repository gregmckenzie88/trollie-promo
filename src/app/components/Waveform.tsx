'use client';

import { useEffect, useState } from 'react';

export default function Waveform() {
  const [barCount, setBarCount] = useState<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 640px)');
    const update = () => setBarCount(mql.matches ? 48 : 32);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  if (barCount === null) {
    return <div className="relative z-10 mt-16 h-12" aria-hidden="true" />;
  }

  return (
    <div className="relative z-10 mt-16 flex items-end justify-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-primary/40 origin-bottom"
          style={{
            height: `${12 + Math.sin(i * 0.4) * 20 + Math.cos(i * 0.7) * 15}px`,
            animation: `wave 2s ease-in-out ${i * 0.08}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
