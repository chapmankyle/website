'use client'

import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ExperienceRowProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  tech?: readonly string[]
  period: string
  description?: string
  duration?: string
}

export const ExperienceRow = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  tech,
  period,
  description,
  duration
}: ExperienceRowProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    if (description == null) {
      return
    }

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
          <Avatar className='border size-12 m-auto bg-muted-background dark:bg-foreground'>
            <AvatarImage src={logoUrl} alt={altText} className='object-contain' />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex-grow ml-4 items-center flex-col group'>
          <CardHeader>
            <div className='flex items-center justify-between gap-x-2 text-base'>
              <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'>
                {title}
                <ChevronRightIcon
                  className={cn(
                    'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                    isExpanded ? 'rotate-90' : 'rotate-0'
                  )}
                />
              </h3>
              <div className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right'>
                {period}
              </div>
            </div>
            {subtitle != null
              ? (
                <div className='font-sans flex-1 text-xs'>
                  {subtitle}
                </div>
                )
              : null}
          </CardHeader>
          {description != null
            ? (
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
                className='mt-2 text-xs sm:text-sm'
              >
                {description}
              </motion.div>
              )
            : null}
          {tech != null
            ? (
              <span className='inline-flex gap-x-1'>
                {tech.map((badge, index) => (
                  <Badge variant='secondary' className='align-middle text-xs' key={index}>
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
