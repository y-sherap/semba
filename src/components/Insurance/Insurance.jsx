import React from 'react'
import Aetna from '../../assets/aetna.png'
import United from '../../assets/united.png'
import Cigna from '../../assets/cigna.png'
import Oscar from '../../assets/oscar.png'
import Empire from '../../assets/empire.png'
import Anthem from '../../assets/anthem.png'
import './insurance.css'

function Insurance() {
  return (
    <div id='insurance-container'>
    <div id='left-insurance-container'>
      Insurance companies we work with:
    </div>
      <div className='insurance-logo'>
        <img src={Aetna} alt='aetna' />
      </div>
      <div className='insurance-logo'>
        <img src={Anthem} alt='aetna' />
      </div>
      <div className='insurance-logo'>
        <img src={Cigna} alt='aetna' />
      </div>
      <div className='insurance-logo'>
        <img src={Empire} alt='aetna' />
      </div>
      <div className='insurance-logo'>
        <img src={Oscar} alt='aetna' />
      </div>
      <div className='insurance-logo'>
        <img src={United} alt='aetna' />
      </div>
  </div>
  )
}

export default Insurance