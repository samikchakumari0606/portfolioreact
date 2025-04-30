import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg2 from '../Components/HeroImg2'
import AboutContent from '../Components/AboutContent'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="I am Aspiring Frontend Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
