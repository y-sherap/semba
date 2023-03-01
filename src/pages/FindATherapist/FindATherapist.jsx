import React from 'react'
import './findatherapist.css'
import Footer from '../../components/Footer/Footer'
import { Form } from 'react-router-dom'

function FindATherapist() {
  return (
    <div id='therapist-page'>
      <div>
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default FindATherapist