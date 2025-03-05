import React from 'react'
import './Platforms.css'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa6'

const Platforms = () => {
return (
    <div>
    <div className="platformContainer">
        <div className="PBox Whatsapp">
            <FaWhatsapp className='icon WAicon'/>
            <h1>Whatsapp</h1>
            <div className="DividerLine"></div>
            <div className="contactButton WAButton">
            <h3>Contact</h3>
            </div>

        </div>
        <div className="PBox Email">
            <FaEnvelope className='icon EMicon'/>
            <h1>Email</h1>
            <div className="DividerLine"></div>
            <div className="contactButton EMButton">
            <h3>Contact</h3>
            </div>

        </div>
        <div className="PBox Phone">
            <FaPhone className='icon Picon'/>
            <h1>Phone</h1>
            <div className="DividerLine"></div>
            <div className="contactButton PButton">
                <h3>Contact</h3>
            </div>
        </div>
    </div>
    </div>
)
}

export default Platforms
