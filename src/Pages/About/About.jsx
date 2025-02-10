import React from 'react'
import './About.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const About = () => {

    useGSAP(()=>{
        var tl =gsap.timeline({
            scrollTrigger:{
                trigger:'.AboutBody',
                scrub:1,
                start:"top 0%",

            }
        })
        tl.from('.topHeading',{
            xPercent:-100,

        })


    },[])
  return (
    <div className='AboutBody'>
        <div className="topHeading">
            <div className="texts">
                <div className="itemGroup">
                    
            <h1> <span className='we'>24/7</span> <br /><span className='provide'>SERVICES</span></h1>
                </div>
                <div className="itemGroup">
            <h1> <span className='we'>Verified </span> <br /><span className='provide'>Professionals</span></h1>

                </div>
                <div className="itemGroup">
            <h1> <span className='we'>COMPLETED OVER</span> <br /><span className='provide'>200+ Projects</span></h1>

                </div>
                <div className="itemGroup">
            <h1> <span className='we'>BEST HANDYMAN</span> <br /><span className='provide'>SERVICES</span></h1>

                </div>
                <div className="itemGroup">
            <h1> <span className='we'>AT</span> <br /><span className='provide'>HOME SWEET HOME</span> <br />WE HAVE</h1>

                </div>

            </div>
        </div>
    </div>
  )
}

export default About