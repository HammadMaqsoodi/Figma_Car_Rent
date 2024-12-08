"use client"
import React from 'react'
import Deatle from '../component/deatle'
import Navbar from '../component/navbar'
import Footer from '../component/footer'


function page() {
  return (
    <div>
        <Navbar/>
        {/* <Slider/> */}
        <Deatle/>
        <Footer/>
    </div>
  )
}

export default page