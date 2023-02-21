import React from 'react'
import Banner from '/Users/ysherap/Projects/semba/client/src/banner.jpeg'
import './home.css'

function Home() {
  return (
    <div id='home-page'>
      <div id='banner'>
        <div id='banner-text'>
          <div>A simple, supportive</div>
          <div>approach to mental </div> 
          <div>health care</div>
        </div>
        <div>
        <img src={Banner} alt='banner' id='banner-image' />
        </div>
      </div>
    </div>
  )
}

export default Home