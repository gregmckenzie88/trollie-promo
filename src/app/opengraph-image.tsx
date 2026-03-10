import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Trollie — Audio-guided focus sessions for your workday';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#1A1A1E',
          color: '#FAFAFA',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}
        >
          Trollie
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#A0A0AC',
            maxWidth: 600,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Audio-guided focus sessions for your workday
        </div>
        <div
          style={{
            display: 'flex',
            gap: 4,
            marginTop: 48,
            alignItems: 'end',
          }}
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: 12 + Math.sin(i * 0.5) * 20 + Math.cos(i * 0.7) * 15,
                borderRadius: 2,
                background: 'rgba(200, 184, 50, 0.5)',
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
