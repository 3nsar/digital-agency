import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Sponsor from './components/Sponsor/Sponsor'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Sponsor/>
    </div>
  )
}

export default App