const now = new Date()
const year = now.getFullYear()

/**
 * Shows a footer at the bottom of the screen.
 */
export default function Footer() {
  return <div className='flex absolute bottom-0 w-full h-8 items-center px-2'>
    <span className='text-white text-shadow shadow-black'>Kyle Chapman, { year }</span>
  </div>
}
