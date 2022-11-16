import React from 'react'
import Image from 'next/image'
import Footer from '../../components/Footer'

function Contact() {
  return (
    <div className="px-[18px] sm:px-[50px] lg:px-[135px] xl:h-auto bg-bg pt-[150px] ">
      <div className='grid grid-cols-2' >
        <div className=' col-span-2 lg:col-span-1 grid grid-cols-2 gap-7' >
          <div className=' relative w-full max-h-[470px] min-h-[470px] sm:col-span-1  col-span-2  '>
            <Image src="/images/home2.png" layout='fill'objectFit='cover' className='rounded-xl' />
          </div>
          <div className=' relative w-full max-h-[470px] min-h-[470px] sm:col-span-1 col-span-2 '>
            <Image src="/images/home4.png" layout='fill'objectFit='cover' className='rounded-xl' />
          </div>

        </div>
        <div className='col-span-2 lg:col-span-1 mt-10 lg:mt-0 lg:ml-[130px] flex justify-center items-center' >
          <div className=''>
            <span className='block sm:text-[44px] text-3xl mt-10 md:leading-[70px] font-semibold text-[#191623] ' >
              Ready to find your dream home?
            </span>
            <span className='block text-[18px] font-normal text-[#191623] mt-5  mb-10' >
              Building a next-generation collaborative platform to connect renters, homeowners, and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes sense.
            </span>
            <div className='flex flex-col sm:flex-row ' >
              <a className=' cursor-pointer mb-5 sm:mb-0 mr-6 w-[161px] h-[58px] text-[#fff] text-base font-semibold bg-main-orange flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
                Find Home
              </a>
              <a className=' cursor-pointer w-[161px] h-[58px] text-[#fff] text-base font-semibold bg-main-purple flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
                Contact us
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <span className='block w-full h-[2px] bg-[#CDC9BB] my-[100px] ' >
      </span>
      <Footer/>
    </div>
  )
}

export default Contact