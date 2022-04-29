
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <footer id='footer' data-aos="flip-up">
      <a href="#!" className='footer_logo'>Nick</a>
      <ul className='permalinks'>
        <li> <a href="# "> Home </a></li>
        <li> <a href="#about"> About </a></li>
        <li> <a href="#experience "> Experience </a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#testimonials"> Testimonials </a></li>
        <li> <a href="#contact"> Contact </a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>
      <div className="footer_copyright">
         <small>&copy; Mirzakomilov Sardor ( NICK )</small>
      </div>
    </footer>
  )
}

export default Footer