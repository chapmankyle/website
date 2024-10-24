import type { ISectionProps } from '@/lib/types'

import BlurFade from '@/components/magicui/blur-fade'
import Markdown from 'react-markdown'

export default function About ({
  data, blurDelay
}: ISectionProps): JSX.Element {
  return (
    <section id='about'>
      <BlurFade delay={blurDelay * 3}>
        <h2 className='text-xl font-bold'>About</h2>
      </BlurFade>
      <BlurFade delay={blurDelay * 4}>
        <Markdown className='prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert'>
          {data.metadata.summary}
        </Markdown>
      </BlurFade>
    </section>
  )
}
