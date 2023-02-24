import React from 'react'
import './quotes.css'
import { useState, useEffect } from 'react'
import Quote1 from './Quote1'
import Quote2 from './Quote2'
import Quote3 from './Quote3'

function Quotes() {

  const [quote1, setQuote1] = useState(true)
  const [quote2, setQuote2] = useState(false)
  const [quote3, setQuote3] = useState(false)
  const [clickedDot, setClickedDot] = useState(0)

    const showQuote1 = e => {
      setQuote1(true)
      setQuote2(false)
      setQuote3(false)
      setClickedDot(0)
    }
  
    const showQuote2 = e => {
      setQuote1(false)
      setQuote2(true)
      setQuote3(false)
      setClickedDot(1)

    }
  
    const showQuote3 = e => {
      setQuote1(false)
      setQuote2(false)
     setQuote3(true)
     setClickedDot(2)
    }

    useEffect(() => {
      showQuote1()
      showQuote2()
      showQuote3()
    }, [])
  
  return (
    <div id='quote-page'>
      {quote1 &&(<div><Quote1 /></div>)}
      {quote2 &&(<div><Quote2 /></div>)}
      {quote3 &&(<div><Quote3 /></div>)}
        <div id='dots-carousel'>
          <div className={`dot-test ${clickedDot === 0 ? 'clicked-dot' :''}`} onClick={showQuote1}></div>
          <div className={`dot-test ${clickedDot === 1 ? 'clicked-dot' :''}`} onClick={showQuote2}></div>          
          <div className={`dot-test ${clickedDot === 2 ? 'clicked-dot' :''}`} onClick={showQuote3}></div>
        </div>
    </div>
  )
}

export default Quotes