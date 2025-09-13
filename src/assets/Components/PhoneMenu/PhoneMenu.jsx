import React from 'react'
import { NavLink } from 'react-router-dom'

function PhoneMenu({menuBar,setMenuBar}) {
   
  return (
    <>
      <div onClick={() => setMenuBar(false)} className={`bg-black h-[100vh] w-[100vw] top-0 left-0 z-50 overflow-y-hidden ${menuBar ? 'fixed' : 'hidden'}`}>
        <div className='flex justify-end pr-10 pt-10'>

        <button >
           <svg className='border rounded-full border-white p-2' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#894b00"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
        </button>
        </div>
        <div className='items-center flex justify-center pt-4 mt-[10vh]'>
            <img className='w-[10vw] max-sm:w-[50vw]' src="img/logo.jpg" alt="" />
        </div>
         <ul className='flex gap-10 rounded-full py-3 px-4 items-center justify-center flex-col text-yellow-800 text-3xl mt-20'>
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
    </>
  )
}

export default PhoneMenu
