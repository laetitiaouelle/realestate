import React from 'react'
import Image from 'next/image'

function Testimonial() {
  return (
    <div className="px-[18px] sm:px-[50px] lg:px-[135px] bg-[#191623] py-[100px]">
      <div className='grid grid-cols-2' >
        <div className=' col-span-2 sm:col-span-1 mb-10 sm:mb-0' >
            <span className='block font-semibold md:text-[2em] lg:text-3xl xl:text-[54px] text-[#fff] mb-[38px]' data-aos="fade-down" data-aos-duration="1200" >
              What client say
            </span>
            <div className=' flex flex-row w-24 justify-between h-[6px]' data-aos="fade-right" data-aos-duration="1600" >
              <span className='h-[6px] w-6 rounded-[3px] border border-[#fff] ' ></span>
              <span className='h-[6px] w-6 rounded-[3px] bg-main-orange ' ></span>
              <span className='h-[6px] w-6 rounded-[3px] border border-[#fff] ' ></span>
            </div>
        </div>
        <div className='col-span-2 sm:col-span-1' >
          <div>
            <span className='w-7 h-7 relative block ' data-aos="fade-down" data-aos-duration="1200" >
              <Image src="/images/union.png" layout='fill' />
            </span>
          </div>
          <div className=' ml-7 ' data-aos="fade-left" data-aos-duration="1600" >
              <span className='block font-normal text-[#C3BFD0] text-lg ' >
                I love Dwelling! They make it super easy and safe to find a room for rent. Customer service is vary quick and helpful. Highly recommend this platform. Really a great and wonderful platform to find rooms and houses in quick time.
              </span>
              <div className='mt-[22px] flex flex-row item-center ' >
                <span className='block w-16 h-16 relative ' >
                  <Image src="/images/joe.png" layout='fill' />
                </span>
                <div className='ml-[14px]' >
                  <span className='block font-bold text-lg text-[#fff] ' >
                    Joe Root
                  </span>
                  <span className='block font-normal text-[#C3BFD0] text-lg ' >
                    UI/UX designer
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <span className='block w-full h-[2px] bg-[#454153] my-12 ' >
      </span>

      <div className='flex flex-col md:flex-row items-center justify-evenly gap-10 ' data-aos="fade-up" data-aos-duration="1200"  >
        <span className='block relative h-[26px] w-[160px]  ' >
          <Image src="/images/wallet.png" layout='fill' />
        </span>
        <span className='block relative h-[26px] w-[100px]' >
          <Image src="/images/indeed.png" layout='fill' />
        </span>
        <span className='block relative h-[26px] w-[123px]' >
          <Image src="/images/richfood.png" layout='fill' />
        </span>
        <span className='block relative h-[26px] w-[96px]' >
          <Image src="/images/netflix.png" layout='fill' />
        </span>
        <span className='block relative h-[26px] w-[117px]' >
          <Image src="/images/shinetoo.png" layout='fill' />
        </span>
      </div>
    </div>
  )
}

export default Testimonial