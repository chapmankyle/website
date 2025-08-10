'use client'

import React from 'react'
import Link from 'next/link'
import Markdown from 'react-markdown'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import type { IDuration, ILocation } from '@/lib/types'

interface RowProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  tech?: readonly string[]
  period: string
  description?: string
  duration?: IDuration
  location?: ILocation
  roleType?: string
  expand?: boolean
}

export const Row = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  tech,
  period,
  description,
  duration,
  location,
  roleType,
  expand
}: RowProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(expand ?? false)
  const durationStr = duration
    ? [
      duration.years != null && duration.years > 0
        ? `${duration.years} yr${duration.years > 1 ? 's' : ''}`
        : null,
      duration.months != null && duration.months > 0
        ? `${duration.months} mo${duration.months > 1 ? 's' : ''}`
        : null
    ].filter(s => s != null && s.length > 0).join(' ')
    : null
  const bodySubtitle = [location?.name, durationStr].filter(s => s != null && s.length > 0).join(' | ')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  return (
    <Link
      href={href ?? '#'}
      className='block cursor-pointer'
      onClick={handleClick}
    >
      <Card className='flex'>
        <div className='flex-none'>
          <Avatar className='border size-8 sm:size-12 m-auto bg-muted-background dark:bg-foreground'>
            <AvatarImage src={logoUrl} alt={altText} className='object-contain' />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex-grow ml-4 items-center flex-col group'>
          <CardHeader>
            <div className='flex items-center justify-between gap-x-1 md:gap-x-2 text-base'>
              <h3 className='inline-flex items-center justify-center font-semibold leading-none text-sm'>
                {title}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      'size-4 translate-x-[2px] opacity-50 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                      isExpanded ? 'rotate-90' : 'rotate-0'
                    )}
                  />
                )}
              </h3>
              <div className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right'>
                {period}
              </div>
            </div>
            {subtitle != null
              ? (
                <div className='font-sans flex-1 text-xs'>
                  {subtitle} {roleType != null ? `| ${roleType}` : null}
                </div>
                )
              : null}
          </CardHeader>
          {description == null || description.length < 1
            ? bodySubtitle?.length > 0 ? <RowSubtitle text={bodySubtitle} /> : null
            : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? 'auto' : 0
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className='mb-1 text-xs sm:text-sm'
              >
                {bodySubtitle?.length > 0 ? <RowSubtitle text={bodySubtitle} /> : null}
                <Markdown
                  className='prose mt-2 text-xs sm:text-sm text-foreground/80'
                  components={{
                    strong: ({ ...props }) => <strong {...props} className='font-semibold text-foreground' />,
                    p: ({ ...props }) => <p {...props} className='mb-1' />,
                    ul: ({ ...props }) => <ul {...props} className='list-disc pl-5 my-1' />,
                    li: ({ ...props }) => <li {...props} className='mb-0' />,
                    code: ({ ...props }) => <code {...props} className='px-1 py-[1px] bg-[#DDD] rounded border border-[#BFBFBF]' />
                  }}
                >
                  {description}
                </Markdown>
              </motion.div>
              )}
          {tech != null
            ? (
              <span className='flex flex-wrap gap-1 mt-2'>
                {tech.map((badge, index) => (
                  <Badge variant='secondary' className='align-middle px-1.5 sm:px-2 text-[9px] sm:text-[11px]' key={index}>
                    {badge}
                  </Badge>
                ))}
              </span>
              )
            : null}
        </div>
      </Card>
    </Link>
  )
}

const RowSubtitle = ({ text }: { text: string }): JSX.Element => {
  return (
    <span className='flex items-center mt-[1px] mb-1 text-xs text-muted-foreground'>
      {text}
    </span>
  )
}
