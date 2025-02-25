import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import AboutUsPage from './NavPages/AboutUsPage/AboutUsPage.jsx'
import ContactUsPage from './NavPages/ContactUsPage/ContactUsPage.jsx'
import OurServices from './NavPages/OurServices/OurServices.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/About' element={<AboutUsPage/>}/>
      <Route path='/Contact' element={<ContactUsPage/>}/>
      <Route path='/Services' element={<OurServices/>}/>
      

    </Routes>
    </BrowserRouter>
)
