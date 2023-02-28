import React from 'react'
import BannerImage from '../../assets/Banner.jpg'
import './banner.css'

function Banner() {
  return (
    <div className='banner'>
    <div className='banner-text'>
      <div>A brighter future</div>
      <div> starts with a healthier</div> 
      <div>mind, online</div> 
    </div>
    <div>
      <img src={BannerImage} alt='banner' className='banner-image' />
    </div>
  </div>
  )
}

export default Banner