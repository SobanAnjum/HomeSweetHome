import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Testimony from './Pages/Testimony/Testimony'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'


function App() {

  return (
    <>
    <div className="con">
      <Home/>
      <About/>
      <Testimony/>
      <Footer/>
    </div>
    </>
  )
}

export default App
