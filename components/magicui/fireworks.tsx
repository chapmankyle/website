'use client'

import confetti from 'canvas-confetti'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { RainbowButton } from '@/components/magicui/rainbow-button'

/** Duration that the fireworks should show for */
const DURATION = 5 * 1000

/** Default configuration for the fireworks */
const DEFAULT_CONFIG = {
  startVelocity: 30,
  spread: 360,
  ticks: 60,
  zIndex: 0
}

/**
 * @param min Minimum number (inclusive)
 * @param max Maximum number (inclusive)
 * @returns Random number between the min and max
 */
const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

/** Interval for displaying the fireworks */
let fireworkInterval: NodeJS.Timeout | null = null

let hasFired = false

interface Props {
  answer: string
  winMessage: string
}

export function Fireworks ({
  answer,
  winMessage
}: Props): JSX.Element {
  const [value, setValue] = useState<string>('')

  const handleClick = (value: string): void => {
    if (answer === '-') {
      return
    }

    if (value !== answer) {
      console.log('Nope :)')
      return
    }

    if (!hasFired) {
      console.log('Nice! 🎉', winMessage)
    }

    const animationEnd = Date.now() + DURATION
    hasFired = true

    if (fireworkInterval != null) {
      clearInterval(fireworkInterval)
    }

    fireworkInterval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        if (fireworkInterval != null) {
          clearInterval(fireworkInterval)
          fireworkInterval = null
        }

        return
      }

      const particleCount = 50 * (timeLeft / DURATION)
      confetti({
        ...DEFAULT_CONFIG,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })?.catch(() => {})
      confetti({
        ...DEFAULT_CONFIG,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })?.catch(() => {})
    }, 250)
  }

  return (
    <div style={{ display: 'none !important' }} className='flex w-full space-x-2 mt-[40px] items-center justify-center'>
      <Input type='text' value={value} placeholder='hmmm, what is this?' className='max-w-xs' onChange={evt => setValue(evt.target.value)} />
      <RainbowButton onClick={() => handleClick(value)}>Discover</RainbowButton>
    </div>
  )
}
