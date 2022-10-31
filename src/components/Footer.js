import React from 'react'
import Image from 'next/image'
import {FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-bg' >
        <div className='grid grid-cols-2' >
            <div className='col-span-1' >
                <div className='flex flex-row items-center' >
                    <span className='block h-6 w-6 relative'>
                        <Image src="/images/layer1.png" layout='fill' objectFit='cover' />
                    </span>
                    <span className='block text-[22px]  font-medium text-main-dark ml-2' >
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
            <div className='col-span-1 grid grid-cols-3 ' >
                <div className='col-span-1' >
                    <span className='block text-[22px] font-medium text-main-dark mb-6 ' >
                        Dwelling
                    </span>
                    <ul className=' list-none ' >
                        <li className='group' >
                            <a className=' cursor-pointer group-hover:text-main-orange ' >
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Find my home
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange '>
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Homeowners
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange '>
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Community
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange ' >
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Reviews
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-span-1' >
                    <span className='block text-[22px] font-medium text-main-dark mb-6 ' >
                        Company
                    </span>
                    <ul className=' list-none ' >
                        <li className='group' >
                            <a className=' cursor-pointer group-hover:text-main-orange ' >
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Features
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange '>
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Articles
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange '>
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Press
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange ' >
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Refer
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange ' >
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Career
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange ' >
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    API documentations
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-span-1' >
                    <span className='block text-[22px] font-medium text-main-dark mb-6 ' >
                        Support
                    </span>
                    <ul className=' list-none ' >
                        <li className='group' >
                            <a className=' cursor-pointer group-hover:text-main-orange ' >
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Contact
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange '>
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Privacy
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange '>
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    Terms
                                </span>
                            </a>
                        </li>
                        <li className='group'>
                            <a className=' cursor-pointer group-hover:text-main-orange ' >
                                <span className='block font-normal text-[#666270] text-lg max-w-[350px] mt-[18px] cursor-pointer group-hover:text-main-orange' >
                                    FAQ
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <span className='block w-full h-[2px] bg-[#CDC9BB] mt-[72px] ' ></span>
        <div className='grid grid-cols-2 py-8' >
            <div className='col-span-1 flex flex-row' >
                <a  className='flex items-center justify-center w-9 h-9 rounded-full bg-main-orange mr-[14px] ' >
                    <FaFacebookF color='#fff' />
                </a>   
                <a  className='flex items-center justify-center w-9 h-9 rounded-full bg-main-purple mr-[14px] ' >
                    <FaLinkedinIn color='#fff' />
                </a>   
                <a  className='flex items-center justify-center w-9 h-9 rounded-full bg-main-purple' >
                    <FaTwitter color='#fff' />
                </a>   
            </div>
            <div className='col-span-1 flex flex-row items-end justify-end ' >
                <span className='block text-[#666270] text-base' >
                    Copyright @UIHUT 2022
                </span>
            </div>
        </div>
      
    </div>
  )
}

export default Footer