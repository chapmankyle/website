import { UserIcon } from 'hugeicons-react'

import type { ISectionProps } from '@/lib/types'

import BlurFade from '@/components/magicui/blur-fade'
import Markdown from 'react-markdown'

export default function About ({
  data, blurDelay
}: ISectionProps): JSX.Element {
  return (
    <section id='about'>
      <BlurFade delay={blurDelay * 3}>
        <h2 className='flex gap-2 text-xl font-bold items-center'>
          <UserIcon strokeWidth={2} className='w-4 h-4' />
          About
        </h2>
      </BlurFade>
      <BlurFade delay={blurDelay * 4}>
        <div className='prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground dark:prose-invert'>
          <Markdown>
            {data.metadata.about}
          </Markdown>
        </div>
      </BlurFade>
    </section>
  )
}
