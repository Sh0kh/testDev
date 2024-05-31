import React from 'react'
import '../../Style/Home/Contact.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Contact() {
    useGSAP(()=>{
        gsap.fromTo('.contact-img1',
        {
          opacity:0,
          x:'-100%'
        },
        {
          opacity:1,
          x:'0%',
          scrollTrigger:{
            trigger:'.contact-img1',
            start:'top 200%',
            scrub:3,
            // markers:true
          }
        }
      )
        gsap.fromTo('.contact-img2',
        {
          opacity:0,
          x:'100%'
        },
        {
          opacity:1,
          x:'0%',
          scrollTrigger:{
            trigger:'.contact-img2',
            start:'top 200%',
            scrub:3
          }
        }
      )
      gsap.fromTo('.contact-title',
      {
          y:'-200%',
          opacity:0,
      },
      {
          opacity:1,
          y:'0%',
          scrollTrigger:{
              trigger:'.contact-title',
              start:'top 90%',
              scrub:1
          }
      }
    )
    })
  return (
    <section className='Contact'>
        <div className='container'>
            <h1 className='contact-title'> 
                Connect with us
            </h1>
            <form>
                <label htmlFor="ConISm">
                    <h3>
                        Ismingiz
                    </h3>
                    <input id='ConISm' type="text" placeholder='Ismingiz' />
                </label>
                <label htmlFor="contel">
                    <h3>
                        Telefon raqamingiz
                    </h3>
                    <input id='contel' type="text" placeholder='+998' />
                </label>
                <label htmlFor="ConCom">
                    <h3>
                        Maqsadingiz
                    </h3>
                    <textarea id="ConCom"></textarea>
                </label>
                <button type='submit'>
                    Jo`natish
                </button>
            </form>
            <img className='contact-img1' src="https://static.wixstatic.com/media/5515cb_86516a2c38924cdc8b06f8c2b79de934~mv2.png/v1/fill/w_570,h_738,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Echt-Visual%2012-Content%20Writing.png" alt="foto" />
            <img className='contact-img2' src="https://static.wixstatic.com/media/b81d97_56641c2c987b4e929b3cf5fb64cbb408~mv2.png/v1/crop/x_186,y_0,w_2162,h_2800/fill/w_419,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Echt-Visual%204%20-SEO.png" alt="foto" />
        </div>
    </section>
  )
}

export default Contact