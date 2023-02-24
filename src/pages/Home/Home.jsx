import React from 'react'
import Banner from '../../components/Banner/Banner'
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
      <div className='home-component'>
        <Quotes />
      </div>
    </div>
  )
}

export default Home