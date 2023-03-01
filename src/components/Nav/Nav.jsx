import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

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
        <Link to='/'>Semba Health</Link>
      </div>
      <div className='hamburger' onClick={handleShowNav}>
        {showNav ? <GrClose /> : <GiHamburgerMenu />}
      </div>
      <div className={showNav ? "right-nav-expanded" : "right-nav"}>
        <ul>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
        {/* <div><button onClick={linkTo}>Find A Therapist</button></div>             */}
      </div>
    </div>
  )
}

export default Nav