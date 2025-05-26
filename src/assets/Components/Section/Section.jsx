import React from 'react'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import Review from '../Review/Review'
import Footer from '../Footer/Footer'
import ProductsDetail from '../ProductsDetail/ProductsDetail'
import Product from '../Product/Product'
import AboutUs from '../AboutUs/AboutUs'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import PhoneMenu from '../PhoneMenu/PhoneMenu'

function Section() {
  return (
   <>
    <div className=''>
        <div className='bg-black w-[90vw] max-sm:w-[95vw] mx-auto rounded-2xl h-[85vh] mt-[7.5vh] scroll-container max-sm:mt-2 max-sm:h-auto'>
          <BrowserRouter>
          <PhoneMenu/>
          <Header/>
          <Routes>
            <Route path='/' element={<HeroSection/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/product-detail' element={<ProductsDetail/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/review' element={<Review/>}/>
          </Routes>
          </BrowserRouter>
        </div>



    </div>
   
   
   </>
  )
}

export default Section
