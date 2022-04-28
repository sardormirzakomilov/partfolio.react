import React from 'react';
import "./header.css";
import CTA from './CTA';
import Langu from './Lang';
import ME from '../../assets/img/man3.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header id='header'>
      <div className="MyContainer">
      <Langu />
      </div>
      <div className="container">
        <div className="header_container">
          <h5 className='hh'>Hello ,I'm</h5>
          <h1>Nick</h1>
          <h5 className="text-light">Web Developer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me"> 
            <img src={ME} alt="" />
          </div>
          <a href="#about" className='scroll_down'>Scrol Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header