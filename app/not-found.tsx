import Link from 'next/link'

import { BinaryCodeIcon, Home12Icon } from 'hugeicons-react'

import { Button } from '@/components/ui/button'
import { Fireworks } from '@/components/magicui/fireworks'

export default function NotFound (): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-center space-y-6 p-8'>
        <div className='flex justify-center'>
          <BinaryCodeIcon className='h-24 w-24 text-orange-500 dark:text-orange-400' />
        </div>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100'>
          Hmm, this page does not exist
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-300'>
          Well, there is absolutely nothing else to see on this page.
        </p>
        <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
          <Button asChild variant='default'>
            <Link href='/'>
              <Home12Icon className='mr-1 h-4 w-4' strokeWidth={2} /> Go Back Home
            </Link>
          </Button>
        </div>
      </div>

      <Fireworks answer={process.env.NOT_FOUND_ANSWER ?? '-'} winMessage={process.env.NOT_FOUND_WIN_MSG ?? ''} />
    </div>
  )
}
