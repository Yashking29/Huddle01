import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-screen flex justify-center bg-black'>
      <div className='w-full px-20'>
          <Navbar/>
          <Hero/>
       
      </div>
    </main>
  )
}

export default App
