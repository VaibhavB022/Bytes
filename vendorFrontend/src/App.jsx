import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Orders from './pages/Orders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
      <Route path='/' element={<Menu/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
      </Routes>
    </>
  )
}

export default App
