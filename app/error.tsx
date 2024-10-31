'use client'

import * as Sentry from '@sentry/nextjs'

import { useEffect } from 'react'

import Home from '@/components/home'

import { FALLBACK_DATA } from '@/data/fallback'

export default function Error ({
  error
}: {
  error: Error & { digest?: string }
}): JSX.Element {
  const data = FALLBACK_DATA

  useEffect(() => {
    let sentryEnabled = process.env.NEXT_PUBLIC_SENTRY_ENABLED ?? true
    if (typeof sentryEnabled === 'string') {
      const parsed = parseInt(sentryEnabled)
      sentryEnabled = isNaN(parsed) ? true : parsed !== 0
    }

    if (sentryEnabled) {
      Sentry.captureException(error)
    }
  }, [error])

  return (
    <Home data={data} />
  )
}
