import { useState, FC } from 'react'
import { HiOutlineBars3, HiOutlineCodeBracket, HiOutlineDocumentText, HiOutlineEnvelopeOpen, HiOutlineFolderOpen, HiOutlineHome, HiOutlineXMark } from 'react-icons/hi2'

/** Buttons to show in the navigation menu */
const navButtons = [
  { id: 'home', text: 'Home', icon: HiOutlineHome },
  { id: 'projects', text: 'Projects', icon: HiOutlineFolderOpen },
  { id: 'experience', text: 'Experience', icon: HiOutlineCodeBracket },
  { id: 'cv', text: 'CV', icon: HiOutlineDocumentText },
]

/** Contact button */
const contactBtn = { id: 'contact', text: 'Contact', icon: HiOutlineEnvelopeOpen }

/**
 * Shows a navigation bar at the top of the screen.
 */
export default function Navbar() {
  let [ isOpen, setOpen ] = useState(false)
  let [ selectedBtn, setSelectedBtn ] = useState(navButtons[0].id)

  // Called when a navigation button is clicked
  function onButtonClick(button: string): void {
    if (selectedBtn === button) {
      return
    }

    setSelectedBtn(button)

    // Close mobile menu if open
    if (isOpen) {
      setOpen(false)
    }
  }

  // Render
  return <nav>
    <div className='bg-zinc-800 mx-auto px-2 sm:px-6 lg:px-8'>
      <div className='relative flex h-12 items-center justify-between'>
        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
          {/* Mobile menu button */}
          <button type='button' onClick={e => setOpen(!isOpen)} className='inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-zinc-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' aria-controls='mobile-menu' aria-expanded={isOpen ? 'true' : 'false'}>
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

        <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
          <NavButton icon={contactBtn.icon} text={contactBtn.text} hideTextMobile={true} selected={selectedBtn === contactBtn.id} onClick={() => onButtonClick(contactBtn.id)} />
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    <div className={`bg-zinc-800/80 ${isOpen ? 'block' : 'hidden'} sm:hidden`}>
      <div className='space-y-1 px-2 pt-2 pb-3'>
        { navButtons.map(btn => (
          <NavButton key={btn.id} icon={btn.icon} text={btn.text} selected={selectedBtn === btn.id} onClick={() => onButtonClick(btn.id)} />
        ))}
      </div>
    </div>
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
  const selectedStyle = props.selected ? 'text-white sm:border-white' : ''
  const hiddenOnMobile = !!props.hideTextMobile

  // Render
  return <button type='button' onClick={e => props.onClick()} className={`flex items-center w-full sm:w-auto px-3 py-2 text-gray-300 border-b border-transparent ${selectedStyle} hover:text-white sm:hover:border-white rounded-md sm:rounded-none ${props.selected ? 'bg-zinc-600' : 'bg-transparent'} sm:bg-transparent text-base transition-all duration-300 cursor-pointer`}>
    <props.icon className={`${hiddenOnMobile ? 'mr-0' : 'mr-2'} sm:mr-2`} />
    <span className={`${hiddenOnMobile ? 'hidden' : 'block'} sm:block`}>
      { props.text }
    </span>
  </button>
}
