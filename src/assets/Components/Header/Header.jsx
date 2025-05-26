import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PhoneMenu from '../PhoneMenu/PhoneMenu';

function Header() {
    const [menuBar, setMenuBar] = useState(false);
  return (
    <>
    {
        menuBar ? <PhoneMenu menuBar={menuBar} setMenuBar={setMenuBar} /> : ( <div className=' w-[90vw] mx-auto max-sm:w-[95vw]'>
        <div className='flex justify-evenly  pt-4 items-center px-10 max-sm:justify-between  max-sm:px-0 max-sm:pr-4 '>
                    <div className='flex gap-5'>
                        <div className='mb-1 max-xl:w-[8vw] max-sm:w-[50vw]'>
                            <img className='w-[10vw] max-sm:w-[50vw]' src="img/logo.jpg" alt="" />
                        </div>
                    <div className='bg-gradient-to-r from-amber-50 to-[#faebd7] rounded-t-4xl px-10 pt-4 pr-130 max-xl:pr-90 max-sm:hidden'>
                            <ul className='flex gap-10 border rounded-full py-3 px-4 items-center justify-center'>
                                <NavLink to={"/"}>
                                <li>Home</li>
                                </NavLink>
                                <NavLink to={"/products"}>
                                <li>Products</li>
                                </NavLink>
                                <NavLink to={"/about"}>
                                <li>About</li>
                                </NavLink>
                                <NavLink to={"/review"}>
                                <li>Review</li>
                                </NavLink>
                            </ul>
                    </div>
                    </div>
                <div onClick={() => setMenuBar(true)} className='sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FBC02D"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                </div>
                <div className='flex gap-5 max-sm:hidden'>
                <div className={``}>
                <svg className='max-xl:w-[3vw] ' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                  
                </div>
                <svg className='max-xl:w-[3vw] ' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                </div>
            </div>
    </div>)
    }


    {/* <div className=' w-[90vw] mx-auto max-sm:w-[95vw]'>
        <div className='flex justify-evenly  pt-4 items-center px-10 max-sm:justify-between  max-sm:px-0 max-sm:pr-4 '>
                    <div className='flex gap-5'>
                        <div className='mb-1 max-xl:w-[8vw] max-sm:w-[50vw]'>
                            <img className='w-[10vw] max-sm:w-[50vw]' src="img/logo.jpg" alt="" />
                        </div>
                    <div className='bg-gradient-to-r from-amber-50 to-[#faebd7] rounded-t-4xl px-10 pt-4 pr-130 max-xl:pr-90 max-sm:hidden'>
                            <ul className='flex gap-10 border rounded-full py-3 px-4 items-center justify-center'>
                                <NavLink to={"/"}>
                                <li>Home</li>
                                </NavLink>
                                <NavLink to={"/products"}>
                                <li>Products</li>
                                </NavLink>
                                <NavLink to={"/about"}>
                                <li>About</li>
                                </NavLink>
                                <NavLink to={"/review"}>
                                <li>Review</li>
                                </NavLink>
                            </ul>
                    </div>
                    </div>
                <div onClick={() => setMenuBar(true)} className='sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FBC02D"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                </div>
                <div className='flex gap-5 max-sm:hidden'>
                <div className={``}>
                <svg className='max-xl:w-[3vw] ' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                  
                </div>
                <svg className='max-xl:w-[3vw] ' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                </div>
            </div>
    </div> */}
       
        
       
    
    </>
  )
}

export default Header
