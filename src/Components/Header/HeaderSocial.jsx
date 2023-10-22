import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anand-babu-abd/" target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/ab37097' target="_blank"><BsGithub /></a>
        <a href='https://www.facebook.com/' target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocial