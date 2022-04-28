import "./About.css"
import React, { useEffect } from 'react';
import ABME from '../../assets/img/man2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <section id='about'>
      <h5 data-aos="fade-up"
            data-aos-duration="2000">Get to Know</h5>
      <h2 data-aos="fade-up"
            data-aos-duration="2000">About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image" >
            <img src={ABME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward data-aos="fade-up"
            data-aos-duration="2000" className='about_icon' />
              <h5 data-aos="fade-up"
            data-aos-duration="2000">Experience</h5>
              <small data-aos="fade-up"
            data-aos-duration="2000">1+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers data-aos="fade-up"
            data-aos-duration="2000" className='about_icon' />
              <h5 data-aos="fade-up"
            data-aos-duration="2000" >Clients</h5>
              <small data-aos="fade-up"
            data-aos-duration="2000" >15+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary data-aos="fade-up"
            data-aos-duration="2000" className='about_icon' />
              <h5 data-aos="fade-up"
            data-aos-duration="2000">Projects</h5>
              <small data-aos="fade-up"
            data-aos-duration="2000">30+ Complited</small>
            </article>
          </div>
          <p data-aos="fade-up"
            data-aos-duration="2000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nemo veritatis similique dolorem consequuntur a ipsam quisquam error accusamus doloremque repellat maxime laborum dolores eligendi quia, repudiandae harum. Alias, voluptas.
          </p>
          <a data-aos="fade-up"
            data-aos-duration="2000" href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About