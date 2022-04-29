import "./header.css";
import CTA from './CTA';
import ME from '../../assets/img/man3.png';
import HeaderSocials from './HeaderSocials';
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init()

  })
  return (
    <header id='header'>
      
      <div className="container">
        <div className="header_container">
          <h5 className='hh' data-aos="fade-up"
            data-aos-duration="2000">Hello ,I'm</h5>
          <h1 data-aos="fade-up"
            data-aos-duration="2000" >Sardor</h1>
          <h5 data-aos="fade-up"
            data-aos-duration="2000" className="text-light">Web Developer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="" data-aos="fade-up"
              data-aos-duration="2000" />
          </div>
          <a href="#about" className='scroll_down'>Scrol Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header