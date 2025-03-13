import React from 'react'
import './Platforms.css'
import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa6'

const handleWAClick=()=>{
    
window.open('https://api.whatsapp.com/send?phone=971522391402')

}
const handleEMClick=()=>{
    window.location.href = 'mailto:info@wefixuaehome.com';
}
const handleFBClick=()=>{
    window.open('https://www.facebook.com/faridaabbasllc', '_blank');
    
}
const handleIGClick=()=>{

    window.open('https://www.instagram.com/homesweethometech/', '_blank');
    
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
        <div className="PBox Instagram">
            <FaInstagram className='icon IGicon'/>
            <h1>Instagram</h1>
            <div className="DividerLine"></div>
            <div onClick={handleIGClick} className="contactButton IGButton">
            <h3>Contact</h3>
            </div>
        </div>
        <div className="PBox Facebook">
            <FaFacebook className='icon FBicon'/>
            <h1>Whatsapp</h1>
            <div className="DividerLine"></div>
            <div onClick={handleFBClick} className="contactButton FBButton">
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

