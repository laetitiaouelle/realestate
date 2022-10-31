import React from 'react'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { FiArrowRight } from 'react-icons/fi'


function Property() {
  return (
    <div className="px-[135px] h-screen pt-[130px] mb-[150px] ">
      <div className=' grid grid-cols-3 h-full gap-7' >
        <div className='col-span-1'>
              <div className=' relative w-full h-2/3 '>
                <Image src="/images/home2.png" layout='fill'/>
              </div>
            <div className='flex flex-row justify-between items-center ' >
                <div>
                  <span className='flex flex-row mt-7 mb-2 ' >
                    <span className='block text-[#FD5D11] text-[22px] font-semibold mr-1 ' >
                        $
                    </span>
                    <span className='block text-[#191623] text-[22px] font-semibold ' >
                      49,143
                    </span>
                </span>
                  <span className='text-[#191623] font-semibold text-2xl block ' >
                    Gulshan duplex house
                  </span>
                </div>
                <a className='h-12 w-12 bg-main-purple rounded-full flex justify-center items-center' >
                  <span className='relative h-4 w-4  -rotate-45 ' >
                    <Image src="/images/arrow_right.png" layout='fill' objectFit='contain' />
                  </span>
                </a>
            </div>
        </div>
        <div className='col-span-2'>
          <div className='flex flex-row justify-between items-center mb-[50px] ' >
            <div>
              <span className='flex flex-row mt-7 mb-2 ' >
                <span className='block text-[#E6DDFF] text-[18px] font-normal ' >
                  Building a next-generation collaborative platform to connect renters, homeowners, and agents.
                </span>
            </span>
            </div>
           <div className='flex row' >
            <a className='h-12 w-12 rounded-full flex justify-center items-center mr-7 ' >
              <span className='relative h-4 w-4 -rotate-[135deg] bg-bg flex justify-center items-center' >
                <IconContext.Provider
                  value={{ color: 'blue', size: '24px' }}
                >
                  <div>
                    <FiArrowRight />
                  </div>
                </IconContext.Provider>
              </span>
            </a>
            <a className='h-12 w-12 bg-main-orange rounded-full flex justify-center items-center' >
              <span className='relative h-4 w-4  -rotate-45 ' >
                <Image src="/images/arrow_right.png" layout='fill' objectFit='contain' />
              </span>
            </a>
           </div>
          </div>
          <div className='grid grid-cols-2 gap-7 h-full' >
            <div className=' relative w-full h-2/3  col-span-1'>
              <Image src="/images/p1.png" layout='fill'/>
            </div>
            <div className=' relative w-full h-2/3  col-span-1'>
              <Image src="/images/p2.png" layout='fill'/>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full  flex items-center justify-center ' >
        <a className=' w-[115px] h-[42px] text-[#fff] text-base font-semibold bg-main-orange flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
          All Property
        </a>
      </div>
    </div>
  )
}

export default Property