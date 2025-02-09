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
        { src: "/images/AC.jpg", name: "AC Repair" },
        { src: "/images/Cleaner.jpg", name: "Cleaner" },
        { src: "/images/Electric.jpg", name: "Electrician" },
        { src: "/images/Painter.jpg", name: "Painter" },
        { src: "/images/Plumber.jpg", name: "Plumber" },
        { src: "/images/Renovation.jpg", name: "Renovations" },
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
