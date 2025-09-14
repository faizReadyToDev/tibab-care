import React from 'react'
import { NavLink } from 'react-router-dom'

function Product() {
  return (
    <>
        <div className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] rounded-3xl w-[85vw] h-[70vh] mx-auto p-10 pt-5 mb-10 max-sm:w-[90vw] max-sm:h-auto max-sm:flex max-sm:justify-center max-sm:items-center'>
            <div className='border border-slate-300 w-[15vw] max-sm:w-[70vw] max-sm:h-auto flex flex-col sm:justify-center p-4 bg-black rounded-md'>
        <NavLink to={'/product-detail'}>
                <img className='h-[35vh] max-xl:h-[25vh] max-xl:w-[20vw] max-sm:w-[65vw] max-sm:h-[40vh] bg-white rounded-md mb-2' src="img/prod-1.jpg" alt="" />
                <h1 className='font-bold text-yellow-700 mb-1 max-sm:text-2xl'>Tibb Hair Oil (100ml)</h1>
                <p className='text-[var(--gray-color)] mb-1 max-sm:text-xl'>100ml</p>
                <div className='flex items-center gap-1 w-[4vw] max-sm:w-[15vw] bg-black border border-white pl-2 rounded-md'>
                    <p className='text-white '>4.6</p>
                    <img className='w-[1vw] max-sm:w-[5vw]' src="img/rating-star.png" alt="" />
                </div>
                <div className='mt-1 flex items-center max-sm:text-xl'>
                    <p className=''><span className='font-semibold mr-2 text-white'>₹339</span> </p>
                    <div className='flex gap-2'>
                      <span className='text-[var(--gray-color)] '><del>₹349</del></span> <span className='text-green-600 font-semibold'>20% off</span>
                    </div>
                </div>
                <p className='text-xs text-green-600 max-sm:text-lg'>
                    Buy 2 items, save extra 20%
                </p>
              
                <div className='flex'>
                    <button 
                      onClick={() => {
                        const message = "Hi! I'm interested in purchasing Tibb Hair Oil (100ml). Could you please provide more details about the product and pricing?";
                        const phoneNumber = "919891338607";
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className='border py-2 rounded-md flex justify-center bg-white w-[15vw] mt-2 gap-2 text-yellow-700 font-bold max-sm:w-full max-sm:px-4 hover:bg-yellow-50 transition-colors duration-300'
                    > 
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#a16207">
                          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                        </svg>
                      </span> 
                      BUY NOW
                    </button>
                </div>
                  </NavLink>
            </div>
        </div>
    </>
  )
}

export default Product
