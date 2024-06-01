import React from 'react'
import { useState } from 'react';
import foto1 from '../../img/foto1.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../Style/Service/Service.css'
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Service() {
    const [activeButton, setActiveButton] = useState(null);
    useGSAP(()=>{
      gsap.fromTo('.Ser-content2__header',
        {
          opacity:0,
        },
        {
          opacity:1,
          duration:3,
          scrollTrigger:{
            trigger:'.Ser-content2__header',
            start:'top 90%',
            scrub:3
          }
        }
      )
      gsap.fromTo('.Ser__con__title',
        {
          opacity:0,
          duration:4
        },
        {
          opacity:1,
          scrollTrigger:{
            trigger:'.Ser__con__title',
            start:'top 90%',
            scrub:3
          }
        }
      )
      gsap.fromTo('.Ser__con__text',
        {
          opacity:0,
          duration:5
        },
        {
          opacity:1,
          scrollTrigger:{
            trigger:'.Ser__con__text',
            start:'top 80%',
            scrub:4
          }
        }
      )
      gsap.fromTo('.ser__btn',
        {
          opacity:0,
          duration:5
        },
        {
          opacity:1,
          scrollTrigger:{
            trigger:'.ser__btn',
            start:'top 80%',
            scrub:4
          }
        }
      )
      gsap.fromTo('.ser__foto',
        {
          opacity:0,
          y:'110%'
        },
        {
          opacity:1,
          y:'0%',
          scrollTrigger:{
            trigger:'.ser__foto',
            start:'top 250%',
            scrub:3
          }
        }
      )
      })
  return (
    <section className='Ser'>
        <div className='container'>
            <div className='Ser-content2__header'>
                          <button
                            className={activeButton === null ? 'ActiveBtn' : ''}
                            onClick={() => setActiveButton(null)}
                          >
                            Web site
                          </button>
                          <button
                            className={activeButton === 1 ? 'ActiveBtn' : ''}
                            onClick={() => setActiveButton(1)}
                          >
                            App
                          </button>
                          <button
                            className={activeButton === 2 ? 'ActiveBtn' : ''}
                            onClick={() => setActiveButton(2)}
                          >
                            Logo
                          </button>
                          <button className={activeButton === 3 ? 'ActiveBtn' : ''}
                          onClick={() => setActiveButton(3)}>
                            SRM
                          </button>
                    </div>
            <div className='Ser-wrapper'>
                <div className='Service-content'>
                    <h2 className='Ser__con__title'>
                        Web site
                    </h2>
                    <p className='Ser__con__text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit minima non asperiores necessitatibus quae natus eligendi quidem harum sed aspernatur adipisci, repellendus tempore, iusto commodi incidunt sequi at a?
                    </p>
                    <button className='ser__btn'>
                        Learn more
                    </button>
                </div>
                <div className='Ser-content2'>
                    <img className='ser__foto' src={foto1} alt="foto" />
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Service