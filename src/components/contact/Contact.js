
import "./Contact.css";
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

  useEffect(() => {
    AOS.init();
  })
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5og7x6u', 'template_k63s3uw', form.current, 'BdC-Pjpef0VK1inKw')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <div className="mycontainer">
            <article className="contact_option" data-aos="flip-down">
              <BsInstagram className='contact_option-icon' />
              <h4>Email</h4>
              <label htmlFor="name"><h5>nick_7703s</h5></label>
              <a href="https://www.instagram.com/nick_7703s/" target="_blank ">Send a message</a>

            </article>
            
            <article className="contact_option" data-aos="flip-down">
              <FaTelegramPlane className='contact_option-icon' /> 
              <h4>Telegram</h4>
              <label htmlFor="name"><h5>nick_7703s</h5></label>
              <a href="https://t.me/nick_7703s" target='_blank '>Send a message </a>


            </article>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mycontainer1">
            <input type="text" name='name' id='name' placeholder='Your Full Name' required  data-aos="flip-up"/>
            <input type="email" name='email' placeholder='Your Email' required  data-aos="flip-up"/>
            <textarea name="message" rows="7" placeholder='Your Message' required data-aos="flip-up"></textarea>
            <button type='submit' className='btn btn-primary'  data-aos="flip-up">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact