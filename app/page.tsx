import About from '@/components/sections/about'
import Header from '@/components/sections/header'

import { fetchAPIData } from '@/data'

// Delay before blurring elements in
const BLUR_FADE_DELAY = 0.04

// Invalidate cache at most once every x seconds
export const revalidate = 900 // 15 minutes

export default async function Page (): Promise<JSX.Element> {
  const data = await fetchAPIData()
  return (
    <main className='flex flex-col min-h-[100dvh] space-y-10'>
      <Header data={data} blurDelay={BLUR_FADE_DELAY} />
      <About data={data} blurDelay={BLUR_FADE_DELAY} />
    </main>
  )
}
