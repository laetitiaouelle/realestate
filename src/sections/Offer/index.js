import React from 'react'

function Offer() {
  return (
    <div className="px-[18px] sm:px-[50px] lg:px-[135px]  bg-bg  py-[100px]" data-aos="fade-up" data-aos-duration="1200">
      <div className='w-full flex items-center justify-center ' >
        <span className='md:text-[54px] text-3xl sm:text-[48px] font-semibold text-[#191623]' >What we give you</span>
      </div>
      <div className='w-full flex items-center justify-center ' >
        <span className='text-[18px] font-normal text-[#666270] max-w-[500px] text-center mt-5' >
           Building a next-generation collaborative platform to connect renters, homeowners, and agents.
        </span>
      </div>
      <div className='mt-[70px] relative bg-main-orange' >
        <video autoPlay controls loop muted className='relative' >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Offer