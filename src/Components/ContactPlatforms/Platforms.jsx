import React from 'react'
import './Platforms.css'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa6'

const handleWAClick=()=>{
    
window.open('https://api.whatsapp.com/send?phone=971506968006')

}
const handleEMClick=()=>{
    window.location.href = 'mailto:info@wefixuaehome.com';
}
const handlePhoneClick=()=>{
    window.location.href = 'tel:045149753';
}

const Platforms = () => {
return (
    <div>
    <div className="platformContainer">
        <div className="PBox Whatsapp">
            <FaWhatsapp className='icon WAicon'/>
            <h1>Whatsapp</h1>
            <div className="DividerLine"></div>
            <div onClick={handleWAClick} className="contactButton WAButton">
            <h3>Contact</h3>
            </div>

        </div>
        <div className="PBox Email">
            <FaEnvelope className='icon EMicon'/>
            <h1>Email</h1>
            <div className="DividerLine"></div>
            <div onClick={handleEMClick} className="contactButton EMButton">
            <h3>Contact</h3>
            </div>

        </div>
        <div className="PBox Phone">
            <FaPhone className='icon Picon'/>
            <h1>Phone</h1>
            <div className="DividerLine"></div>
            <div onClick={handlePhoneClick} className="contactButton PButton">
                <h3>Contact</h3>
            </div>
        </div>
    </div>
    </div>
)
}

export default Platforms
