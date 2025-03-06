import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './Nav.css'
import { Link } from 'react-router';
import Dropdown from '../Dropdown/Dropdown';
import { useLocation } from 'react-router';




const Nav = () => {
  var location = useLocation()
if(location.pathname==='/'){


  useGSAP(() => {
    gsap.from('.nav', {
      y: -100, // Move from above the viewport
      duration: 0.6,
      ease: 'power2.out',
      opacity: 0,
      delay: 2, // Optional delay
    });
  }, []);

}

return (
    <>
    <div className="nav">
    <Dropdown/>
    <img src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/logo.png_ajzrgx.png" alt="logo" />
    <ul className='navList'>
        <li> <Link className='navLink' to="/">Home</Link></li>
        <li> <Link className='navLink' to="/Services">Our Services</Link></li>
        <li> <Link className='navLink' to="/Contact">Contact</Link></li>
        <li> <Link className='navLink' to="/About">About</Link></li>
    </ul>
    <div  className="button">Get Quote</div>
    </div>
    
    </>
    )
}

export default Nav