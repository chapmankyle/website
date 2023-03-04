import { useState, FC } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineBars3, HiOutlineCodeBracket, HiOutlineDocumentText, HiOutlineEnvelopeOpen, HiOutlineFolderOpen, HiOutlineHome, HiOutlineXMark } from 'react-icons/hi2'

import { store } from '@/app/store'
import { update as updateSection } from '@/features/sectionSlice'

/** Buttons to show in the navigation menu */
const navButtons = [
  { id: 'home', text: 'Home', icon: HiOutlineHome },
  { id: 'projects', text: 'Projects', icon: HiOutlineFolderOpen },
  { id: 'experience', text: 'Experience', icon: HiOutlineCodeBracket },
  { id: 'cv', text: 'CV', icon: HiOutlineDocumentText },
]

/** Contact button */
const contactBtn = { id: 'contact', text: 'Contact', icon: HiOutlineEnvelopeOpen }

/** Animation variants for the hamburger dropdown menu */
const hamburgerVariants = {
  open: { y: 0 },
  closed: { y: -200 },
}

/**
 * Shows a navigation bar at the top of the screen.
 */
export default function Navbar() {
  const [ isOpen, setOpen ] = useState(false)
  const [ selectedBtn, setSelectedBtn ] = useState(navButtons[0].id)

  // Called when a navigation button is clicked
  function onButtonClick(button: string): void {
    if (selectedBtn === button) {
      return
    }

    // Update selected button
    setSelectedBtn(button)
    store.dispatch(updateSection(button))

    // Close mobile menu if open
    if (isOpen) {
      setOpen(false)
    }
  }

  // Render
  return <nav>
    <div className='relative bg-primary mx-auto px-2 sm:px-6 lg:px-8 z-10'>
      <div className='relative flex h-12 items-center justify-between'>
        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
          {/* Mobile hamburger menu button */}
          <button type='button' onClick={() => setOpen(!isOpen)} className='inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-secondary focus:outline-none focus:ring-0' aria-controls='mobile-menu' aria-expanded={isOpen ? 'true' : 'false'}>
            <span className='sr-only'>Open main menu</span>

            {/* Icon when menu is closed */}
            <HiOutlineBars3 className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`} />
            {/* Icon when menu is open */}
            <HiOutlineXMark className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`} />
          </button>
        </div>
        <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
          {/* Profile image */}
          <div className='flex flex-shrink-0 items-center'>
            <img className='block h-8 w-auto rounded-xl lg:hidden' src='./logo.jpeg' alt='Me' />
            <img className='hidden h-8 w-auto rounded-xl lg:block' src='./logo.jpeg' alt='Me' />
          </div>

          {/* Navigation items */}
          <div className='hidden sm:ml-6 sm:block'>
            <div className='flex space-x-4'>
              { navButtons.map(btn => (
                <NavButton key={btn.id} icon={btn.icon} text={btn.text} selected={selectedBtn === btn.id} onClick={() => onButtonClick(btn.id)} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact button */}
        <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
          <NavButton icon={contactBtn.icon} text={contactBtn.text} hideTextMobile={true} selected={selectedBtn === contactBtn.id} onClick={() => onButtonClick(contactBtn.id)} />
        </div>
      </div>
    </div>

    {/* Mobile hamburger menu */}
    <motion.div variants={hamburgerVariants} initial='closed' animate={isOpen ? 'open' : 'closed'} transition={{ duration: 0.4 }} className='bg-primary/80 block sm:hidden'>
      <div className='space-y-1 px-2 pt-2 pb-3'>
        { navButtons.map(btn => (
          <NavButton key={btn.id} icon={btn.icon} text={btn.text} selected={selectedBtn === btn.id} onClick={() => onButtonClick(btn.id)} />
        ))}
      </div>
    </motion.div>
  </nav>
}

/** Properties for a navigation button */
interface NavButtonProps {
  /** Icon to display on the left of the text */
  icon: any;
  /** Text to display */
  text: string;
  /** `true` if this button is currently selected, `false` otherwise */
  selected: boolean;
  /** `true` to hide the text on mobile, `false` otherwise */
  hideTextMobile?: boolean;
  /** Function to execute when the button is clicked */
  onClick: () => void;
}

/**
 * Shows a navigation button.
 * @param props Navigation button properties.
 */
const NavButton: FC<NavButtonProps> = (props) => {
  const selectedStyle = props.selected ? 'text-secondary sm:border-secondary' : 'text-gray-300'
  const hiddenOnMobile = !!props.hideTextMobile

  // Render
  return <button type='button' onClick={() => props.onClick()} className={`flex items-center w-full sm:w-auto px-3 py-2 border-b border-transparent ${selectedStyle} hover:text-secondary sm:hover:border-secondary rounded-md sm:rounded-none sm:bg-transparent text-base transition-all duration-300 cursor-pointer`}>
    <props.icon className={`${hiddenOnMobile ? 'mr-0' : 'mr-2'} sm:mr-2`} />
    <span className={`${hiddenOnMobile ? 'hidden' : 'block'} sm:block`}>
      { props.text }
    </span>
  </button>
}
