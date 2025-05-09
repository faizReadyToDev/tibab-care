import React from 'react'

function HeroSection() {
  return (
    <>
         <div className='bg-gradient-to-r from-amber-50 to-[#faebd7] rounded-3xl w-[85vw] h-[70vh] mx-auto'>
           <div className='p-10 flex gap-40'>
                <div className='w-[40vw] mt-20 '>
                    <h1 className='text-5xl font-bold text-yellow-700 mb-5'>Welcome to Tabib Care</h1>
                    <h2 className='text-2xl font-semi-bold mb-5'>Natural Wellness, Timeless Benefits</h2>
                    <p className="font-semi-bold text-[#aaa0a0]">Empowering you with high-quality herbal products inspired by Unani, Ayurveda, and nature.</p>
                </div>
                <div className=''>
                    {/* <video  autoPlay loop muted  className='ani-hero w-[20vw] rounded-3xl' src="img/Hero-video.mp4"></video> */}
                   <img className='w-[20vw] ani-hero' src="img/hero-img.png" alt="" />
                   <h2 className='text-center text-3xl font-bold text-yellow-700 ani-hero-p'>Tibb Hair Oil</h2>
                </div>

           </div>

        </div>
    
    
    </>
  )
}

export default HeroSection
