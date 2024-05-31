import React from 'react'
import '../../Style/Home/Strong.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Strong() {
    useGSAP(()=>{
        gsap.fromTo('.strong__title',
        {
            y:'-200%',
            opacity:0,
        },
        {
            opacity:1,
            y:'0%',
            scrollTrigger:{
                trigger:'.strong__title',
                start:'top 90%',
                scrub:1
            }
        }
    )
        gsap.fromTo('.st__card1',
        {
            opacity:0,
        },
        {
            opacity:1,
            duration:2,
            scrollTrigger:{
                trigger:'.st__card1',
                start:'top 70%',
                scrub:1
            }
        }
    )
        gsap.fromTo('.st__card2',
        {
            opacity:0,
        },
        {
            opacity:1,
            duration:4,
            scrollTrigger:{
                trigger:'.st__card2',
                start:'top 80%',
                scrub:1
            } 
        }
    )
        gsap.fromTo('.st__card3',
        {
            opacity:0,
        },
        {
            opacity:1,
            duration:6,
            scrollTrigger:{
                trigger:'.st__card3',
                start:'top 90%',
                scrub:1
            }
        }
    )
    })
  return (
   <section className='Strong'>
        <div className='container'>
            <h1 className='strong__title'>
                Why Devosoft ?
            </h1>
            <div className='strong-wrapper'>
                <div className='Strong-card st__card1'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M507.068 188.5c-18.305-50.06-78.104-66.608-119.336-39.208l-55.238-45.86C347.424 54.955 312.545 1.63 258.318.057c-55.846-1.62-94.39 52.747-78.826 103.31l-55.277 45.891c-42.492-28.237-103.813-9.494-120.367 42.404C-11.444 239.605 20.796 286.595 66 294.728l21.387 76.738c-38.19 32.88-37.263 96.126 7.468 126.514c44.314 30.104 102.873 8.432 120.096-38.207h81.964c17.847 48.875 80.026 69.33 123.81 35.53c42.17-32.553 40.07-94.432 1.737-125.498l22.079-74.826c47.395-7.553 80.411-57.571 62.527-106.48M293.596 415.783h-75.27c-8.408-41.328-48.919-69.346-90.473-62.973l-17.49-62.761c42.473-17.089 61.169-67.067 42.522-107.414l50.678-42.072c29.563 25.716 74.975 26.034 104.818.034l50.722 42.111c-18.598 40.235.075 89.356 41.183 106.797l-18.577 62.955c-41.13-5.136-79.856 23.192-88.113 63.323"/></svg>
                <h3>
                    Sifatli hizmat
                </h3>
                <div className='top-right'></div>
                <div className='bottom-left'></div>
                    </div>
                </div>
                <div className='Strong-card st__card2'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M507.068 188.5c-18.305-50.06-78.104-66.608-119.336-39.208l-55.238-45.86C347.424 54.955 312.545 1.63 258.318.057c-55.846-1.62-94.39 52.747-78.826 103.31l-55.277 45.891c-42.492-28.237-103.813-9.494-120.367 42.404C-11.444 239.605 20.796 286.595 66 294.728l21.387 76.738c-38.19 32.88-37.263 96.126 7.468 126.514c44.314 30.104 102.873 8.432 120.096-38.207h81.964c17.847 48.875 80.026 69.33 123.81 35.53c42.17-32.553 40.07-94.432 1.737-125.498l22.079-74.826c47.395-7.553 80.411-57.571 62.527-106.48M293.596 415.783h-75.27c-8.408-41.328-48.919-69.346-90.473-62.973l-17.49-62.761c42.473-17.089 61.169-67.067 42.522-107.414l50.678-42.072c29.563 25.716 74.975 26.034 104.818.034l50.722 42.111c-18.598 40.235.075 89.356 41.183 106.797l-18.577 62.955c-41.13-5.136-79.856 23.192-88.113 63.323"/></svg>
                <h3>
                    Sifatli hizmat
                </h3>
                <div className='top-right'></div>
                <div className='bottom-left'></div>
                    </div>
                </div>
                <div className='Strong-card st__card3'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M507.068 188.5c-18.305-50.06-78.104-66.608-119.336-39.208l-55.238-45.86C347.424 54.955 312.545 1.63 258.318.057c-55.846-1.62-94.39 52.747-78.826 103.31l-55.277 45.891c-42.492-28.237-103.813-9.494-120.367 42.404C-11.444 239.605 20.796 286.595 66 294.728l21.387 76.738c-38.19 32.88-37.263 96.126 7.468 126.514c44.314 30.104 102.873 8.432 120.096-38.207h81.964c17.847 48.875 80.026 69.33 123.81 35.53c42.17-32.553 40.07-94.432 1.737-125.498l22.079-74.826c47.395-7.553 80.411-57.571 62.527-106.48M293.596 415.783h-75.27c-8.408-41.328-48.919-69.346-90.473-62.973l-17.49-62.761c42.473-17.089 61.169-67.067 42.522-107.414l50.678-42.072c29.563 25.716 74.975 26.034 104.818.034l50.722 42.111c-18.598 40.235.075 89.356 41.183 106.797l-18.577 62.955c-41.13-5.136-79.856 23.192-88.113 63.323"/></svg>
                <h3>
                    Sifatli hizmat
                </h3>
                <div className='top-right'></div>
                <div className='bottom-left'></div>
                    </div>
                </div>
              
            </div>
        </div>
   </section>
  )
}

export default Strong