import "./About.css"
import ABME from '../../assets/img/man2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <section id='about'>
      <h5 data-aos="fade-up"
            data-aos-duration="800">Get to Know</h5>
      <h2 data-aos="fade-up"
            data-aos-duration="800">About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image" >
            <img src={ABME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card" data-aos="flip-up">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about_card" data-aos="flip-up">
              <FiUsers className='about_icon' />
              <h5 >Clients</h5>
              <small >15+ Worldwide</small>
            </article>

            <article className="about_card" data-aos="flip-up">
              <VscFolderLibrary  className='about_icon' />
              <h5 >Projects</h5>
              <small >30+ Complited</small>
            </article>
          </div>
          <p data-aos="fade-up"
            data-aos-duration="800">
              Customer serviceability and timely submission of the project in a quality, reliable condition . Approach their work responsibly
          </p>
          <a data-aos="fade-up"
            data-aos-duration="800" href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About