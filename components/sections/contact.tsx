import BlurFade from '@/components/magicui/blur-fade'

import type { ISectionProps } from '@/lib/types'

export default function Contact ({
  data, blurDelay
}: ISectionProps): JSX.Element {
  return (
    <section id='contact'>
      <div className='grid items-center justify-center gap-4 px-4 text-center sm:px-6 w-full pt-2 pb-10 sm:py-8'>
        <BlurFade delay={blurDelay * 15}>
          <div className='space-y-3'>
            <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
              Contact
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Get in touch
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              You are welcome to send me an email at{' '}
              <a
                href={`mailto:${data.contact.email}`}
                className='text-cyan-600 underline decoration-2 decoration-cyan-600/0 underline-offset-2 transition-all hover:underline hover:decoration-cyan-600'
              >
                {data.contact.email}
              </a>{' '}
              or reach out to me on{' '}
              <a
                href={data.contact.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-cyan-600 underline decoration-2 decoration-cyan-600/0 underline-offset-2 transition-all hover:underline hover:decoration-cyan-600'
              >
                LinkedIn
              </a>.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
