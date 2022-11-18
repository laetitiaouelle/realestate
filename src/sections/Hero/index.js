import React from 'react'
import NavBar from '../../components/NavBar'
import Image from 'next/image'

function Hero() {
  return (
    <div className=" px-[18px] sm:px-[50px] lg:px-[135px] pt-10 bg-bg" >
      <NavBar/>
      <div className='mt-[92px] w-full 2xl:h-[360px]  grid grid-cols-4 sm:gap-7 gap-3 ' >
          <div className=' col-span-1 min-w-[80px] min-h-[190px] max-h-[530px] relative' data-aos="fade-up" data-aos-duration="1000" >
            <img src="/images/home1.png" className='object-fill' />
          </div>
          <div className='col-span-1 min-w-[80px] min-h-[190px] max-h-[530px]  relative '  data-aos="fade-down" data-aos-duration="1200">
            <img src="/images/home2.png" className='object-fill translate-y-7'  />
          </div>
          <div className='col-span-1 min-w-[80px] min-h-[190px] max-h-[530px]  relative ' data-aos="fade-up" data-aos-duration="1400" >
            <img src="/images/home3.png" className='object-fill' />
          </div>
          <div className=' col-span-1 min-w-[80px] min-h-[190px] relative max-h-[530px] ' data-aos="fade-down" data-aos-duration="1600" >
            <img src="/images/home4.png" className='object-fill  translate-y-7' />
          </div>
      </div>
      <div className=' -mt-5 sm:mt-[50px] md:mt-[70px] ' data-aos="fade-down" data-aos-duration="1200" >
        <span className='font-semibold sm:text-[56px] text-[44px] md:text-[65px] lg:text-[80px]  xl:text-[95px] 2xl::text-[110px] leading-[80px] lg:leading-[114px] text-main-dark w-[970px]' >
            Home is where <br/> your story begins
        </span>
        <span className='block xl:w-[970px] text-[#666270] text-base font-normal mt-[30px] mb-[50px] w-full ' >
          Building a next-generation collaborative platform to connect renters, homeowners, and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes sense.
        </span>
        <div className='flex justify-between items-center xl:flex-row flex-col xl:w-[970px] ' >
            <div className=' h-[258px] lg:items-center lg:h-[112px] w-full md:w-[500px] lg:w-full bg-[#fff] rounded-md mb-8 xl:mb-[110px] flex flex-col lg:flex-row px-5 py-8 justify-between' >
                <div className='border h-12 lg:h-[42px] md:mb-2 border-[#D6D4DD] rounded-md px-5 py-1 flex flex-row justify-between items-center' >
                  <input className=' h-full outline-none text-[#666270] ' type="text"/>
                  <span className='relative h-4 w-4 ml-8 ' >
                    <Image src="/images/search.png" layout='fill' objectFit='contain' />
                  </span>
                </div>
                <div className='border h-12 lg:h-[42px] md:mb-2 lg:ml-5  border-[#D6D4DD] rounded-md px-5 py-1 flex flex-row justify-between items-center' >
                  <input className=' h-full outline-none text-[#666270] ' type="text"/>
                  <span className='relative h-4 w-4 ml-8 ' >
                    <Image src="/images/search.png" layout='fill' objectFit='contain' />
                  </span>
                </div>
                <a className=' w-[167px] lg:ml-5 h-[42px] text-[#fff] text-base font-semibold bg-main-orange flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
                  <span>Find a home</span>
                  <span className='relative h-4 w-4 ml-8 ' >
                    <Image src="/images/arrow_right.png" layout='fill' objectFit='contain' />
                  </span>
                </a>
            </div>
            <div className='md:w-[500px] lg:w-auto xl:ml-[150px]' >
              <a className='flex flex-col items-center cursor-pointer group mb-[110px] w-[98px] h-[76px] ' >
                <span className='flex group-hover:items-end justify-center mb-3  w-6 h-9 border-[#666270] border-2 rounded-full' >
                  <span className='block w-[5px] my-[6px] h-[9px] border-[#666270] border-2 rounded-full' ></span>
                </span>
                <span className='block text-base text-[#666270]' >Scroll Down</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero