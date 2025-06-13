import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'M Tech Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #1E40AF, #3B82F6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '48px',
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 'bold',
            marginBottom: '24px',
          }}
        >
          M Tech Solutions
        </div>
        <div
          style={{
            fontSize: 36,
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Premium Digital Advertising Solutions in Pakistan
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 