import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Nav from '../../Components/Nav/Nav';
import './Home.css';
import Services from '../Services/Services';

const Home = () => {
  useGSAP(() => {
    const tline = gsap.timeline();

    // Step 1: Start with a half-screen circle at the top
    tline.fromTo(
      ".background",
      { clipPath: "circle(5% at 50% -50%)" }, // Half screen, positioned above
      { clipPath: "circle(50% at 50% 50%)", duration: 1, ease: "power2.out" } // Moves to center
    );

    // Step 2: Expand to cover the entire screen
    tline.to(".background", {
      clipPath: "circle(150% at 50% 50%)",
      duration: 1.5,
      ease: "power2.out",
    });

    // Step 3: Scale the background image
    tline.to(".img", { scale: 1.5, duration: 1, ease: "power2.out" });
    tline.from(".mainText",{
      y:-300,
      opacity:0,
      duration:0.2,
      ease: "power2.out",
    })
    tline.from(".subText",{
      x:-300,
      opacity:0,
      duration:0.2,
      ease: "power2.out",
    })
    tline.from(".heroLogo",{
      x:-300,
      opacity:0,
      duration:0.2,
      ease: "power2.out",
    })

  }, []);

  return (
    <>
    <div className="homebody">

      <Nav />
      <div className="cover"></div>
      <div className="background">
        <img className="img" src="/images/background.jpg" alt="Background" />
      </div>
      <h1 className="mainText"> <span>A</span><span>L</span><span>W</span><span>A</span><span>Y</span><span>S</span></h1>
      <h1 className="subText">Ready to Serve</h1>
      <img src="/images/logo.png.png" alt="" className="heroLogo" />
    </div>
    </>
  );
};

export default Home;
