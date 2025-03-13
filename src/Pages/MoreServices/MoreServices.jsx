import React from 'react'
import './MoreServices.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'

const MoreServices = () => {
return (
    <>
    <Nav/>
    <div className="moreServicesBody">
        <h1 className='MSHeading'>Every Service on your doorstep</h1>
        <h5 className='MSsub'>Here's what we have to offer </h5>
        <div className="MoreServiceSection SS1">
            <div className="SectionContainer">
                <div className="SCLeft">
                    <h1  className='SCHeading'> Floor & Wall Tiling Works</h1>
                    <div className="SCoverlay"></div>
                </div>
                <div className="SCRight">
                    <p className='SCText'>
                    Transform your space with our expert floor and wall tiling services. Whether you're looking for a sleek modern look or a timeless classic design, our skilled team delivers flawless installations with precision and care. We use only the highest-quality materials to ensure your tiling lasts and enhances your home or business for years to come. Let us bring your vision to life with beautiful, durable tiles that will elevate any room.
                    </p>
                </div>
            </div>
        </div>
        <div className="MoreServiceSection SS2">
            <div className="SectionContainer">
                <div className="SCLeft">
                    <div className="SCText">Ensure your home or business runs smoothly with our expert plumbing and sanitary installation services. From reliable pipework to efficient fixtures, we provide top-quality solutions that last. Trust our experienced team to keep your water systems in perfect condition.</div>
                </div>
                <div className="SCRight">
                <h1  className='SCHeading'>Plumbing & Sanitary Installation</h1>
                <div className="SCoverlay"></div>
                </div>
            </div>
        </div>
        <div className="MoreServiceSection SS3">
            <div className="SectionContainer">
                <div className="SCLeft">
                <h1  className='SCHeading'>False Ceiling & Light Partition Installation</h1>
                <div className="SCoverlay"></div>
                </div>
                <div className="SCRight">
                <div className="SCText">Transform your interiors with our professional false ceiling and light partition installation services. We offer sleek, functional designs that enhance your space's aesthetics while providing optimal lighting and privacy. Trust us to create stylish, high-quality solutions for any room.</div>
                </div>
            </div>
        </div>
        <div className="MoreServiceSection SS4">
            <div className="SectionContainer">
                <div className="SCLeft">
                <div className="SCText">Add warmth and elegance to your space with our expert carpentry and wood flooring services. From custom furniture to beautiful wooden floors, we craft high-quality, durable pieces that elevate your home's style and comfort. Trust us to bring your vision to life with precision and craftsmanship.</div>
                </div>
                <div className="SCRight">
                <h1  className='SCHeading'>Carpentry & Wood Flooring Works</h1>
                <div className="SCoverlay"></div>
                </div>
            </div>
        </div>
        <div className="MoreServiceSection SS5">
            <div className="SectionContainer">
                <div className="SCLeft">
                <h1  className='SCHeading'>Electrical Fitting & Fixture Repairing & Maintainance</h1>
                <div className="SCoverlay"></div>
                </div>
                <div className="SCRight">
                <div className="SCText">Keep your space safe and functional with our professional electrical fitting, fixture repairing, and maintenance services. Our skilled team ensures reliable and efficient solutions, from fixing faulty wiring to maintaining your electrical systems, so you can enjoy peace of mind all year round.</div>
                </div>
            </div>
        </div>
        <div className="MoreServiceSection SS6">
            <div className="SectionContainer">
                <div className="SCLeft">
                <div className="SCText">Ensure optimal performance with our electromechanical equipment installation and maintenance services. Our experienced team handles everything from precise installations to ongoing maintenance, keeping your equipment running smoothly and efficiently for long-term reliability.</div>
                </div>
                <div className="SCRight">
                <h1  className='SCHeading'>Electromechanical Equipment Installation & Maintainance</h1>
                <div className="SCoverlay"></div>
                </div>
            </div>
        </div>
        <div className="MoreServiceSection SS7">
            <div className="SectionContainer">
                <div className="SCLeft">
                <h1  className='SCHeading'>Air Conditioning, Ventilations & Air Filtration Systems</h1>
                <div className="SCoverlay"></div>
                </div>
                <div className="SCRight">
                <div className="SCText">Stay comfortable and breathe easy with our air conditioning, ventilation, and air filtration system services. We provide expert installation and maintenance to ensure your space remains cool, fresh, and well-ventilated year-round, with improved air quality for a healthier environment.</div>
                </div>
            </div>
        </div>
        <div className="MoreServiceSection SS8">
            <div className="SectionContainer">
                <div className="SCLeft">
                <div className="SCText">Keep your space spotless with our professional building cleaning services. We offer comprehensive cleaning solutions tailored to your needs, ensuring a pristine, healthy environment for homes, offices, or commercial properties. Let our expert team handle the cleaning, so you can focus on what matters most.</div>
                </div>
                <div className="SCRight">
                <h1  className='SCHeading'>Building Cleaning Services</h1>
                <div className="SCoverlay"></div>
                </div>
            </div>
        </div>
        <div className="MoreServiceSection SS9">
            <div className="SectionContainer">
                <div className="SCLeft">
                <h1  className='SCHeading'>Painting Contracting</h1>
                <div className="SCoverlay"></div>
                </div>
                <div className="SCRight">
                <div className="SCText">Refresh your space with our expert painting contracting services. Whether it's a residential or commercial project, we deliver high-quality, durable finishes that enhance the look of any room. Our professional team ensures precise application, vibrant colors, and long-lasting results for a flawless finish every time.</div>
                </div>
            </div>
        </div>
        
    </div>
    <Footer/>
    </>
)
}

export default MoreServices
