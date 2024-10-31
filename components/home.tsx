import About from '@/components/sections/about'
import Education from '@/components/sections/education'
import Experience from '@/components/sections/experience'
import Header from '@/components/sections/header'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'

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
    <main className='flex flex-col space-y-6 sm:space-y-9'>
      <Header data={data} blurDelay={BLUR_FADE_DELAY} />
      <About data={data} blurDelay={BLUR_FADE_DELAY} />
      <Experience data={data} blurDelay={BLUR_FADE_DELAY} />
      <Education data={data} blurDelay={BLUR_FADE_DELAY} />
      <Projects data={data} blurDelay={BLUR_FADE_DELAY} />
      <Contact data={data} blurDelay={BLUR_FADE_DELAY} />
    </main>
  )
}
