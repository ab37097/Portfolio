import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>UI UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blabla bla bla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="services__head">
            <h3>UI UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="services__head">
            <h3>UI UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum bla bla bla bla blablablabla</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default services