import React from 'react'
import './AboutUsPage.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import { IoClipboardOutline, IoTimeOutline, IoConstructOutline, IoStarSharp } from 'react-icons/io5'
import IconComp from '../../Components/IconComp/IconComp'
import ProjectsReel from '../../Components/ProjectsReel/ProjectsReel'

const AboutUsPage = () => {
return (
    <div>
        <Nav/>
        <div className="AboutUsBody">
            <div className="Head">

            <h1 className='AUHead' >ABOUT US</h1>
            <div className='AboutDescription'>
                <h1>Welcome to WEFIXUAEHOME.COM</h1>
                <p>Your trusted partner for all home maintenance and repair needs across the UAE. We are a team of skilled professionals dedicated to delivering high-quality and reliable services, ensuring your home remains in top condition, no matter the issue.

At WeFixUAEHome, we understand the importance of a comfortable and safe living space. That's why we offer a wide range of services designed to address every aspect of home maintenance—from plumbing and electrical repairs to painting, AC servicing, and more. With a customer-first approach, we are committed to providing affordable solutions, fast response times, and expert craftsmanship.</p>
            </div>
            </div>
        </div>
        <div className="whyUs">
            <h1>WHY US</h1>
            <div className="UsContainer">
                <IconComp
                Icon={IoClipboardOutline} Head='Experience'
                Sub='We have employees with over 10 Years of Experience. You can sit back and relax while the professionals handle your problems' 
                />
                <IconComp
                Icon={IoTimeOutline} Head='24/7'
                Sub='Our Support Team is availabel 24/7 to assist you and provide you services. All you need to do is drop us a message or call us and we will get back to you ASAP.' 
                />
                <IconComp
                Icon={IoConstructOutline} Head='Services'
                Sub='Our Catalogue of Services is enless. Anything you need? We can get it done in no time thanks to our huge Workforce' 
                />
                <IconComp
                Icon={IoStarSharp} Head='5 Stars Service'
                Sub='We are comitted to provide you 5 Star Service. Our Previous clients and Portfolio can vouch for our professionalism' 
                />
            </div>
        </div>
        <div className="OurProjects">
            <h1 className='OPHead'>Some of our recent Projects</h1>
            <ProjectsReel/>
        </div>
        
        <Footer/>

    
    </div>
)
}

export default AboutUsPage
