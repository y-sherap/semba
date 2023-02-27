import React from 'react'
import BannerImage from '../../assets/Banner.jpg'
import './banner.css'

function Banner() {
  return (
    <div id='banner'>
    <div id='banner-text'>
      <div>A brighter future starts</div>
      <div>with a healthier mind,</div> 
      <div>online</div> 
    </div>
    <div>
      <img src={BannerImage} alt='banner' id='banner-image' />
    </div>
  </div>
  )
}

export default Banner