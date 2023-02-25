import DebugInfo from '@/features/debugInfo'
import Navbar from '@/ui/navbar'
import World from '@/world'

// Create canvas for 3D rendering
const worldCanvas = document.createElement('canvas')
worldCanvas.setAttribute('id', 'world')
document.body.append(worldCanvas)

// Create world
const world = new World()
world.create(worldCanvas)

/**
 * Main app.
 */
export default function App(): JSX.Element {
  return <>
    <Navbar />
    <DebugInfo />

    <div className='flex absolute bottom-0 w-full h-8 items-center px-3 text-white'>
      Copyright &copy; Kyle Chapman 2023
    </div>
  </>
}
