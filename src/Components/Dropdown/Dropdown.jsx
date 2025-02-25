import {React,useState , useEffect}from 'react'
import './Dropdown.css'
import { Link } from 'react-router'
const Dropdown = () => {
    
    const [Menu, setMenu] = useState(false)

var handleMenuClick=()=>{
    setMenu((prev)=>!prev)
    console.log(Menu)
}
var  handleScroll=()=>{
    setMenu(false)
    console.log(Menu)
}

    useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    
    return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
    },[])
return (
    <div onClick={handleMenuClick} className='container'>
        <div className="box1 box"></div>
        <div className="box2 box"></div>
        <div className="box3 box"></div>
        <div className={`sideMenu ${Menu==true?"visible":""}`} >
        <ul className='dropDownList'>
        <li className='dropDownEntry'> <Link className='navLinkD' to='/'>Home</Link></li>
        <li className='dropDownEntry'><Link className='navLinkD' to='/Services'>Our Services</Link></li>
        <li className='dropDownEntry'><Link className='navLinkD' to='/Contact'>Contact Us</Link></li>
        <li className='dropDownEntry'><Link className='navLinkD' to='/About'>About Us</Link></li>
    </ul>
        </div>
    </div>
)
}

export default Dropdown