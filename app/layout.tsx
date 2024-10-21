import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { STATIC_DATA } from '@/data'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--custom-font-sans',
  weight: '100 900'
})

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
        geistSans.variable
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
