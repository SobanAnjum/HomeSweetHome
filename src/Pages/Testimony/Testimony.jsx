import React from 'react'
import './Testimony.css'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
const Testimony = () => {
    useGSAP(()=>{
        var tl= gsap.timeline()

        gsap.from(".servicesVideo",{
          x:-100,
          opacity:0,
          scrollTrigger:{
            trigger:'.manyServices',
            start:'center 100%',
            end:' top 200%',
            scrub: 1,

            
          }

        })
        gsap.from(".servicesVidText",{
          x:200,
          opacity:0,
          scrollTrigger:{
            trigger:'.manyServices',
            start:'center 100%',
            end:' bottom 200%',
            scrub: 1,

            
          }

        })

        gsap.from(".experienceText",{
          x:300,
          opacity:0,
          scrollTrigger:{
            trigger:'.experience',
            start:'center 100%',
            end:' top 200%',
            scrub: 1,
          }

        })
        gsap.from(".experienceVidText",{
          x:-200,
          opacity:0,
          scrollTrigger:{
            trigger:'.experience',
            start:'center 100%',
            end:' bottom 200%',
            scrub: 1,
          }

        })

        gsap.from(".customersVid",{
          x:300,
          opacity:0,
          scrollTrigger:{
            trigger:'.customers',
            start:'top 100%',
            end:' top 100%',
            scrub: 1,
          }

        })
        gsap.from(".customersVidText",{
          x:-200,
          opacity:0,
          scrollTrigger:{
            trigger:'.customers',
            start:'top 100%',
            end:' center 100%',
            scrub: 1,

            
          }

        })
        
    })

  return (
    <div className='TestimonyBody'>
        <h1 className='TestimonyText'>WHY <span>CHOOSE </span> US</h1>
        <div className='manyServices tab'>
          <div className="video servicesVideo">
            <video className='tabVid' src='/videos/Services.mp4' autoPlay muted loop ></video>
          </div>
          <div className="vidText servicesVidText">
          <div className="vidHead">
            <h1>Large Number of Services Provided</h1>
          </div>
          <div className="vidSubtext">
            <p>Home Sweet Home Technical Services is one of the leading service providers in the UAE. Our services are the first choice for residential, retail, commercial, hospitality, and mixed-use developments.We are a team of professional and skilled experts in all domestic spheres. We offer a range of services for any household needs Including Cleaning, Plumbing, Rennovation, </p>
          </div>

          </div>
        </div>
        <div className='experience tab'>
        <div className="vidText experienceVidText">
          <div className="vidHead">
            <h1>10+ Years of
            Professional Experience</h1>
          </div>
          <div className="vidSubtext">
            <p>Home Sweet Home Technical Services has been providing technical services nation wide for a long span of 10 years and have always acquired maximum customer satisfaction. The trust we've built is the centeral pillar of our organization and also is a testimoney for new customers to entrust us with their problems. </p>
          </div>

          </div>
        <div className="video experienceText">
            <video className='tabVid' src='/videos/Experience.mp4' autoPlay muted loop ></video>
          </div>
          
        </div>
        <div className='customers tab '>
        <div className="video">
            <video className='tabVid customersVid' src='/videos/Satisfied.mp4' autoPlay muted loop ></video>
          </div>
          <div className="vidText customersVidText">
          <div className="vidHead">
            <h1>A Large Number</h1>
          </div>
          <div className="vidSubtext">
            <p>During our span of work in UAE for 10+ years we've done countless projects in the country and every customer for organization is a satisfied customer. The numbers and reviews speak for themselves. </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Testimony