import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='font-bold'>Kyle Chapman</div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
