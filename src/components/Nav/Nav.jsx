import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

function Nav() {
  
  const [showNav, setShowNav] = useState(false)

  let navigate = useNavigate()

  const linkTo = () => {
    navigate('/find-a-therapist')
  }

  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div id='nav'>
      <div id='left-nav'>
        <Link to='/'>Semba</Link>
      </div>
      <div className='hamburger' onClick={handleShowNav}><GiHamburgerMenu />
      </div>
      <div className={showNav ? "right-nav-expanded" : "right-nav"}>
        <ul>
          <li>
            <a href='/how-it-works'>How It Works</a>
          </li>
          <li>
            <a href='/about'>About Semba</a>
          </li>
          <li>
            <a href='/#faq'>FAQ</a>
          </li>
          <li>
            <a href='/#contact'>Contact</a>
          </li>
        </ul>
        <div><button onClick={linkTo}>Find A Therapist</button></div>            
      </div>
    </div>
  )
}

export default Nav