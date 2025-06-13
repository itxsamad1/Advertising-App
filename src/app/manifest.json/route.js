import { NextResponse } from 'next/server';

export async function GET() {
  return Response.json({
    name: "M Tech Solutions - Premium SMD Screens",
    short_name: "M Tech Solutions",
    description: "M Tech Solutions - Your Premium Digital Advertising Partner",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/images/logo-icon.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/images/logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      }
    ]
  });
} 