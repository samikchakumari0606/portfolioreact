import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'
import pro2 from "../assets/project2.png"
import pro3 from "../assets/project3.png"

const AboutContent = () => {
  return (
    <div className='about'>
       <div className="left">
        <h1>Who Am I?</h1>
        <p>Aspiring Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.Passionate about creating responsive, user-friendly interfaces and continuously learning new technologies to improve web performance and design </p>
        <Link to="/contact"><button className='btn'>Contact</button></Link>
       </div>

       <div className="right">
        <div className="img-container">
            <div className="img-stack top">
            <img src={pro2} alt="true" className="img" />
            </div>

            <div className="img-stack bottom">
            <img src={pro3} alt="true" className="img" />
            </div>
         
        </div>
       </div>
    </div>
  )
}

export default AboutContent
