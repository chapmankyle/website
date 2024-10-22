import BlurFade from '@/components/magicui/blur-fade'

import { ExperienceRow } from '@/components/sections/experience-row'
import { BASE_URL } from '@/data'
import { SectionProps } from '@/lib/types'

export default function Experience ({
  data, blurDelay
}: SectionProps): JSX.Element {
  return (
    <section id='experience'>
      <div className='flex min-h-0 flex-col gap-y-3'>
        <BlurFade delay={blurDelay * 5}>
          <h2 className='text-xl font-bold'>Experience</h2>
        </BlurFade>
        {data.experience.map((exp, idx) => (
          <BlurFade
            key={exp.id}
            delay={blurDelay * 6 + idx * 0.05}
          >
            <ExperienceRow
              key={exp.company}
              logoUrl={BASE_URL + exp.imagePath}
              altText={exp.company}
              title={exp.company}
              subtitle={exp.title}
              tech={exp.technologies}
              period={`${exp.startDate} - ${exp.endDate}`}
              duration={exp.duration}
              description={exp.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
