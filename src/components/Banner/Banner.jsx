import React from 'react'
import BannerImage from '../../assets/Banner.jpg'
import './banner.css'

function Banner() {
  return (
    <div id='banner'>
    <div id='banner-text'>
      <div>Lorem ipsum dolor sit amet</div>
      <div>consectetur adipiscing  </div> 
      <div>sed finibus est.</div>
    </div>
    <div>
    <img src={BannerImage} alt='banner' id='banner-image' />
    </div>
  </div>
  )
}

export default Banner