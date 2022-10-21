import React from 'react'
import NavBar from '../../components/NavBar'
import Image from 'next/image'

function Hero() {
  return (
    <div className="px-[135px] pt-10 bg-bg bg-red" >
      <NavBar/>
      <div className='mt-[92px] w-full h-[360px] bg-main-oranges flex flex-row justify-between' >
          <div className='w-[270px] h-[330px] relative' >
            <Image src="/images/home1.png" layout='fill'  />
          </div>
          <div className='w-[270px] h-[330px] relative translate-y-7' >
            <Image src="/images/home2.png" layout='fill'  />
          </div>
          <div className='w-[270px] h-[330px] relative ' >
            <Image src="/images/home3.png" layout='fill'  />
          </div>
          <div className='w-[270px] h-[330px] relative translate-y-7' >
            <Image src="/images/home4.png" layout='fill'  />
          </div>
      </div>
      <div className='mt-[70px] ' >
        <span className='font-semibold text-[110px] leading-[114px] text-main-dark w-[970px]' >
            Home is where <br/> your story begins
        </span>
        <span className='block w-[970px] text-[#666270] text-base font-normal mt-[30px] mb-[50px] ' >
          Building a next-generation collaborative platform to connect renters, homeowners, and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes sense.
        </span>
        <div className='flex justify-between items-center w-[970px]' >
            <div className=' items-center h-[112px] bg-[#fff] rounded-md mb-[110px] flex px-5 py-8 justify-between' >
                <div className='border h-[42px] border-[#D6D4DD] rounded-md px-5 py-1 flex flex-row justify-between items-center' >
                  <input className=' h-full outline-none text-[#666270] ' type="text"/>
                  <span className='relative h-4 w-4 ml-8 ' >
                    <Image src="/images/search.png" layout='fill' objectFit='contain' />
                  </span>
                </div>
                <div className='border h-[42px] ml-5  border-[#D6D4DD] rounded-md px-5 py-1 flex flex-row justify-between items-center' >
                  <input className=' h-full outline-none text-[#666270] ' type="text"/>
                  <span className='relative h-4 w-4 ml-8 ' >
                    <Image src="/images/search.png" layout='fill' objectFit='contain' />
                  </span>
                </div>
                <a className=' w-[167px] ml-5 h-[42px] text-[#fff] text-base font-semibold bg-main-orange flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
                  <span>Find a home</span>
                  <span className='relative h-4 w-4 ml-8 ' >
                    <Image src="/images/arrow_right.png" layout='fill' objectFit='contain' />
                  </span>
                </a>
            </div>
            <a className='flex flex-col items-center cursor-pointer group mb-[110px] w-[98px] h-[76px] ' >
              <span className='flex group-hover:items-end justify-center mb-3  w-6 h-9 border-[#666270] border-2 rounded-full' >
                <span className='block w-[5px] my-[6px] h-[9px] border-[#666270] border-2 rounded-full' ></span>
              </span>
              <span className='block text-base text-[#666270]' >Scroll Down</span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero