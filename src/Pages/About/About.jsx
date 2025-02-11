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
        gsap.to('.aboutImages',{
            xPercent:-100,
            scrollTrigger:{
                trigger:'.AboutBody',
                scrub:1,
                start:"top 0%",
                markers:true,
            }
        })


    },[])
  return (
    <div className='AboutBody'>
            <div className="aboutImages">
                <div className="aImages">
                    <div className="aImg">
                    <img src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/logo.png_ajzrgx.png" alt="" />

                    </div>
                    <div className="aImg">
                    <img src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739264592/pngwing.com_2_adipou.png" alt="" />

                    </div>
                    <div className="aImg">
                    <img src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739264591/pngwing.com_3_mvtdaa.png" alt="" />

                    </div>
                    <div className="aImg">
                    <img src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739264591/pngwing.com_4_wqwf2q.png" alt="" />

                    </div>
                    <div className="aImg">
                    <img src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739264591/pngwing.com_5_y14qw1.png" alt="" />

                    </div>
                    </div>   

            </div>
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
                    {/* <img className='hshLogo' src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/logo.png_ajzrgx.png" width='100px' alt="" /> */}
            <h1> <span className='we'>AT</span> <br /><span className='provide'>HOME SWEET HOME</span> <br />WE HAVE</h1>

                </div>

            </div>
        </div>
    </div>
  )
}

export default About