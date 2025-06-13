export default function manifest() {
  return {
    name: "M Tech Solutions",
    short_name: "M Tech",
    description: "Premium Digital Advertising Solutions in Pakistan",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1E40AF",
    icons: [
      {
        src: "/images/favicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/images/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  }
} 