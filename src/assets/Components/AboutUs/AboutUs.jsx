import React, { useState, useRef, useEffect } from 'react'
import Founder from '../Founder/Founder'
import Brand from '../Brand/Brand'
import OurStory from '../OurStory/OurStory'





function AboutUs() {

  const [activeTab, setActiveTab] = useState('Founder');

  return (
    <>
        <div className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] rounded-3xl w-[85vw] h-[70vh] mx-auto overflow-scroll scroll-container'>
          <h1 className='text-5xl font-bold text-[rgb(250,235,215)] text-center'>.</h1>
          <div className='bg-yellow-950 h-[5px] relative'>
            <div onClick={() => setActiveTab('Founder')} className={`absolute rounded-full bg-[#fffbea] border-2 h-[30px] w-[30px] -translate-x-1/2 top-1/2 -translate-y-1/2 left-50 max-xl:left-30 ${activeTab === 'Founder' ? 'bg-yellow-950' : 'bg-[#fbedd9]'} `}>
            </div>
            <div className='absolute bg-[#fffbea] -translate-x-1/2 top-10 -translate-y-1/2 left-50 max-xl:left-30 text-yellow-950'>
            Founder's
            </div>
            <div onClick={() => setActiveTab('Brand')} className={`absolute rounded-full bg-[#fcf3e1] border-2 h-[30px] w-[30px]  -translate-x-1/2 top-1/2 -translate-y-1/2 left-165 max-xl:left-130 ${activeTab === 'Brand' ? 'bg-yellow-950' : 'bg-[#fbedd9]'} `}>
            </div>
            <div className='absolute bg-[#fcf3e1]  -translate-x-1/2 top-10 -translate-y-1/2 left-165 max-xl:left-130 text-yellow-950'>
              Brand
            </div>
             
            <div onClick={() => setActiveTab('Our Story')} className={`absolute rounded-full bg-[#fbedd9] border-2 h-[30px] w-[30px] -translate-x-1/2 top-1/2 -translate-y-1/2 left-295 max-xl:left-240  ${activeTab === 'Our Story' ? 'bg-yellow-950' : 'bg-[#fbedd9]'} `}>
            </div>
            <div className='absolute bg-[#fbedd9]  -translate-x-1/2 top-10 -translate-y-1/2 left-295  max-xl:left-240 text-yellow-950'>
              Our Story
            </div>

          </div>
          {activeTab === 'Founder' ? (
              <Founder />
            ) : activeTab === 'Brand' ? (
              <Brand />
            ) : activeTab === 'Our Story' ? (
              <OurStory />
            ) : null}

          

          


        </div>



    </>
  )
}

export default AboutUs
