import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div id='nav'>
      <div id='left-nav'>
        <Link to='/'>Semba</Link>
      </div>
      <div id='right-nav'>
        <div><Link to ='/how-it-works'>How It Works</Link></div>
        <div><Link to ='/about'>About Semba</Link></div>
        <div><button>Find A Therapist</button></div>        
      </div>
    </div>
  )
}

export default Nav