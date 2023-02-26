import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div id='footer'>
      <div id='footer-top'>
        <div className='footer-heading'>
          <div>
            <div className='footer-title'>Questions?</div>
            <p>FAQs</p>
            <p>info@semba.com</p>
            <p>press@semba.com</p>
          </div>
          <div className='footer-heading'>
            <div>fb</div>
            <div>fb</div>
            <div>fb</div>
          </div>
      </div>
      <div className='footer-heading'>
          <div>
          <div className='footer-title'>Get Started?</div>
            <p>Find a therapist</p>
            <p>How it works</p>
          </div>
      </div>
      <div className='footer-heading'>
          <div>
          <div className='footer-title'>For Providers</div>
            <p>Benefits</p>
            <p>Join Semba</p>
            <p>Refer a provider</p>
          </div>
      </div>
      <div className='footer-heading'>
          <div>
          <div className='footer-title'>Information</div>
            <p>Our mission</p>
            <p>Where we are</p>
            <p>Careers</p>
          </div>
      </div>

      </div>
      <div id='footer-bottom'>
        <div id='footer-bottom-left'>
          <div>If you or someone you know is experiencing an emergency or crisis and needs immediate help, call 911 or go to the nearest emergency room.</div>
        </div>
        <div id='footer-bottom-right'>
          <div>Privacy Policy</div>  
          <div>Copyright Semba, 2023</div>  
        </div>
      </div>
    </div>
  )
}

export default Footer