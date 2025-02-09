import React from 'react'
import { FaLocationPin ,FaPhone, FaEnvelope } from 'react-icons/fa6'
import './Footer.css'

const Footer = () => {
return (
    <div>
    
<div className="footerBody">
        <div className="footerSections">
    <div className="logo">
        <img src="https://res.cloudinary.com/dtxg4xh9o/image/upload/v1739116829/logo.png_ajzrgx.png" alt="" />
    </div>
    <div className="linkSection tabSec">
<h2>Useful Links</h2>
<ul className='footerLinks'>
    <li>Home</li>
    <li>Services</li>
    <li>Projects</li>
    <li>Contact Us</li>
</ul>
</div>
<div className="ServicesSection tabSec">
<h2>Services</h2>
<ul className='footerLinks'>
    <li>Plumber</li>
    <li>Electrician</li>
    <li>Rennovation</li>
    <li>Painting</li>
</ul>
</div>
<div className="LocationSection tabSec">
    <h2>Meet Us</h2>
    <ul className='contacts'>
    <li  >< FaLocationPin className='locationPin'/> <p>B604 Prime Business Center<br/>
AL barsha South 4<br/>
Dubai, UAE</p> </li>
<li  >< FaEnvelope className='locationPin'/> <p>Info@wefixuaehome.com</p> </li>
<li  >< FaPhone className='locationPin'/> <p>04 (514) 9753</p> </li>
</ul>

</div>
        </div>
        

    </div>

    </div>
)
}

export default Footer
