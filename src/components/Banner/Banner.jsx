import React from 'react'
import BannerImage from '../../assets/Banner.jpg'
import './banner.css'
import BannerImage1 from '../../assets/hiker.jpg'

function Banner() {
  return (
    <div id='banner'>
    <div id='banner-text'>
      {/* <div>We care about </div>
      <div>your mental wellbeing. </div>  */}
      <div>A brighter future starts</div>
      <div>with a healthier mind,</div> 
      <div>online</div> 


    </div>
    <div>
    <img src={BannerImage1} alt='banner' id='banner-image' />
    </div>
  </div>
  )
}

export default Banner