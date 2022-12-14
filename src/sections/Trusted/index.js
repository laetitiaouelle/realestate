import React from 'react'
import Image from 'next/image'

function Trusted() {
  return (
    <div className="px-[18px] sm:px-[50px] lg:px-[135px] py-[55px] lg:py-[150px] bg-main-purple h-auto  ">
          <div className='grid grid-cols-2'>
            <span data-aos="fade-right" data-aos-duration="1200" className=' col-span-2 lg:col-span-1 mb-10 lg:mb-0 block sm:text-4xl  text-3xl lg:text-[40px] md:text-center lg:text-left xl:text-[50px] 2xl:text-[54px] text-[#fff] lg:leading-[70px] ' >
              Trusted by the people across the globe
            </span>
            <div data-aos="fade-left" data-aos-duration="1200" className='col-span-2 lg:col-span-1  ' >
              <span className=' block text-[18px] md:w-[450px] w-auto mx-auto lg:mx-0 lg:w-auto  lg:ml-[50px]  xl:ml-[130px] font-normal text-[#fff]  ' >
                Building a next-generation collaborative platform to connect renters, homeowners, and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes sense.
              </span>
              <span className=' block text-[18px] md:w-[450px] w-auto mx-auto lg:mx-0 lg:w-auto lg:ml-[50px]  xl:ml-[130px] text-[#fff] font-normal mt-5 ' >
                No matter what stage of life you’re in, having friends to share experiences with is what it’s all about.
              </span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" className='flex flex-col md:flex-row  justify-evenly mt-[70px]'>
            <div className='flex flex-col md:items-center mb-10 md:mb-0 ' >
                <div className='flex flex-row items-center' >
                  <span className='block relative w-10 h-10 mr-4' >
                    <Image  src="/images/whaoo.png" layout='fill' objectFit='contain'  />
                  </span>
                  <span className='block text-[#fff] font-semibold lg:text-5xl  xl:text-[54px]' >
                    +20K
                  </span>
                </div>
                <span className='block text-[18px] text-[#fff] font-normal ' >Clients worldwide</span>
            </div>
            <div className='flex flex-col md:items-center mb-10 md:mb-0' >
                <div className='flex flex-row items-center' >
                  <span className='block relative w-10 h-10 mr-4' >
                    <Image  src="/images/love.png" layout='fill' objectFit='contain'  />
                  </span>
                  <span className='block text-[#fff] font-semibold lg:text-5xl  xl:text-[54px]' >
                    95.7%
                  </span>
                </div>
                <span className='block text-[18px] text-[#fff] font-normal ' >Satisfied Clients</span>
            </div>
            <div className='flex flex-col md:items-center mb-10 md:mb-0' >
                <div className='flex flex-row items-center' >
                  <span className='block relative w-10 h-10 mr-4' >
                    <Image  src="/images/happy.png" layout='fill' objectFit='contain'  />
                  </span>
                  <span className='block text-[#fff] font-semibold lg:text-5xl  xl:text-[54px]' >
                    100+
                  </span>
                </div>
                <span className='block text-[18px] text-[#fff] font-normal ' >City around</span>
            </div>
          </div>
    </div>
  )
}

export default Trusted