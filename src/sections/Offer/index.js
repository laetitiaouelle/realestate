import React from 'react'

function Offer() {
  return (
    <div className="px-[135px]  bg-bg  py-[100px]">
      <div className='w-full flex items-center justify-center ' >
        <span className='text-[54px] font-semibold text-[#191623]' >What we give you</span>
      </div>
      <div className='w-full flex items-center justify-center ' >
        <span className='text-[18px] font-normal text-[#666270] max-w-[500px] text-center mt-5' >
           Building a next-generation collaborative platform to connect renters, homeowners, and agents.
        </span>
      </div>
      <div className='mt-[70px] relative bg-main-orange' >
        <video autoplay controls loop muted className='relative' >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Offer