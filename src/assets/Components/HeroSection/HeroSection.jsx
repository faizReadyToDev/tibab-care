import React from 'react'

function HeroSection() {
  return (
    <>
         <div className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] rounded-3xl w-[85vw] h-[70vh] mx-auto'>
           <div className='p-10 pb-0 flex gap-30'>
                <div className='w-[40vw] mt-20 '>
                    <h1 className='text-5xl font-bold text-yellow-700 mb-5'>Welcome to Tabib Care</h1>
                    <h2 className='text-2xl font-semi-bold mb-5'>Natural Wellness, Timeless Benefits.</h2>
                    <p className="font-semi-bold text-[var(--gray-color)]">Empowering you with high-quality herbal products inspired by Unani, Ayurveda, and nature.</p>
                   <div className='hero-btn'>
                    <button className='bg-yellow-700 cursor-pointer rounded-full px-5 py-3 mt-5 text-white flex '><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span>Shop Now</button>
                   </div>
                
                </div>
                <div className='relative mt-10'>
                   <img className='absolute left-16 top-28 w-[7.5vw] ani-hero' src="img/hero-img.png" alt="" />
                    <img className='w-[40vw] ani-hero-person' src="img/her0-1.png" alt="" />
                </div>

           </div>

        </div>
    
    
    </>
  )
}

export default HeroSection
