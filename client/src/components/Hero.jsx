import React from 'react'
// import pic2 from ''

function Hero() {
  return (
    <div className='flex justify-center items-center bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-lg'>
        <span>Affectecd by</span>
        <span className='ml-2 mr-2'><img className ="w-[100px]" src="src/Assets/pic2.webp" type="image/webp"alt="" /></span>
        <span><p>Video SDK Shutting down? Get 6 Months FREE credits for Huddle01 SDK</p></span>
        <span className='bg-white border-2 m-3 rounded-lg text-black px-2'><button>Migration Guide{"->"} </button></span>
    </div>
  )
}

export default Hero