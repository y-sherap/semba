import React from 'react'
import Banner from '../../components/Banner/Banner'
import Insurance from '../../components/Insurance/Insurance'
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
    </div>
  )
}

export default Home