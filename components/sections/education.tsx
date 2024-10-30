import { GraduationCapIcon } from 'lucide-react'

import BlurFade from '@/components/magicui/blur-fade'

import { Row } from '@/components/sections/row'
import { BASE_URL } from '@/data'

import type { ISectionProps } from '@/lib/types'

export default function Education ({
  data, blurDelay
}: ISectionProps): JSX.Element {
  return (
    <section id='education'>
      <div className='flex min-h-0 flex-col gap-y-4'>
        <BlurFade delay={blurDelay * 7}>
          <h2 className='flex gap-2 text-xl font-bold items-center'>
            <GraduationCapIcon strokeWidth={2} className='w-4 h-4' />
            Education
          </h2>
        </BlurFade>
        {data.education.map((edu, idx) => (
          <BlurFade
            key={edu.id}
            delay={blurDelay * 8 + idx * 0.05}
          >
            <Row
              key={edu.id}
              logoUrl={BASE_URL + edu.imagePath}
              altText={edu.school}
              title={edu.school}
              subtitle={edu.title}
              period={`${edu.startYear} - ${edu.endYear}`}
              description={edu.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
