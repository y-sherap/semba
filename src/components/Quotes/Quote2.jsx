import React from 'react'
import PFP2 from '../../assets/pfp2.jpg'

function Quote2() {
  return (
    <div className='quote-container'>
      <div className='quote-item'>"Maecenas consequat nunc vel mauris faucibus, vitae cursus mi bibendum. Interdum et malesuada fames ac."</div>
      <div className='quote-author'>
        <div className='pfp-author'><img src={PFP2} alt='client-picture'/></div>
        <div className='author-name'>
          <div className='author-header'>Client</div>
          <div>John Doe</div>
        </div>
      </div>
    </div>
  )
}

export default Quote2