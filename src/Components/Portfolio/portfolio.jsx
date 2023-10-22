import React from 'react'
import './portfolio.css'
import Image1 from '../../Files/port1.jpg'
import Image3 from '../../Files/port3.jpg'
import Image5 from '../../Files/port5.jpg'
import Image6 from '../../Files/port6.jpg'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Port1',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/ab37097/collections'
  },
  {
    id: 2,
    image: Image1,
    title: 'Port2',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/ab37097/collections'
  },
  {
    id: 3,
    image: Image3,
    title: 'Port3',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/ab37097/collections'
  },
  {
    id: 4,
    image: Image3,
    title: 'Port4',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/ab37097/collections'
  },
  {
    id: 5,
    image: Image5,
    title: 'Port5',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/ab37097/collections'
  },
  {
    id: 6,
    image: Image6,
    title: 'Port6',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/ab37097/collections'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio