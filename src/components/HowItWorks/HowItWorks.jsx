import React from 'react'
import './howitworks.css'
import Handshakee from '../../assets/Handshakee.png'
import Communicate from '../../assets/communicate.png'


function HowItWorks() {
  return (
    <div id='how-it-works-component'>
        <div id='how-it-works-title'>How Semba Works</div>
        <div id='how-it-works-elements'>
            <div id='how-it-works-item'>
                <div className='left-item'>
                    <img src={Handshakee} alt='cartoon' />
                </div>
                <div className='right-item'>
                    <h2>Find the best therapist for you</h2>
                    <p>Answer a few questions to find a licensed therapist who fits your needs and preferences. Tap into the largest network of licensed, professional, board-certified providers.</p>
                </div>
            </div>
            <div id='how-it-works-item'>
                <div className='left-item'>
                    <img src={Communicate} alt='cartoon' />
                </div>
                <div className='right-item-2'>
                    <h2>Communicate your way</h2>
                    <p>Talk to your therapist however you feel comfortable — text, chat, phone, or video.</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default HowItWorks