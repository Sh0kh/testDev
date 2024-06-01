import React from 'react'
import '../../Style/AboutUs/AboutDev.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
function AboutDev() {
  useGSAP(()=>{
    gsap.fromTo('.AboutUs__title',
        {
            y:'-200%',
            opacity:0,
        },
        {
            opacity:1,
            y:'0%',
            scrollTrigger:{
                trigger:'.AboutUs__title',
                start:'top 90%',
                scrub:1
            }
        }
    )
    gsap.fromTo('.AboutUs__text',
        {
            opacity:0,
        },
        {
            opacity:1,
            scrollTrigger:{
                trigger:'.AboutUs__text',
                start:'top 90%',
                scrub:5
            }
        }
    )
    gsap.fromTo('.AboutUs__text2',
        {
            opacity:0,
        },
        {
            opacity:1,
            scrollTrigger:{
                trigger:'.AboutUs__text',
                start:'top 90%',
                scrub:5
            }
        }
    )
    gsap.fromTo('.AboutUs_img1',
        {
            opacity:0,
            x:'-100%',
        },
        {
            opacity:1,
            x:'0%',
            scrollTrigger:{
                trigger:'.AboutUs_img1',
                start:'top 100%',
                scrub:3,
            }
        }
    )
    gsap.fromTo('.AboutUs_img2',
        {
            opacity:0,
            x:'100%',
        },
        {
            opacity:1,
            x:'0%',
            scrollTrigger:{
                trigger:'.AboutUs_img2',
                start:'top 100%',
                scrub:3
            }
        }
    )
    gsap.fromTo('.AboutUs__btn',
        {
            opacity:0,
            y:'100%'
        },
        {
            opacity:1,
            y:'0%',
            scrollTrigger:{
                trigger:'.AboutUs__btn',
                start:'top 90%'
            }
        }
    )
})
  return (
   <section className='AboutDev'>
    <div className='container'>
            <div className='AboutDev-contant'>
                <h1 className='AboutUs__title'>
                    About <span>Devosoft</span>
                </h1>
                <p className='AboutUs__text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi excepturi natus quia doloribus officiis iusto eligendi veritatis voluptas placeat dolorem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque unde quod esse, consectetur dolor corrupti facilis ratione, incidunt quisquam quibusdam praesentium, accusamus nobis expedita nostrum? Sit neque earum minus dignissimos!
                </p>
            </div>
            <div className='AboutDev-wrapper'>
                <img className='AboutUs_img1' src="https://static.wixstatic.com/media/5515cb_62c7bebe9a3948b4ac6ee885e79a6c99~mv2.png/v1/crop/x_120,y_147,w_1084,h_745/fill/w_668,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5515cb_62c7bebe9a3948b4ac6ee885e79a6c99~mv2.png" alt="foto" />
                <img className='AboutUs_img2' src="https://static.wixstatic.com/media/5515cb_7fe81e8c91f34c94ba55706b62a00f25~mv2.png/v1/fill/w_785,h_589,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Echt-Visual%201-About%20Us%20(1).png" alt="foto" />
            </div>
            <div className='AboutDev-contant'> 
                <p className='AboutUs__text2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi excepturi natus quia doloribus officiis iusto eligendi veritatis voluptas placeat dolorem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque unde quod esse, consectetur dolor corrupti facilis ratione, incidunt quisquam quibusdam praesentium, accusamus nobis expedita nostrum? Sit neque earum minus dignissimos!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore odio, adipisci nesciunt cupiditate natus repellendus iste ab excepturi quasi blanditiis fugiat impedit, neque autem vitae eius, facilis quos. Eligendi, vitae!
                </p>
            </div>
        </div>
   </section>
  )
}

export default AboutDev