import BlurFade from '@/components/magicui/blur-fade'

import { ExperienceRow } from '@/components/sections/experience-row'
import { BASE_URL } from '@/data'

import type { ISectionProps } from '@/lib/types'

export default function Education ({
  data, blurDelay
}: ISectionProps): JSX.Element {
  return (
    <section id='education'>
      <div className='flex min-h-0 flex-col gap-y-3'>
        <BlurFade delay={blurDelay * 7}>
          <h2 className='text-xl font-bold'>Education</h2>
        </BlurFade>
        {data.education.map((edu, idx) => (
          <BlurFade
            key={edu.id}
            delay={blurDelay * 8 + idx * 0.05}
          >
            <ExperienceRow
              key={edu.id}
              logoUrl={BASE_URL + edu.imagePath}
              altText={edu.school}
              title={edu.school}
              subtitle={edu.title}
              period={`${edu.startYear} - ${edu.endYear}`}
              description={edu.description}
              location={edu.location}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
