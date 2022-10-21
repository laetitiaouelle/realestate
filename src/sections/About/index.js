import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className="px-[135px] py-[120px] grid grid-cols-2 ">
      <div className='mr-[200px] col-span-1'>
        <div className=' block relative w-full h-[470px] rounded-2xl ' >
          <Image src="/images/img1.png" layout='fill' objectFit='cover' className='rounded-2xl' />
          <div className='absolute px-[48px] py-[28px] bg-[#fff] rounded-xl right-[-109px] bottom-12 flex flex-col items-center shad' >
            <span className='block w-[60px] h-[60px] relative mb-3' >
              <Image src="/images/client.png" layout='fill' objectFit='cover' className='rounded-full' />
            </span>
            <span className='block text-lg text-[#191623]' >
              David Warner
            </span>
            <span className='block mt-1 mb-4 text-sm text-[#666270] '  >
              Property Agent
            </span>
            <a className=' w-[115px] h-[42px] text-[#fff] text-base font-semibold bg-main-purple flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
                Message
            </a>
          </div>
        </div>
      </div>
      <div className='col-span-1' >
        <span className='block text-[4em] font-semibold text-[#191623] ' >
         Providing the effective solutions for you
        </span>
        <span className='block text-[18px] font-normal text-[#191623] mt-5  mb-10' >
          Building a next-generation collaborative platform to connect renters, homeowners, and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes sense.
        </span>
        <a className=' w-[196px] h-[42px] text-[#fff] text-base font-semibold bg-main-orange flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
        More About Us
            </a>
      </div>
    </div>
  )
}

export default About