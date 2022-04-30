
import "./portfolio.css"
import IMG from '../../assets/img/man4.jpg'
import IMG2 from '../../assets/img/man5.jpg'
import IMG3 from '../../assets/img/man6.jpg'
import IMG4 from '../../assets/img/man7.jpg'
import IMG5 from '../../assets/img/man8.jpg'
import IMG6 from '../../assets/img/man9.jpg'
import IMG7 from '../../assets/img/man10.jpg'
import IMG8 from '../../assets/img/man11.jpg'
import IMG9 from '../../assets/img/man12.jpg'
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
const data = [
  {
    id: 4,
    image: IMG8,
    title: 'Medilab',
    github: 'https://github.com/sardormirzakomilov/Medilab',
    demo: 'https://sardor-medilab.netlify.app/'
  },
  {
    id: 7,
    image: IMG4,
    title: 'Max Proff',
    github: 'https://github.com/sardormirzakomilov/MaxProf',
    demo: 'https://sardor-maxpro.netlify.app/'
  },

  {
    id: 8,
    image: IMG9,
    title: 'eNno',
    github: 'https://github.com/sardormirzakomilov/oNno',
    demo: 'https://sardor-enno.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ANSI',
    github: 'https://github.com/sardormirzakomilov/qwer',
    demo: 'https://qwer-sardor.netlify.app/'
  },
  {
    id: 6,
    image: IMG7,
    title: 'Chart Socetio',
    github: 'https://github.com/sardormirzakomilov/socket.io.chat',
    demo: 'https://chartsocetio.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'BarysAuto',
    github: 'https://github.com/sardormirzakomilov/sertifikat_maket',
    demo: 'https://cars-prodaj.netlify.app/'
  },
  
  {
    id: 5,
    image: IMG5,
    title: 'Mans Shop',
    github: 'https://github.com/sardormirzakomilov/mans',
    demo: 'https://mans-shop-sardor.netlify.app/'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Swell',
    github: 'https://github.com/sardormirzakomilov/shop',
    demo: 'https://shoppps.netlify.app/'
  },
  {
    id: 1,
    image: IMG,
    title: 'Trevland',
    github: 'https://github.com/sardormirzakomilov/travlend',
    demo: 'https://travlend-sardor.netlify.app/'
  },
 
]
const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section id='portfolio'>
      <h5 data-aos="fade-up" data-aos-duration="1000">My Recent Work</h5>
      <h2 data-aos="fade-up" data-aos-duration="1000">Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item' data-aos="fade-up" data-aos-duration="1000">
                <div className="portfolio_item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta" >
                  <a href={github} className='btn' target='_blank '>Git hub</a>
                  <a href={demo} className='btn btn-primary' target='_blank '>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio