import React from 'react'
import './faq.css'
import FAQData from '../../assets/FAQData'
import { useState } from 'react'

function FAQ() {

    const [clickedIcon, setClickedIcon] = useState(-1)

    const toggleAccordian = (index) => {
        if (index === clickedIcon) {
            setClickedIcon(-1)
            return
        }
        setClickedIcon(index)
    }

  return (
    <div id='faq-component'>
        <div id='faq-title'>Frequently asked questions</div>
        <div id='faq-container'>
            {FAQData.map((item, index) => (
                <div key={index} onClick={()=> toggleAccordian(index)}>
                    <div className='faq-heading'>
                        <p className={clickedIcon === index ? "active" : "" }>{item.question}</p>
                    <div>
                        {clickedIcon === index ? (
                            <span className='minus'>-</span>
                        ) : (
                            <span className='plus'>+</span>
                        )}
                    </div>
                    </div> 
                    <div className='faq-answer'>
                        <p className={clickedIcon === index ? "active" : "inactive"}>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FAQ