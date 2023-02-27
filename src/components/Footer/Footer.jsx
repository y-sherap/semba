import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <div id='footer'>
      <div id='footer-top'>
        <div id='footer-first-column'>
          <div className='footer-heading'>
          <div>
            <div className='footer-title'>Questions?</div>
            <div className='footer-item'>FAQs</div>
            <div className='footer-item'>info@semba.com</div>
            <div className='footer-item'>press@semba.com</div>
          </div>
          </div>
          <div className='footer-heading'>
            <div className='footer-title'>Follow Us</div>
            <div id='icons'>
              <div className='social-icons'><BsFacebook /></div>
              <div className='social-icons'><BsTwitter /></div>
              <div className='social-icons'><BsLinkedin /></div>
            </div>
          </div>

        </div>
      <div className='footer-heading'>
          <div>
          <div className='footer-title'>Get Started?</div>
          <div className='footer-item'>Find a therapist</div>
          <div className='footer-item'>How it works</div>
          </div>
      </div>
      <div className='footer-heading'>
          <div>
          <div className='footer-title'>For Providers</div>
            <div className='footer-item'>Benefits</div>
            <div className='footer-item'>Join Semba</div>
            <div className='footer-item'>Refer a provider</div>
          </div>
      </div>
      <div className='footer-heading'>
          <div>
          <div className='footer-title'>Information</div>
            <div className='footer-item'>Our mission</div>
            <div className='footer-item'>Where we are</div>
            <div className='footer-item'>Careers</div>
          </div>
      </div>

      </div>
      <div id='footer-bottom'>
        <div id='footer-bottom-left'>
          <div>If you or someone you know is experiencing an emergency or crisis and needs immediate help, call 911 or go to the nearest emergency room.</div>
        </div>
        <div id='footer-bottom-right'>
          <div>Privacy Policy | Copyright Semba, 2023</div>  
        </div>
      </div>
    </div>
  )
}

export default Footer