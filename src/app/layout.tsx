import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'China Travel Guide - Essential Tips for Foreigners',
  description: 'Your complete guide to traveling in China - Payment, Internet, and Transportation made easy for English speakers.',
  keywords: 'China travel, foreigners in China, Alipay, WeChat Pay, China eSIM, China navigation',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
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
