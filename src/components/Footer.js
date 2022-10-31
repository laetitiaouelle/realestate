import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='' >
        <div className='grid grid-cols-2' >
            <div className='col-span-1' >
                <div className='flex flex-row items-center' >
                    <span className='block h-6 w-6 relative'>
                        <Image src="/images/layer1.png" layout='fill' objectFit='cover' />
                    </span>
                    <span className='block text-2xl font-medium text-main-dark ml-2' >
                        dwelling
                    </span>
                </div>
                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] ' >
                    Building a next-generation collaborative platform to connect renters, homeowners, and agents.
                </span>
                <div className='flex flex-row mt-[21px]' >
                    <div className='border h-[58px]  border-[#D6D4DD] rounded-md px-5 py-1 flex flex-row justify-between items-center' >
                        <input className=' h-full outline-none text-[#666270] bg-bg ' placeholder='Email' type="text"/>
                    </div>
                    <a className=' w-[112px] ml-5 h-[58px] text-[#fff] text-base font-semibold bg-main-orange flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
                        <span>Send</span>
                    </a>
                </div>
            </div>
        </div>
        <span className='block w-full h-[2px] bg-[#CDC9BB] my-[100px] ' >
      </span>
    </div>
  )
}

export default Footer