import React from 'react'
import { Link } from 'react-router'
import '../Services/OurServices2.css'

const OurServices2 = () => {
return (
    <div className='cardsContainer'>
        

        <div className="ServiceCard Card1">
        <div className="blackOverlay"></div>   
            <div className="CardMainText">
                <h1>ELECTRICIAN</h1>
                <p>Your electrical connections are not something you can take a chance at. They need to be done by an expert technician and electrician in Dubai. Any problem with your electrical connections can result in very disastrous results. Most fire incidents take place due to faulty power connections and short circuits resulting from them. It is essential that you hire the best electricians whether you want to do new wiring or get your existing wiring repaired.</p>
            </div>
        </div>
        <div className="ServiceCard Card2">
        <div className="blackOverlay"></div>   
            <div className="CardMainText">
                <h1>PLUMBER</h1>
                <p>Need a solution to your plumbing issues in Dubai? Whether you’re looking for regular maintenance or you need plumbing services in Dubai for major repairs, we’ll be there. Home Sweet Home Technical Services Dubai provides plumbing services all over the region of Dubai. We can make it easy for you as we work around your schedule, seven days a week. Our Dubai Plumber will arrive promptly, listen to your needs, and offer quality plumbing solutions. Our certified and experienced plumber can fix and solve almost every plumbing-related issue.</p>
            </div>
        </div>
        <div className="ServiceCard Card3">
        <div className="blackOverlay"></div>   
            <div className="CardMainText">
                <h1>AC REPAIR</h1>
                <p>Are you looking for the installation service of a new AC that makes the whole process easy, comfortable, and reliable? Look no more because Home Sweet Home will be your best AC Installation technician and engineering service provider in Dubai.

Home Sweet Home team cleans the complete air duct system to the American standard ACR 2013. This standard produced by NADCA is used worldwide to ensure systems are professionally cleaned.</p>
            </div>
        </div>
        <div className="ServiceCard Card4">
        <div className="blackOverlay"></div>   
            <div className="CardMainText">
                <h1>RENNOVATION</h1>
                <p>Renovating the interior of your home and creating a space for you, your family, and friends to enjoy and relax in will not only make the time you spend together more enjoyable but bringing an outdated interior to life with a quality home improvement in Dubai also adds real value to your home.

Home improvement could be exactly what your family needs to ensure your house can meet your needs both now and into the future. Whether it’s a single-room renovation – such as a kitchen, bathroom, or bedroom – or a more major home improvement, addition, or extension when you work with the experts like Home Sweet Home you’re guaranteed to love the result.</p>
            </div>
        </div>
        <div className="ServiceCard Card5">
        <div className="blackOverlay"></div>   
            <div className="CardMainText">
                <h1>PAINTING</h1>
                <p>Nothing is worse than painting the exterior of your home and within a couple of years notice that your exterior paint coat is already fading, blistering, or cracking. In most instances, these unfortunate results are the outcome of exterior painting projects conducted without expert help. Skipping critical preparatory steps and choosing poor-quality paints and materials can lead to short-lived positive outcomes.

At Home Sweet Home Technical Services, our exterior house painting experts are here to help you avoid all of these common pitfalls. When we paint the exterior of your Annapolis home, our intention is to provide you with long-lasting beauty. You and your family are guaranteed to be pleased with the results of our efforts for years to come.</p>
            </div>
        </div>
        <div className="ServiceCard Card6">
        <div className="blackOverlay"></div>   
            <div className="CardMainText">
                <h1>MAINTAINANCE</h1>
                <p>A home is a personal place and spot for relaxation. After a hectic day, every person wants to go home and relax.

A well-organized kitchen, updated and luxurious drawing rooms and lounges, neat and well-managed washrooms, lavish personal rooms, and managed laundry make life easy. To equip your house with all these facilities, there is a need to hire professional services. If you are in Dubai then Home Sweet Home Services is at your doorstep to solve all your problems.

We at Home Sweet Home have a team of professionals for every task, such as plumbing, carpentry, electrician, wall painting, flooring, wood curtain setting, and many more. Our way of working is very simple, straightforward, and cost-friendly. Our goal is to make your living space comfortable and Peaceful.</p>
            </div>
        </div>
        <div className="ServiceCard Card7">
        <div className="blackOverlay"></div>   
            <div className="CardMainText">
                <h1>AND MORE</h1>
                <p>Looking for repairs or installation services that are out of the ordinary and don’t know where to look? Among other things we can help with the following:
                        <br />
                        <h6><br />Flooring & Tiling Services,Marble polish,</h6>
                        <br />
                        <h6>Home Carpentry Services,Repair,Restoration</h6>
                        <br />
                        <h6>Curtain& Blind Removal, Installation</h6>
                            <Link to={'/Services/more'}>
                        <div className="moreServicesBtn">
                            <h6>See Here</h6>
                        </div>
                            </Link>



</p>
            </div>
        </div>
    
    </div>
)
}

export default OurServices2
