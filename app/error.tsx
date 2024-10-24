'use client'

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
    console.error('Something went wrong when rendering page.', error)
  }, [error])

  return (
    <Home data={data} />
  )
}
