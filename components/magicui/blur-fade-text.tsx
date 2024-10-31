'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useMemo } from 'react'

interface BlurFadeTextProps {
  text: string
  icon?: JSX.Element
  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  characterDelay?: number
  delay?: number
  yOffset?: number
  animateByCharacter?: boolean
}
const BlurFadeText = ({
  icon,
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false
}: BlurFadeTextProps): JSX.Element => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: 'blur(8px)' },
    visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' }
  }
  const combinedVariants = (variant != null) ? variant : defaultVariants
  const characters = useMemo(() => Array.from(text), [text])

  if (animateByCharacter) {
    return (
      <AnimatePresence>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={combinedVariants}
            transition={{
              yoyo: Infinity,
              delay: delay + i * characterDelay,
              ease: 'easeOut'
            }}
            className={cn('inline-block', className)}
            style={{ width: char.trim() === '' ? '0.2em' : 'auto' }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      <motion.span
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={combinedVariants}
        transition={{
          yoyo: Infinity,
          delay,
          ease: 'easeOut'
        }}
        className={cn('inline-block', className)}
      >
        {(icon != null) ? <span className='mr-2'>{icon}</span> : null}
        {text}
      </motion.span>
    </AnimatePresence>
  )
}

export default BlurFadeText
