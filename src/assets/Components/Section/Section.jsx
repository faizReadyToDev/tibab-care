import React from 'react'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import Review from '../Review/Review'
import Footer from '../Footer/Footer'
import ProductsDetail from '../ProductsDetail/ProductsDetail'
import Product from '../Product/Product'
import AboutUs from '../AboutUs/AboutUs'

function Section() {
  return (
   <>
    <div className=''>
        <div className='bg-black w-[90vw] mx-auto rounded-2xl h-[85vh] mt-[7.5vh] scroll-container'>
            <Header/>
            <HeroSection/>
            <Review/>
            <Product/>
            <ProductsDetail/>
            {/* <Footer/> */}
            {/* <AboutUs/> */}

            

            
            
            
          


        </div>



    </div>
   
   
   </>
  )
}

export default Section
