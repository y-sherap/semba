import React from 'react'
import Aetna from '../../assets/aetna.png'
import United from '../../assets/united.png'
import Cigna from '../../assets/cigna.png'
import Oscar from '../../assets/oscar.png'
import Empire from '../../assets/empire.png'
import './insurance.css'

function Insurance() {
  return (
    <div id='insurance-container'>
    <div id='left-insurance-container'>
      Insurance companies we work with:
    </div>
    <div id='right-insurance-container'>
      <div className='insurance-logo'>
        <img src={Aetna} alt='aetna' />
      </div>
      <div className='insurance-logo'>
        <img src={Empire} alt='empire' />
      </div>
      <div className='insurance-logo'>
        <img src={Cigna} alt='cigna' />
      </div>
      <div className='insurance-logo'>
        <img src={Oscar} alt='oscar' />
      </div>
      <div className='insurance-logo'>
        <img src={United} alt='united' />
      </div>
    </div>
  </div>
  )
}

export default Insurance