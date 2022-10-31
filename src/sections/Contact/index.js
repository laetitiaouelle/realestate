import React from 'react'
import Image from 'next/image'
import Footer from '../../components/Footer'

function Contact() {
  return (
    <div className="px-[135px] bg-bg pt-[150px] ">
      <div className='grid grid-cols-2 h-full' >
        <div className='col-span-1 grid grid-cols-2 gap-7' >
          <div className=' relative w-full max-h-[470px] min-h-[470px] '>
            <Image src="/images/home2.png" layout='fill'/>
          </div>
          <div className=' relative w-full max-h-[470px] min-h-[470px] '>
            <Image src="/images/home4.png" layout='fill'/>
          </div>

        </div>
        <div className='col-span-1 ml-[130px] flex justify-center items-center' >
          <div className=''>
            <span className='block text-[44px] font-semibold text-[#191623] ' >
              Ready to find your dream home?
            </span>
            <span className='block text-[18px] font-normal text-[#191623] mt-5  mb-10' >
              Building a next-generation collaborative platform to connect renters, homeowners, and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes sense.
            </span>
            <div className='flex flex-row' >
              <a className=' mr-6 w-[161px] h-[58px] text-[#fff] text-base font-semibold bg-main-orange flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
                Find Home
              </a>
              <a className=' w-[161px] h-[58px] text-[#fff] text-base font-semibold bg-main-purple flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
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