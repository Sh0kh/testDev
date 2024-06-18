import React from 'react';
import '../Style/Home.css';
import Hero from '../Components/Home/Hero';
import AboutUS from '../Components/Home/AboutUS';
import Service from '../Components/Home/Service';
import Strong from '../Components/Home/Strong';
import Allies from '../Components/Home/Allies';
import Contact from '../Components/Home/Contact';



function Home() {


  return (
    <div className='home'>
      {/* <svg ref={colorRef} className='line' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#000" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5"/>
      </svg> */}
      <Hero/>
      <AboutUS/>
      <Service/>
      <Strong/>
      <Allies/>
      <Contact/>
    </div>
  );
}

export default Home;
