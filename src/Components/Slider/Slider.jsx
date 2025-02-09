import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import './Slider.css'

gsap.registerPlugin(ScrollTrigger)

const Slider = () => {

    // GSAP ScrollTrigger for Scroll Animation
    useGSAP(() => {
        gsap.from('.SliderContainer', {
            x: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: '.SliderContainer',
                scrub: 2,
                end: 'bottom 90%',
            }
        })
    })

    // Images for Slider
    const images = [
        { src: "https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/AC_gbuwrg.jpg", name: "AC Repair" },
        { src: "https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/Cleaner_ajtu7g.jpg", name: "Cleaner" },
        { src: "https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/Electric_qzegoc.jpg", name: "Electrician" },
        { src: "https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116830/Painter_y2atlw.jpg", name: "Painter" },
        { src: "https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116830/Plumber_wd6dmz.jpg", name: "Plumber" },
        { src: "https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/Renovation_pgp4jo.jpg", name: "Renovations" },
    ]

    const [activeImage, setActiveImage] = useState(0)

    // Function to move to next image
    const goToNextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length)
    }

    // Function to move to previous image
    const goToPrevImage = () => {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length)
    }

    // Optional: Auto-slide feature every 5 seconds
    useEffect(() => {
        const interval = setInterval(goToNextImage, 5000) // Auto-slide every 5 seconds
        return () => clearInterval(interval) // Cleanup the interval on component unmount
    }, [])

    return (
        <div className='SliderContainer'>
            {/* Left Arrow */}
            <div className="arrow arrowLeft" onClick={goToPrevImage}> Prev </div>

            {/* Image Container */}
            <div className="imagesContainer">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`image-${index} ${activeImage === index ? "activeImage" : ""}`}
                    >
                        <img src={image.src} alt={`img-${index}`} />
                        <h1 className='title'>{image.name}</h1>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <div className="arrow arrowRight" onClick={goToNextImage}> Next </div>
        </div>
    )
}

export default Slider
