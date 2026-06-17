import { ScrollReset } from '@/components/scroll-reset'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://spertu.com'),
  title: 'Spertu — End-to-end software development',
  description:
    'One partner for every layer of your product — strategy, design, engineering, and the cloud it runs on.',
  icons: {
    icon: [{ url: '/icon.svg?v=2', type: 'image/svg+xml' }],
    shortcut: '/icon.svg?v=2',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Spertu — End-to-end software development',
    description:
      'One partner for every layer of your product — strategy, design, engineering, and the cloud it runs on.',
    url: 'https://spertu.com',
    siteName: 'Spertu',
    images: [
      {
        url: 'https://spertu.com/spertu-logo.png',
        width: 2172,
        height: 724,
        alt: 'Spertu',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spertu — End-to-end software development',
    description:
      'One partner for every layer of your product — strategy, design, engineering, and the cloud it runs on.',
    images: ['https://spertu.com/spertu-logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-background"
    >
      <body className="font-sans antialiased">
        <ScrollReset />
        {children}
      </body>
    </html>
  )
}
