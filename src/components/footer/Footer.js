
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
    <footer id='footer'>
      <a href="#!" className='footer_logo'  data-aos="flip-up">Nick</a>
      <ul className='permalinks'>
        <li> <a href="# "  data-aos="flip-up"> Home </a></li>
        <li> <a href="#about"  data-aos="flip-up"> About </a></li>
        <li> <a href="#experience "  data-aos="flip-up"> Experience </a></li>
        <li> <a href="#portfolio"  data-aos="flip-up">Portfolio</a></li>
        <li> <a href="#testimonials"  data-aos="flip-up"> Testimonials </a></li>
        <li> <a href="#contact"  data-aos="flip-up"> Contact </a></li>
      </ul>
      <div className="footer_socials"  data-aos="flip-up">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>
      <div className="footer_copyright"  data-aos="flip-up">
         <small>&copy; Mirzakomilov Sardor ( NICK )</small>
      </div>
    </footer>
  )
}

export default Footer