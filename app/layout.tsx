import { ScrollReset } from '@/components/scroll-reset'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kreoletech.cv'),
  title: 'KreoleTech — Desenvolvimento de software de ponta a ponta',
  description:
    'Um único parceiro para cada camada do seu produto — estratégia, design, engenharia e a nuvem onde ele roda.',
  icons: {
    icon: [{ url: '/icon.svg?v=2', type: 'image/svg+xml' }],
    shortcut: '/icon.svg?v=2',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'KreoleTech — Desenvolvimento de software de ponta a ponta',
    description:
      'Um único parceiro para cada camada do seu produto — estratégia, design, engenharia e a nuvem onde ele roda.',
    url: 'https://kreoletech.cv',
    siteName: 'KreoleTech',
    images: [
      {
        url: 'https://kreoletech.cv/kreoletech-og-v2.png',
        width: 1200,
        height: 630,
        alt: 'KreoleTech',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KreoleTech — Desenvolvimento de software de ponta a ponta',
    description:
      'Um único parceiro para cada camada do seu produto — estratégia, design, engenharia e a nuvem onde ele roda.',
    images: ['https://kreoletech.cv/kreoletech-og-v2.png'],
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
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ScrollReset />
        {children}
      </body>
    </html>
  )
}
