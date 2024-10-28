import { useState } from 'react'

import First from './pages/First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First/>
    </>
  )
}

export default App
