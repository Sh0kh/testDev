import React from 'react'
import '../../Style/AboutUs/Hero.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Hero() {
    useGSAP(()=>{
        gsap.fromTo('.hero__title',
        { y: '-100%', opacity: 0 }, 
        { y: '0%', opacity: 4, duration: 2, ease: 'power2.out' }
        )
        gsap.fromTo('.hero__text',
        {  opacity: 0 }, 
        {  opacity: 1, duration: 10, ease: 'power2.out' }
        )
        gsap.fromTo('.Hero__subtitle',
        {  opacity: 0 }, 
        {  opacity: 1, duration: 5, ease: 'power2.out' }
        )
        gsap.fromTo('.Hero__button',
        { y:'150%', opacity: 0 }, 
        { y:'0', opacity: 1, duration: 3, }
        )
    })
  return (
    <section className='About__Hero'>
        <div className='container'>
        <h1 className='hero__title'>
                About<span>Us</span>
            </h1>
            <h2 className='hero__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et voluptas officiis. Itaque eum qua met.sit 
            </h2>
            <span className='Hero__subtitle'>
                Lorem ipsum dolor sit amet.
            </span>
            <NavLink to="/Service" className='Hero__button'>
            Xizmatlar
            </NavLink>
        </div>
    </section>
  )
}

export default Hero