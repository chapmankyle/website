import BlurFade from '@/components/magicui/blur-fade'

import { ProjectCard } from '@/components/sections/project-card'

import type { ISectionProps } from '@/lib/types'

export default function Projects ({
  data, blurDelay
}: ISectionProps): JSX.Element {
  return (
    <section id='projects'>
      <div className='space-y-12 w-full py-12'>
        <BlurFade delay={blurDelay * 9}>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                My Projects
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Check out my work
              </h2>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                I&apos;ve worked various projects throughout the years and here are
                some of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
          {data.projects.map((project, idx) => (
            <BlurFade
              key={project.title}
              delay={blurDelay * 10 + idx * 0.05}
            >
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.languages}
                image={project.image}
                link={project.github}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
