import React from 'react'
import './ContactUsPage.css'
import Nav from '../../Components/Nav/Nav'
import Platforms from '../../Components/ContactPlatforms/Platforms'
import Footer from '../../Components/Footer/Footer'
const ContactUsPage = () => {
return (
    <div>
            <Nav/>
            <div className="ContactHero">
                <h1 className='ContactHead'>GET  IN TOUCH WITH US</h1>
                <h6 className='ContactSub'>Send us a message, We'll get in contact as soon as possible</h6>
                <Platforms/>
            </div>
                <div className="map">
                    <h1>OR FIND US HERE</h1>
                    <h2>TRADE CORE BUSINESS CENTER, Office 1092, Al Mankhool Dubai</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.406931318352!2d55.2971836!3d25.256892999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f436dc74c003d%3A0x294d828c9d81d4c4!2sTRADE%20CORE%20BUSINESS%20CENTER!5e0!3m2!1sen!2sqa!4v1741205024888!5m2!1sen!2sqa" ></iframe>
                </div>
                <Footer/>
    </div>
)
}

export default ContactUsPage



//https://api.whatsapp.com/send?phone=971506968006