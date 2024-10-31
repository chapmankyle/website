import Home from '@/components/home'

import { fetchAPIData } from '@/data'

import type { IAPIData } from '@/lib/types'

export default async function Page (): Promise<JSX.Element> {
  const data = await fetchAPIData() as IAPIData
  return (
    <Home data={data} />
  )
}
