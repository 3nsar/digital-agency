import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Sponsor from './components/Sponsor/Sponsor'
import Info from './components/Info/Info'
import Cards from './components/Cards/Cards'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Sponsor/>
      <Info/>
      <Cards/>
    </div>
  )
}

export default App