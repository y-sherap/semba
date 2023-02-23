import React from 'react'
import './howitworks.css'
import HomeCartoon from '../../assets/HomeCartoon.jpg'

function HowItWorks() {
  return (
    <div id='how-it-works-container'>
        <div id='how-it-works-title'>How Semba Works</div>
        <div id='how-it-works-elements'>
            <div id='how-it-works-left'>
                <div className='left-item'>Lorem ipsum</div>
                <div className='left-item'>Lorem ipsum</div>
                <div className='left-item'>Lorem ipsum</div>
            </div>
            <div id='how-it-works-right'>
                <div className='right-item'>
                    <img src={HomeCartoon} alt='home-cartoon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks