import { Roboto } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import './globals.css'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { STATIC_DATA } from '@/data'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--custom-font-sans',
  display: 'swap'
})

// Necessary for deploying to Cloudflare Pages
export const runtime = 'edge'

/** Metadata information */
export const metadata: Metadata = {
  metadataBase: new URL(STATIC_DATA.url),
  title: {
    default: STATIC_DATA.name,
    template: `%s · ${STATIC_DATA.name}`
  },
  description: STATIC_DATA.description,
  openGraph: {
    title: `${STATIC_DATA.name}`,
    description: STATIC_DATA.description,
    url: STATIC_DATA.url,
    siteName: `${STATIC_DATA.name}`,
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: `${STATIC_DATA.name}`,
    card: 'summary_large_image'
  },
  verification: {
    google: '',
    yandex: ''
  }
}

/** Viewport information */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(
        'font-sans antialiased min-h-screen bg-background max-w-2xl mx-auto py-12 sm:py-24 px-6',
        roboto.variable
      )}
      >
        <ThemeProvider>
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
