import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Sponsor from './components/Sponsor/Sponsor'
import Info from './components/Info/Info'
import Cards from './components/Cards/Cards'
import Assistance from './components/Assistance/Assistance'
import Team from './components/Team/Team'
import Partner from './components/Partner/Partner'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Sponsor/>
      <Info/>
      <Cards/>
      <Assistance/>
      <Team/>
      <Partner/>
    </div>
  )
}

export default App