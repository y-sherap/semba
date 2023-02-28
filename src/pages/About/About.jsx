import React from 'react'
import './about.css'
import Footer from '../../components/Footer/Footer'
import AboutBanner from '../../components/AboutBanner/AboutBanner'

function About() {
  return (
    <div id='about-page'>
      <div>
        <AboutBanner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About