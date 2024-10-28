'use client'

import * as Sentry from '@sentry/nextjs'

import { useEffect } from 'react'

import Home from '@/components/home'

import { FALLBACK_DATA } from '@/data/fallback'

export default function GlobalError ({
  error
}: {
  error: Error & { digest?: string }
}): JSX.Element {
  const data = FALLBACK_DATA

  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <Home data={data} />
  )
}
