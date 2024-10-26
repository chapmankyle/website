import Home from '@/components/home'

import { fetchAPIData } from '@/data'

import type { IAPIData } from '@/lib/types'

// Invalidate cache at most once every x seconds
export const revalidate = 900 // 15 minutes

export default async function Page (): Promise<JSX.Element> {
  const data = await fetchAPIData() as IAPIData
  return (
    <Home data={data} />
  )
}
