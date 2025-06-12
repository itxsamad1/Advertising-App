import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './_components/Providers';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Viewport configuration must be in a separate export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: {
    template: '%s | M Tech Solutions',
    default: 'M Tech Solutions - Digital Advertising Solutions in Pakistan',
  },
  description: 'M Tech Solutions offers premium digital advertising services through our network of 30+ strategically placed SMD screens across Pakistan. Transform your brand visibility with our high-impact advertising solutions.',
  keywords: [
    'Digital Advertising',
    'SMD Screens',
    'Outdoor Advertising',
    'Digital Marketing',
    'M Tech Solutions',
    'Advertising in Pakistan',
    'Digital Billboards',
    'LED Screen Advertising',
    'High-Traffic Advertising',
    'Premium Visibility',
    'Advertising Network Pakistan',
    'Digital Display Advertising',
    'Out of Home Advertising',
    'Strategic Advertising Locations',
    'Brand Visibility Solutions'
  ],
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  authors: [{ name: 'M Tech Solutions' }],
  creator: 'M Tech Solutions',
  publisher: 'M Tech Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://mtechsolutions.com',
    siteName: 'M Tech Solutions',
    title: 'M Tech Solutions - Premium Digital Advertising Network in Pakistan',
    description: 'Transform your brand visibility with M Tech Solutions. We offer premium digital advertising through our network of 30+ strategically placed SMD screens across Pakistan.',
    images: [
      {
        url: '/og-image.jpg', // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: 'M Tech Solutions - Digital Advertising Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M Tech Solutions - Digital Advertising Solutions',
    description: 'Premium digital advertising network with 30+ SMD screens across Pakistan. Transform your brand visibility with M Tech Solutions.',
    images: ['/twitter-image.jpg'], // Make sure this image exists in your public folder
    creator: '@mtechsolutions',
    site: '@mtechsolutions',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  alternates: {
    canonical: 'https://mtechsolutions.com',
    languages: {
      'en-PK': 'https://mtechsolutions.com',
      'ur-PK': 'https://mtechsolutions.com/ur',
    },
  },
  category: 'Digital Advertising',
  classification: 'Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
} 