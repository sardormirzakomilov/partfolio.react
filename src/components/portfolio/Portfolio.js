import React from 'react'
import "./portfolio.css"
import IMG from '../../assets/img/man4.jpg'
import IMG2 from '../../assets/img/man5.jpg'
import IMG3 from '../../assets/img/man6.jpg'
import IMG4 from '../../assets/img/man7.jpg'
import IMG5 from '../../assets/img/man8.jpg'
import IMG6 from '../../assets/img/man9.jpg'
const data = [
  {
    id: 1,
    image: IMG,
    title: 'Trevland',
    github: 'https://github.com/sardormirzakomilov/travlend',
    demo: 'https://travlend-sardor.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ANSI',
    github: 'https://github.com/sardormirzakomilov/qwer',
    demo: 'https://qwer-sardor.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'BarysAuto',
    github: 'https://github.com/sardormirzakomilov/sertifikat_maket',
    demo: 'https://cars-prodaj.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Max Proff',
    github: 'https://github.com/sardormirzakomilov/MaxProf',
    demo: 'https://sardor-maxpro.netlify.app/'
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
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
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