import React from 'react'
import './Footer.css'

const Footer = () => {
return (
    <div>
    
<div className="footerBody">
        <div className="footerSections">
    <div className="logo">
        <img src="/src/assets/images/logo.png.png" alt="" />
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

</div>
        </div>
        

    </div>

    </div>
)
}

export default Footer
