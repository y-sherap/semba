import React from 'react'
import PFP3 from '../../assets/pfp3.jpg'


function Quote3() {
  return (
    <div className='quote-container'>
      <div className='quote-item'>"Vestibulum ante sapien, dictum non feugiat sit amet, mattis non odio. Morbi quis convallis tellus, quis fringilla odio."</div>
      <div className='quote-author'>
        <div className='pfp-author'><img src={PFP3} alt='client-picture'/></div>
        <div className='author-name'>
          <div className='author-header'>Client</div>
          <div>John Doe</div>
        </div>
      </div>
    </div>
  )
}

export default Quote3