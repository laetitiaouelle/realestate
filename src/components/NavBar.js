import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <div className='flex flex-row justify-between' >
        <div className='flex flex-row items-center' >
            <span className='block h-6 w-6 relative'>
                <Image src="/images/layer1.png" layout='fill' objectFit='cover' />
            </span>
            <span className='block text-[22px] font-medium text-main-dark ml-2' >
                dwelling
            </span>
        </div>

        <div className='flex flex-row items-center' >
            <nav className=' lg:block hidden overflow-hidden w-full' >
                <ul className='flex flex-row w-full gap-5 xl:gap-10' >
                    <li className='' >
                        <a className=' text-base font-normal text-main-dark cursor-pointer hover:text-main-orange ' >
                            Home
                        </a>
                    </li>
                    <li className='  ' >
                        <a className=' text-base font-normal text-main-dark cursor-pointer hover:text-main-orange ' >
                        About us
                        </a>
                    </li>
                    <li className=' ' >
                        <a className=' text-base font-normal text-main-dark cursor-pointer hover:text-main-orange ' >
                        Renters
                        </a>
                    </li>
                    <li className=' ' >
                        <a className=' text-base font-normal text-main-dark cursor-pointer hover:text-main-orange ' >
                        Homeowners
                        </a>
                    </li>
                    <li className='' >
                        <a className=' text-base font-normal text-main-dark cursor-pointer hover:text-main-orange ' >
                        Reviews
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </div>
        <div className='flex flex-row items-center' >
            <a className=' cursor-pointer w-[115px] h-[42px] text-[#fff] text-base font-semibold bg-main-orange flex justify-center items-center rounded-md hover:text-main-orange hover:bg-bg hover:border-main-orange hover:border ' >
                Register
            </a>
        </div>
    </div>
  )
}

export default NavBar