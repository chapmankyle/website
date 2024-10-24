import About from '@/components/sections/about'
import Education from '@/components/sections/education'
import Experience from '@/components/sections/experience'
import Header from '@/components/sections/header'
import { IAPIData } from '@/lib/types'

// Delay before blurring elements in
const BLUR_FADE_DELAY = 0.04

interface IHomeProps {
  data: IAPIData
}

export default function Home ({
  data
}: IHomeProps): JSX.Element {
  return (
    <main className='flex flex-col min-h-[100dvh] space-y-10'>
      <Header data={data} blurDelay={BLUR_FADE_DELAY} />
      <About data={data} blurDelay={BLUR_FADE_DELAY} />
      <Experience data={data} blurDelay={BLUR_FADE_DELAY} />
      <Education data={data} blurDelay={BLUR_FADE_DELAY} />
    </main>
  )
}
