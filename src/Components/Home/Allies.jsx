import React from 'react'
import '../../Style/Home/Alies.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Allies() {
  useGSAP(()=>{ 
    gsap.fromTo('.foto1',
      { x: '-100%' },
      {
        x: '0',
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    gsap.fromTo('.foto2',
      { x: '-100%' },
      {
        x: '0',
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    gsap.fromTo('.foto3',
      { x: '-100%' },
      {
        x: '0',
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    gsap.fromTo('.foto4',
      { x: '-100%' },
      {
        x: '0',
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    gsap.fromTo('.foto5',
      { x: '-100%' },
      {
        x: '0',
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    gsap.fromTo('.foto6',
      { x: '-100%' },
      {
        x: '0',
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    gsap.fromTo('.foto7',
      { x: '-100%' },
      {
        x: '0',
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    gsap.fromTo('.foto8',
      { x: '-100%' },
      {
        x: '0',
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  })
  return (
    <section className='Alies'>
        <div className='contaoner'>
            <div className='Alies-wrapper'>
                <img className='foto1' src="https://devosoftuz.netlify.app/sponsors/epam.png" alt="foto" />
                <img className='foto2' src="https://devosoftuz.netlify.app/sponsors/epam.png" alt="foto" />
                <img className='foto3' src="https://devosoftuz.netlify.app/sponsors/epam.png" alt="foto" />
                <img className='foto4' src="https://devosoftuz.netlify.app/sponsors/epam.png" alt="foto" />
                <img className='foto5' src="https://devosoftuz.netlify.app/sponsors/epam.png" alt="foto" />
                <img className='foto6' src="https://devosoftuz.netlify.app/sponsors/epam.png" alt="foto" />
                <img className='foto7' src="https://devosoftuz.netlify.app/sponsors/epam.png" alt="foto" />
                <img className='foto8' src="https://devosoftuz.netlify.app/sponsors/epam.png" alt="foto" />
            </div>
        </div>
    </section>
  )
}

export default Allies