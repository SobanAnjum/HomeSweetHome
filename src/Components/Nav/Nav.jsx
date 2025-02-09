import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './Nav.css'
import Dropdown from '../Dropdown/Dropdown';





const Nav = () => {

  useGSAP(() => {
    gsap.from('.nav', {
      y: -100, // Move from above the viewport
      duration: 0.6,
      ease: 'power2.out',
      opacity: 0,
      delay: 2, // Optional delay
    });
  }, []);

return (
    <>
    <div className="nav">
    <Dropdown/>
    <img src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/logo.png_ajzrgx.png" alt="logo" />
    <ul>
        <li>Home</li>
        <li>Our Services</li>
        <li>Contact</li>
        <li>About</li>
    </ul>
    <div className="button">Get Quote</div>
    </div>
    
    </>
    )
}

export default Nav