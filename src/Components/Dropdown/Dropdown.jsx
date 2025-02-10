import {React,useState , useEffect}from 'react'
import './Dropdown.css'
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
        <li className='dropDownEntry'>Home</li>
        <li className='dropDownEntry'>Our Services</li>
        <li className='dropDownEntry'>Contact</li>
        <li className='dropDownEntry'>About</li>
    </ul>
        </div>
    </div>
)
}

export default Dropdown