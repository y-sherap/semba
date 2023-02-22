import React from 'react'
import Banner from '../../assets/Banner.jpg'

import './home.css'

function Home() {
  return (
    <div id='home-page'>
      <div id='banner'>
        <div id='banner-text'>
          <div>Lorem ipsum dolor sit amet</div>
          <div>consectetur adipiscing  </div> 
          <div>sed finibus est.</div>
        </div>
        <div>
        <img src={Banner} alt='banner' id='banner-image' />
        </div>
      </div>
    </div>
  )
}

export default Home