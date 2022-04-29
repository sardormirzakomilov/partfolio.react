import React , {useEffect} from 'react'
import "./Experience.css"
import { BsPatchCheckFill } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Experience = () => {
  useEffect(() => {
    AOS.init();
  })

  return (
    <section id='experience'>
      <h5 data-aos="fade-up" data-aos-duration="2000">What Skills I Have</h5>
      <h2 data-aos="fade-up" data-aos-duration="2000">My Experience</h2>

      <div className="container experience_container">
        <div data-aos="fade-up" data-aos-duration="2000" className="experience_frontend">
          <h3 data-aos="fade-up" data-aos-duration="2000">Frontend Development</h3>
          <div data-aos="flip-up" className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Css</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Jquery</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="experience_backend">
          <h3 data-aos="fade-up" data-aos-duration="2000">Backend Development</h3>
          <div data-aos="flip-up" className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Node js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>

              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Express js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Handlebars</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Pug</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience