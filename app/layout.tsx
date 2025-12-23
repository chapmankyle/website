import { Roboto } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import './globals.css'

import Navbar from '@/components/navbar'

import { cn } from '@/lib/utils'
import { fetchAPIData } from '@/data'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

import type { IMetadata } from '@/lib/types'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--custom-font-sans',
  display: 'swap'
})

/** Metadata information */
export async function generateMetadata (): Promise<Metadata> {
  const metadata = await fetchAPIData('metadata') as IMetadata
  const description = [metadata.title, metadata.summary].join('. ') + '.'

  return {
    metadataBase: new URL(metadata.url),
    title: {
      default: metadata.name,
      template: `%s · ${metadata.name}`
    },
    description,
    openGraph: {
      title: metadata.name,
      description,
      url: metadata.url,
      siteName: metadata.name,
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
      title: `${metadata.name}`,
      card: 'summary_large_image'
    },
    verification: {
      google: '',
      yandex: ''
    }
  }
}

/** Viewport information */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF'
}

/** Structured data information */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kyle Chapman',
  jobTitle: 'Full Stack Engineer',
  url: 'https://kylechapman.dev',
  email: 'contact@kylechapman.dev'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://api.kylechapman.dev' />
      </head>
      <body className={cn(
        'font-sans antialiased min-h-screen bg-background max-w-3xl mx-auto py-12 sm:py-24 px-6',
        roboto.variable
      )}
      >
        <ThemeProvider>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>

        {/* Structured data */}
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
