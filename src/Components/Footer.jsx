import React from 'react'
import "./Footer.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer' style={{ color: "white" }}>
      <div className="footer-container">

        <div className="left">

          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Ranchi, Jharkhand, India</p>
             
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              8340703278
            </h4>

          </div>

          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              samikchaprasad0606@gmail.com
            </h4>

          </div>

        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>Aspiring Frontend Developer with a strong foundation in HTML, CSS, JavaScript, Node.js, MongoDB and modern frameworks like React.</p>

          <div className="social">

            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />

          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
