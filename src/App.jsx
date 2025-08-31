import { useState } from 'react'
import Navbar from './assets/layout/Navbar.jsx'
import Herosection from './assets/layout/Herosection.jsx'
import AboutUs from './assets/layout/About.jsx'
import ServiceList from './assets/layout/SeviceList.jsx'
import CorporatePage from './assets/layout/Corporate.jsx'
import Kontak from './assets/layout/Kontak.jsx'
import Rate from './assets/layout/Rate.jsx'
import Footer from './assets/layout/Foter.jsx'


function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <AboutUs />
        <ServiceList />
      {/* <div className="container mx-auto px-4"> */}
        {/* <h2 className="flex justify-center text-2xl font-bold my-6">Rating</h2> */}
        {/* <Service /> */}
        <CorporatePage/>
        <Rate/>
        <Kontak/>
        <Footer/>
      {/* </div> */}
    </>
  )
}




export default App
