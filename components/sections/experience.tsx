import BlurFade from '@/components/magicui/blur-fade'

import { Row } from '@/components/sections/row'
import { BASE_URL } from '@/data'

import type { ISectionProps } from '@/lib/types'

export default function Experience ({
  data, blurDelay
}: ISectionProps): JSX.Element {
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
            <Row
              key={exp.id}
              logoUrl={BASE_URL + exp.imagePath}
              altText={exp.company}
              title={exp.title}
              subtitle={exp.company}
              tech={exp.technologies}
              period={`${exp.startDate} - ${exp.endDate}`}
              description={exp.description}
              duration={exp.duration}
              location={exp.location}
              roleType={exp.type}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
