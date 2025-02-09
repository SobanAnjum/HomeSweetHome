import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Testimony from './Pages/Testimony/Testimony'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
    <div className="con">
      <Home/>
      <Services/>
      <Testimony/>
      <Footer/>
    </div>
    </>
  )
}

export default App
