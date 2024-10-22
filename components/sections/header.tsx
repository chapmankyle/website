import { LanguageSquareIcon, Location04Icon } from 'hugeicons-react'

import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { SectionProps } from '@/lib/types'

export default function Header ({
  data, blurDelay
}: SectionProps): JSX.Element {
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
            <div className='flex items-center gap-7'>
              <BlurFadeText
                delay={blurDelay}
                className='flex items-center text-sm text-muted-foreground mt-1'
                icon={<Location04Icon className='h-4 w-4' />}
                text={data.metadata.location}
              />
              <BlurFadeText
                delay={blurDelay}
                className='flex items-center text-sm text-muted-foreground mt-1'
                icon={<LanguageSquareIcon className='h-4 w-4' />}
                text={data.metadata.languages.join(', ')}
              />
            </div>
          </div>
          <BlurFade delay={blurDelay}>
            <Avatar className='size-28 border'>
              <AvatarImage alt={data.metadata.name} src='/me.jpg' />
              <AvatarFallback>{data.metadata.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
