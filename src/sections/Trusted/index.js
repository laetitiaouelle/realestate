import React from 'react'
import Image from 'next/image'

function Trusted() {
  return (
    <div className="px-[135px] py-[150px] h-[650px] bg-main-purple  ">
      
          <div className='grid grid-cols-2'>
            <span className=' col-span-1 block text-[54px] text-[#fff] ' >
              Trusted by the people across the globe
            </span>
            <div className='col-span-1' >
              <span className=' block text-[18px]  ml-[130px] font-normal text-[#fff]  ' >
                Building a next-generation collaborative platform to connect renters, homeowners, and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes sense.
              </span>
              <span className=' block text-[18px]  ml-[130px] text-[#fff] font-normal mt-5 ' >
                No matter what stage of life you’re in, having friends to share experiences with is what it’s all about.
              </span>
            </div>
          </div>
          <div className='flex flex-row  justify-evenly mt-[70px]'>
            <div className='flex flex-col items-center' >
                <div className='flex flex-row items-center' >
                  <span className='block relative w-10 h-10 mr-4' >
                    <Image  src="/images/whaoo.png" layout='fill' objectFit='contain'  />
                  </span>
                  <span className='block text-[#fff] font-semibold text-[54px]' >
                    +20K
                  </span>
                </div>
                <span className='block text-[18px] text-[#fff] font-normal ' >Clients worldwide</span>
            </div>
            <div className='flex flex-col items-center' >
                <div className='flex flex-row items-center' >
                  <span className='block relative w-10 h-10 mr-4' >
                    <Image  src="/images/love.png" layout='fill' objectFit='contain'  />
                  </span>
                  <span className='block text-[#fff] font-semibold text-[54px]' >
                    95.7%
                  </span>
                </div>
                <span className='block text-[18px] text-[#fff] font-normal ' >Satisfied Clients</span>
            </div>
            <div className='flex flex-col items-center' >
                <div className='flex flex-row items-center' >
                  <span className='block relative w-10 h-10 mr-4' >
                    <Image  src="/images/happy.png" layout='fill' objectFit='contain'  />
                  </span>
                  <span className='block text-[#fff] font-semibold text-[54px]' >
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