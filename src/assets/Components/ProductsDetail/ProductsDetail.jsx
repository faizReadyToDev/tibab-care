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
    <div className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] rounded-3xl w-[85vw] h-[70vh] mx-auto'>
      
      <div className='flex '>
        <div className='flex w-[40vw] gap-10 mt-2 justify-center'>
          <div className='flex flex-col w-[3vw] ml-10'>
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
                  isImg ? <img className='h-[55vh] w-[20vw] rounded-md' src={productView} alt="" /> : <video controls autoplay muted loop className='h-[55vh] w-[20vw] rounded-md' src={productView} alt="" />
                }
              </div>
                  <div className='flex justify-between gap-2 mt-4'>
                    <button className='border py-2 w-[11vw] rounded-md flex justify-center gap-1'> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg></span> ADD TO CART</button>
                    <button className='border py-2 w-[11vw] rounded-md flex justify-center gap-1'> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></span> BUY NOW</button>
                  </div>
          </div>
        </div>
        <div className='border overflow-y-scroll w-[50vw]'>

        </div>
      </div>



    </div>
   
   </>
  )
}

export default  ProductsDetail;

