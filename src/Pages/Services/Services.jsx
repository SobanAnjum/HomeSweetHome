import React from 'react'
import './Services.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Slider from '../../Components/Slider/Slider'



const Services = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{

        
        gsap.from(".servicesTitle",{
            x:-200,
            opacity:0,
            scrollTrigger:{
                trigger:'.Sbody',
                end:'top 5%',
                scrub:1,
                
                
            }
        })
        gsap.from('.servicesText1',{
            y:100,
            opacity:0,
            duration:1,
            scale:0.4,
            ease:'expo.out',
            scrollTrigger:{
                trigger:'.Sbody',
                start: 'top 50% ',
                scrub:true,
            }
        })
        gsap.from('.servicesText2',{
            y:-100,
            opacity:0,
            duration:1.5,
            ease:'expo.out',
            scale:0.4,
            scrollTrigger:{
                trigger:'.Sbody',
                start: 'top 50% ',
                scrub:true,
               // toggleActions: 'restart none none none'
            }
        })


    },[])
return (
    <div className="Sbody">
        <div className='servicesTitle'>S E R V I C E S</div>
        <h1 className='servicesText1'>WHAT SERVICES WE</h1>
        <h1 className='servicesText2'>PROVIDE</h1>
        <div className="scrollerTab">


            <Slider/>
        </div>

    </div>
)
}

export default Services