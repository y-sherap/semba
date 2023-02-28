import React from 'react'
import PFP1 from '../../assets/pfp1.jpg'


function Quote1() {
  return (
    <div className='quote-container'>
      <div className='quote-item'>"Ut accumsan malesuada metus, ut aliquet felis aliquiet in. Ut accumsan malesuada metus, ut aliquet felis aliquiet in."</div>
      <div className='quote-author'>
        <div className='pfp-author'><img src={PFP1} alt='client-picture'/></div>
        <div className='author-name'>
          <div className='author-header'>Client</div>
          <div>Sierra Lee</div>
        </div>
      </div>
    </div>
  )
}

export default Quote1