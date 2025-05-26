import React, { useState } from 'react'

function ProductsDetail() {
  const [productView, setProductView] = useState("img/hero-img.png")
  const [isImg, setIsImg] = useState(true);
  
  const imgs = [
    "img/hero-img.png",
    "img/productDetail-1.jpg",
    "img/productDetail-2.jpg",
    "img/productDetail-3.jpg",
    "img/productDetail-4.jpg",
    "img/productDetail-5.jpg",
    "img/productDetail-6.jpg",
  ]

  const videos = [
    "img/ProductDetailVideo-1.mp4",
    "img/ProductDetailVideo-2.mp4"
  ]
  
  const onClickHandlerImg = (img) => {
    setProductView(img);
    setIsImg(true);
  }
  const onClickHandlerVideo = (video) => {
    setProductView(video);
    setIsImg(false);
  }
  
  return (



   <>
    <div className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] rounded-3xl w-[85vw] h-[70vh] max-sm:w-[90vw] max-sm:h-auto mx-auto'>
      
      <div className='flex max-sm:block max-sm:p-4'>
        <div className='flex w-[40vw] gap-10 mt-2 justify-center max-sm:w-full max-sm:gap-1'>
          <div className='flex flex-col w-[3vw] ml-10 max-sm:w-[14vw] max-sm:ml-0'>
            {
              imgs.map((img, index) => (
                <img key={index} onClick={() => onClickHandlerImg(img)} className='border p-1.5 cursor-pointer' src={img} alt="" />
              ))
            }{
              videos.map((video, index) => (
                <video  key={index} onClick={() => onClickHandlerVideo(video)} className='border p-1.5 cursor-pointer' src={video} alt="" />
              ))
            }
          
          </div>
          <div>
              <div className='border flex flex-col justify-center items-center px-2 py-4 rounded-md'>
                {
                  isImg ? <img className='h-[55vh] w-[20vw] max-sm:w-[80vw] rounded-md' src={productView} alt="" /> : <video controls autoplay muted loop className='h-[55vh] w-[20vw] rounded-md' src={productView} alt="" />
                }
              </div>
                  <div className='flex justify-between gap-2 mt-4 max-xl:mt-1'>
                    <button className='border py-2 w-[11vw] max-sm:w-full rounded-md flex justify-center gap-1'> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg></span> ADD TO CART</button>
                    <button className='border py-2 w-[11vw] max-sm:w-full rounded-md flex justify-center gap-1'> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></span> BUY NOW</button>
                  </div>
          </div>
        </div>
        <div className='overflow-y-scroll w-[45vw] h-[70vh] p-10 pb-4 pt-5 scroll-container max-sm:w-full max-sm:h-auto max-sm:p-0 max-sm:mt-10'>
                <div className=''> 
                  <div className=''>

                  <p className='text-[var(--gray-color)] '>Tabib Care</p>
                  <h1 className='text-4xl font-bold text-yellow-700 mb-3 max-sm:text-3xl'>Tibb Hair Oil (100ml)</h1>
                  <div className='flex items-center gap-1 w-[4vw] max-sm:w-[15vw] bg-black pl-2 rounded-md'>
                    <p className='text-white'>4.6</p>
                    <img className='w-[1vw] max-sm:w-[5vw]' src="img/rating-star.png" alt="" />
                  </div>
                  <div className='mt-5 flex items-center'>
                    <p className=''><span className='font-semibold text-2xl mr-2'>₹339</span> </p>
                    <div className='flex gap-2'>
                      <span className='text-[var(--gray-color)] '><del>₹349</del></span> <span className='text-green-600 font-semibold'>20% off</span>
                    </div>
                  </div>
                  <p className='text-xs text-red-600 max-sm:text-lg'>
                    Hurry,Only 10 left!
                  </p>
                  </div>
                  <div className='flex gap-20 mt-5 max-sm:gap-5'>
                   <div>
                      <p className='text-[var(--gray-color)] font-semibold mb-5'>Quantity:</p>
                      <p className='text-[var(--gray-color)] font-semibold mb-18'>Highlights:</p>
                      <p className='text-[var(--gray-color)] font-semibold'>Description:</p>
                   </div>
                   <div>
                      <p className='border py-1 w-[4vw] max-xl:w-[5vw] max-sm:w-[20vw] flex justify-center border-[var(--gray-color)] font-semibold mb-2.5 '>100 ml</p>
                      <div className=''>
                        <p className='flex items-center'> <img src="img/dots.png" alt="" /> For Men & Women</p>
                        <p className='flex items-center'> <img src="img/dots.png" alt="" /> Suitable for all hair types</p>
                        <p className='flex items-center'> <img src="img/dots.png" alt="" /> Applied For Nourishment</p>
                        <p className='flex items-center'> <img src="img/dots.png" alt="" /> Sulfate Free</p>
                      </div>
                      <p>Olive Oil, Coconut Oil, Mustard Oil, black Seeds, Fenugreek Seeds, hibiscus flower, curry leaves e.t.c.
                      </p>
                   </div>
                  </div>
                </div>

                <div>
                  <h2 className='text-2xl font-semibold mt-10 border p-4 rounded-t-md'>Specification</h2>
                  <div className=' border border-t-0 p-4'>
                    <h3 className='mb-3'>In the Box</h3>
                    <div className='flex gap-36'>
                      <p className='text-[var(--gray-color)]'>Pack of </p>
                      <span className='text-black'>1</span>
                    </div>
                  </div>
                  <div className='border border-t-0 p-4'>
                    <h3 className='mb-3'>General</h3>
                    <div className='flex gap-25'>
                      <div className=''>
                        <p className='text-[var(--gray-color)] mb-2'>Brand </p>
                        <p className='text-[var(--gray-color)] mb-2'>Model Name </p>
                        <p className='text-[var(--gray-color)]  mb-2'>Ideal For </p>
                        <p className='text-[var(--gray-color)] mb-2'>Applied For</p>
                        <p className='text-[var(--gray-color)] mb-2'>Type</p>
                        <p className='text-[var(--gray-color)] mb-2'>Sulfate Free</p>
                        <p className='text-[var(--gray-color)] mb-2'>Hair Type</p>
                        <p className='text-[var(--gray-color)] mb-2'>Container</p>
                        <p className='text-[var(--gray-color)] mb-2 '>Maximum Shelf Life</p>
                        <p className='text-[var(--gray-color)] mb-13 max-xl:mb-19 max-sm:mb-49'>Composition</p>
                        <p className='text-[var(--gray-color)] mb-2'>Net Quantity</p>
                      </div>
                      <div>
                        <p className='text-black mb-2'>Tabib</p>
                        <p className='text-black mb-2'>Tibb Hair Oil</p>
                        <p className='text-black mb-2'>Men & Women</p>
                        <p className='text-black mb-2'>Nourishment</p>
                        <p className='text-black mb-2'>Hair</p>
                        <p className='text-black mb-2'>Yes</p>
                        <p className='text-black mb-2'>All Hair Types</p>
                        <p className='text-black mb-2'>Bottle</p>
                        <p className='text-black mb-8'>24 Months</p>
                        <p className='text-black mb-2'>Olive Oil, Coconut Oil, Mustard Oil, black Seeds, Fenugreek Seeds, hibiscus flower, curry leaves e.t.c.
                        </p>
                        <p className='text-black mb-2'>100 ml
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=' border border-t-0 p-4 rounded-b-md'>
                    <h3 className='mb-3'>Other Features</h3>
                    <div className='flex gap-33'>
                      <div className='w-[35%]'>
                        <p className='text-[var(--gray-color)]'>For Hair </p>
                      </div>
                      <p className='text-black'>Apply Sufficient amount of Oil on the Tip of your fing
on the scalp and massage it gently about 5-10 minutes Leave it overnight.
</p>
                    </div>
                  </div>
                </div>
        </div>
      </div>



    </div>
   
   </>
  )
}

export default  ProductsDetail;

