import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PhoneMenu from '../PhoneMenu/PhoneMenu';

function Header() {
    const [menuBar, setMenuBar] = useState(false);
  return (
    <>
    {
        menuBar ? <PhoneMenu menuBar={menuBar} setMenuBar={setMenuBar} /> : (
        <div className='w-[90vw] mx-auto max-sm:w-[95vw]'>
            <div className='flex justify-evenly pt-4 items-center px-10 max-sm:justify-between max-sm:px-0 max-sm:pr-4'>
                <div className='flex gap-5'>
                    <div className='mb-1 max-xl:w-[8vw] max-sm:w-[50vw] transform hover:scale-105 transition-transform duration-300'>
                        <img className='w-[10vw] max-sm:w-[50vw] hover:shadow-lg transition-shadow duration-300' src="img/logo.jpg" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-amber-50 to-[#faebd7] rounded-t-4xl px-10 pt-4 pr-130 max-xl:pr-90 max-sm:hidden'>
                        <ul className='flex gap-10 border rounded-full py-3 px-4 items-center justify-center'>
                            <NavLink to={"/"} className='hover:text-amber-600 transition-all duration-300 font-medium hover:scale-105 transform'>
                                <li>Home</li>
                            </NavLink>
                            <NavLink to={"/products"} className='hover:text-amber-600 transition-all duration-300 font-medium hover:scale-105 transform'>
                                <li>Products</li>
                            </NavLink>
                            <NavLink to={"/about"} className='hover:text-amber-600 transition-all duration-300 font-medium hover:scale-105 transform'>
                                <li>About</li>
                            </NavLink>
                            <NavLink to={"/review"} className='hover:text-amber-600 transition-all duration-300 font-medium hover:scale-105 transform'>
                                <li>Review</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <div onClick={() => setMenuBar(true)} className='sm:hidden hover:bg-amber-100 p-2 rounded-xl transition-colors duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FBC02D" className='hover:scale-110 transition-transform duration-300'>
                        <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/>
                    </svg>
                </div>
                <div className='flex gap-5 max-sm:hidden'>
                    <div className='hover:bg-amber-100 p-2 rounded-xl transition-all duration-300 hover:scale-110 transform'>
                        <svg className='max-xl:w-[3vw] hover:text-amber-600 transition-colors duration-300' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6B7280">
                            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    </>
  )
}

export default Header
