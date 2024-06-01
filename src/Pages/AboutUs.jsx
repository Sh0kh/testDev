import React from 'react'
import Hero from '../Components/AboutUs/Hero'
import AboutDev from '../Components/AboutUs/AboutDev'
import Workers from '../Components/AboutUs/Workers'
import Contact from '../Components/Home/Contact'
function AboutUs() {
  return (
    <div>
        <Hero/>
        <AboutDev/>
        <Workers/>
        <Contact/>
    </div>
  )
}

export default AboutUs