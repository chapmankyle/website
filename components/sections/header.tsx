import { Location01Icon, SourceCodeIcon } from 'hugeicons-react'

import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import type { ISectionProps } from '@/lib/types'

export default function Header ({
  data, blurDelay
}: ISectionProps): JSX.Element {
  const name = data.metadata.name.split(' ')[0].toLowerCase()
  const summary = [data.metadata.title, data.metadata.summary].join('. ') + '.'

  return (
    <section id='hero'>
      <div className='mx-auto w-full max-w-2xl space-y-8'>
        <div className='gap-2 flex justify-between'>
          <div className='flex-col flex flex-1 space-y-1.5'>
            <BlurFadeText
              delay={blurDelay}
              className='text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none'
              yOffset={8}
              text={`hey, i'm ${name} 👋`}
            />
            <BlurFadeText
              delay={blurDelay}
              className='max-w-[420px] md:text-xl'
              text={summary}
            />
          </div>
          <BlurFade delay={blurDelay}>
            <Avatar className='size-28 border shadow-md'>
              <AvatarImage alt={data.metadata.name} src='/me.webp' />
              <AvatarFallback>{data.metadata.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row sm:items-center mt-1 gap-1 sm:gap-7'>
        <BlurFadeText
          delay={blurDelay}
          className='flex items-center text-xs sm:text-sm text-muted-foreground mt-1'
          icon={<Location01Icon className='h-3 w-3 sm:h-4 sm:w-4' />}
          text={data.metadata.location}
        />
        <BlurFadeText
          delay={blurDelay}
          className='flex items-center text-xs sm:text-sm text-muted-foreground mt-1'
          icon={<SourceCodeIcon className='h-3 w-3 sm:h-4 sm:w-4' />}
          text={data.metadata.languages.join(', ')}
        />
      </div>
    </section>
  )
}
