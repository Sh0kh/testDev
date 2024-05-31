import React from 'react'
import Hero from '../Components/Home/Hero'
import AboutUS from '../Components/Home/AboutUS'
import Service from '../Components/Home/Service'
import Strong from '../Components/Home/Strong'
import Allies from '../Components/Home/Allies'
import Contact from '../Components/Home/Contact'

function Home() {
  return (
    <div>
        <Hero/>
        <AboutUS/>
        <Service/>
        <Strong/>
        <Allies/>
        <Contact/>
    </div>
  )
}

export default Home