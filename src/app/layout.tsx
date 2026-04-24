import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'China Travel Guide - Essential Tips for Foreigners',
    template: '%s | China Travel Guide',
  },
  description: 'Your complete guide to traveling in China - Visa, Payment (Alipay/WeChat), eSIM, High-Speed Rail, and more. Updated for 2026.',
  keywords: ['China travel', 'foreigners in China', 'Alipay setup', 'WeChat Pay', 'China eSIM', 'China visa', 'high-speed rail China', 'China travel guide 2026'],
  authors: [{ name: 'Jian', url: 'https://thechinatravelguide.com' }],
  creator: 'Jian',
  publisher: 'China Travel Guide',
  verification: {
    google: 'LVD-NyjL8SbovN03ydW0jn0SYWgB1mQ_F_mkQznlcW4',
  },
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
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thechinatravelguide.com',
    siteName: 'China Travel Guide',
    title: 'China Travel Guide - Essential Tips for Foreigners',
    description: 'Your complete guide to traveling in China - Visa, Payment, eSIM, and more. Updated for 2026.',
    images: [
      {
        url: 'https://thechinatravelguide.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'China Travel Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Travel Guide - Essential Tips for Foreigners',
    description: 'Your complete guide to traveling in China - Visa, Payment, eSIM, and more. Updated for 2026.',
    creator: '@chinatravelguide',
  },
  alternates: {
    canonical: 'https://thechinatravelguide.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X4Y4KZHH6J"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X4Y4KZHH6J');
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
