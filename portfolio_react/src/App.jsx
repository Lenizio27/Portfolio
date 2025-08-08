import { useState } from 'react'
import Paths from './Paths/Paths'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Paths/>
    </>
  )
}

export default App
