'use client'

import Link from 'next/link'

import { Dock, DockIcon } from '@/components/magicui/dock'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { buttonVariants } from '@/components/ui/button'

import { Contact01Icon, File01Icon, Github01Icon, Home01Icon, Linkedin01Icon, SourceCodeIcon, UserIcon } from 'hugeicons-react'
import { GraduationCapIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const ITEMS = {
  sections: [
    {
      label: 'Home',
      href: '/',
      icon: Home01Icon
    },
    {
      label: 'About',
      href: '#about',
      icon: UserIcon
    },
    {
      label: 'Experience',
      href: '#experience',
      icon: File01Icon
    },
    {
      label: 'Education',
      href: '#education',
      icon: GraduationCapIcon
    },
    {
      label: 'Projects',
      href: '#projects',
      icon: SourceCodeIcon
    },
    {
      label: 'Contact',
      href: '#contact',
      icon: Contact01Icon
    }
  ],
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/chapmankyle',
      icon: Github01Icon
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kyle-chapman-87062730/',
      icon: Linkedin01Icon
    }
  ]
}

export default function Navbar (): JSX.Element {
  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14'>
      <div className='fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background' />
      <Dock className='w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'>
        {ITEMS.sections.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12'
                  )}
                >
                  <item.icon className='size-4' strokeWidth={2} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation='vertical' className='h-full' />
        {ITEMS.social.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12'
                  )}
                >
                  <item.icon className='size-4' strokeWidth={2} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </div>
  )
}
