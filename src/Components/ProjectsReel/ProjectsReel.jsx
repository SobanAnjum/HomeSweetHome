import {React, useState} from 'react'
import './ProjectsReel.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const reel1=[
    {url:'/Gallery/Gallery (1).jpeg'},
    {url:'/Gallery/Gallery (2).jpeg'},
    {url:'/Gallery/Gallery (3).jpeg'},
    {url:'/Gallery/Gallery (4).jpeg'},
    {url:'/Gallery/Gallery (5).jpeg'},
    {url:'/Gallery/Gallery (6).jpeg'},
    {url:'/Gallery/Gallery (7).jpeg'},
    {url:'/Gallery/Gallery (8).jpeg'},
    {url:'/Gallery/Gallery (9).jpeg'},
    {url:'/Gallery/Gallery (10).jpeg'},
    {url:'/Gallery/Gallery (11).jpeg'},
    {url:'/Gallery/Gallery (12).jpeg'},
    {url:'/Gallery/Gallery (13).jpeg'},
    {url:'/Gallery/Gallery (14).jpeg'},
    {url:'/Gallery/Gallery (15).jpeg'},
    {url:'/Gallery/Gallery (16).jpeg'},
    {url:'/Gallery/Gallery (17).jpeg'},
    {url:'/Gallery/Gallery (18).jpeg'},
    {url:'/Gallery/Gallery (19).jpeg'},
    {url:'/Gallery/Gallery (20).jpeg'},

]
const reel2=[
    {url:'/Gallery/Gallery (21).jpeg'},
    {url:'/Gallery/Gallery (22).jpeg'},
    {url:'/Gallery/Gallery (23).jpeg'},
    {url:'/Gallery/Gallery (24).jpeg'},
    {url:'/Gallery/Gallery (25).jpeg'},
    {url:'/Gallery/Gallery (26).jpeg'},
    {url:'/Gallery/Gallery (27).jpeg'},
    {url:'/Gallery/Gallery (28).jpeg'},
    {url:'/Gallery/Gallery (29).jpeg'},
    {url:'/Gallery/Gallery (30).jpeg'},
    {url:'/Gallery/Gallery (31).jpeg'},
    {url:'/Gallery/Gallery (32).jpeg'},
    {url:'/Gallery/Gallery (33).jpeg'},
    {url:'/Gallery/Gallery (34).jpeg'},
    {url:'/Gallery/Gallery (35).jpeg'},
    {url:'/Gallery/Gallery (36).jpeg'},
    {url:'/Gallery/Gallery (37).jpeg'},
    {url:'/Gallery/Gallery (38).jpeg'},
    {url:'/Gallery/Gallery (39).jpeg'},

]
const ProjectsReel = () => {
useGSAP(()=>{
    gsap.to('.Reel1',{
        x:'0',
        duration:100,
        repeat:1
    })

    gsap.to('.Reel2',{
        x:'-4000',
        duration:100,
        repeat:1
    })

},[])
return (
    <div className="ReelContainer">
        <div className="Reel1">
            {reel1.map((image,index)=>(
                <img className='reelimg' key={index} src={image.url} alt="image" />
            ))}
        </div>
        <div className="Reel2">
            {reel2.map((image,index)=>(
                <img className='reelimg' key={20+index} src={image.url} alt="image" />
            ))}
        </div>

    </div>
    );
};



export default ProjectsReel
