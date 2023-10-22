import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../Files/me.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello There!</h5>
        <h2>It's Anand</h2>
        <h5 className = "text-light">Fullstack developer</h5>
        
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header