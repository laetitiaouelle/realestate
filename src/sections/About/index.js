import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className="px-[18px] sm:px-[50px] lg:px-[135px] py-[120px] grid grid-cols-2 ">
      <div className=' mr-[130px] xl:mr-[200px]  col-span-2 lg:col-span-1'>
        <div className=' block relative md:w-[470px] md:mx-auto lg:mx-0 lg:w-full h-[350px] w-[250px] mx-auto sm:h-[470px]  rounded-2xl ' >
          <Image src="/images/img1.png" layout='fill' objectFit='cover' className='rounded-2xl' />
          <div className='absolute px-[48px] py-[28px] bg-[#fff] rounded-xl right-[-99px] bottom-12 flex flex-col items-center shad' >
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
      <div className='col-span-2 lg:col-span-1' >
        <span className='block sm:mt-10 lg:mt-0 text-2xl mt-10 md:leading-[70px] sm:text-[2em] xl:text-[3.5em] 2xl:text-[4em] font-semibold text-[#191623] ' >
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