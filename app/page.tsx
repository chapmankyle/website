import Markdown from 'react-markdown'
import { LanguageSquareIcon, Location04Icon } from 'hugeicons-react'

import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { fetchAPIData, STATIC_DATA } from '@/data'

// Delay before blurring elements in
const BLUR_FADE_DELAY = 0.04

// Invalidate cache at most once every x seconds
export const revalidate = 900 // 15 minutes

export default async function Page (): Promise<JSX.Element> {
  const data = await fetchAPIData()
  const metadata = data.metadata
  const headingSummary = [metadata.title, metadata.summary].join('. ') + '.'

  // Render UI
  return (
    <main className='flex flex-col min-h-[100dvh] space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='gap-2 flex justify-between'>
            <div className='flex-col flex flex-1 space-y-1.5'>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className='text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none'
                yOffset={8}
                text={`hey, i'm ${metadata.name.split(' ')[0].toLowerCase()} 👋`}
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className='max-w-[420px] md:text-xl'
                text={headingSummary}
              />
              <div className='flex items-center gap-7'>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className='flex items-center text-sm text-muted-foreground mt-1'
                  icon={<Location04Icon className='h-4 w-4' />}
                  text={metadata.location}
                />
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className='flex items-center text-sm text-muted-foreground mt-1'
                  icon={<LanguageSquareIcon className='h-4 w-4' />}
                  text={metadata.languages.join(', ')}
                />
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className='size-28 border'>
                <AvatarImage alt={metadata.name} src={STATIC_DATA.avatarUrl} />
                <AvatarFallback>{metadata.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className='text-xl font-bold'>About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className='prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert'>
            {STATIC_DATA.description}
          </Markdown>
        </BlurFade>
      </section>
    </main>
  )
}
