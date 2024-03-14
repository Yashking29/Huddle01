import React from 'react'
import globe from '../Assets/globe.png'




function Body() {
  return (
     <div className='h-[250px] overflow-hidden'>
        <img className='h-[600px] w-[600px]' src={globe} alt="" />
     </div>
  )
}

export default Body