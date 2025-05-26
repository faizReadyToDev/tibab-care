import React from 'react'
import Button from '../Button/Button'
import Review from '../Review/Review'
import { NavLink } from 'react-router-dom'

function HeroSection() {
  return (
    <>
         <div className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] rounded-3xl w-[85vw] max-sm:w-[90vw] h-[70vh] max-sm:h-auto mx-auto'>
           <div className='p-10 pb-0 flex gap-30 max-sm:flex-col-reverse max-sm:p-4 max-sm:gap-8'>
                <div className='w-[40vw] mt-20 max-xl:mt-10 max-sm:w-[85vw] max-sm:mt-0 '>
                    <h1 className='text-5xl font-bold text-yellow-700 mb-5 max-sm:text-3xl'>Welcome to Tabib Care</h1>
                    <h2 className='text-2xl font-semi-bold mb-5 max-sm:text-xl'>Natural Wellness, Timeless Benefits.</h2>
                    <p className="font-semi-bold text-[var(--gray-color)]">Empowering you with high-quality herbal products inspired by Unani, Ayurveda, and nature.</p>
                    <NavLink to={'/products'}>
                    <div className='max-sm:items-center max-sm:flex max-sm:justify-center'>
                    <Button/>
                    </div>
                    </NavLink>
                
                </div>
                <div className='relative mt-10 max-xl:mt-5'>
                   <img className='absolute left-16 top-28 w-[7.5vw] max-sm:w-[15vw] ani-hero max-xl:top-26 max-xl:left-14 max-sm:top-20 max-sm:left-12' src="img/hero-img.png" alt="" />
                    <img className='w-[40vw] max-xl:w-[50vw] ani-hero-person max-sm:w-[90vw] ' src="img/her0-1.png" alt="" />
                </div>

           </div>

        </div>
        <Review/>
    
    
    </>
  )
}

export default HeroSection
