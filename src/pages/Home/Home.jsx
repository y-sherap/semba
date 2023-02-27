import React from 'react'
import Banner from '../../components/Banner/Banner'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Insurance from '../../components/Insurance/Insurance'
import Quotes from '../../components/Quotes/Quotes'
import './home.css'


function Home() {
  return (
    <div id='home-page'>
      <div className='home-component'>
        <Banner />
      </div>
      <div className='home-component'>
        <Insurance />
      </div>
      <div className='home-component'>
        <HowItWorks />
      </div>
      <div class="divider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className='home-component-faq'>
        <FAQ />
      </div>
      <div className='home-component'>
        <Quotes />
      </div>
      <div className='home-component'>
        <Footer />
      </div>
    </div>
  )
}

export default Home