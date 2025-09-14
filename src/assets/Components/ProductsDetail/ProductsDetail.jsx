import React, { useState, useRef } from 'react'

function ProductsDetail() {
  const [productView, setProductView] = useState("img/prod-1.jpg")
  const [isImg, setIsImg] = useState(true);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  
  const imgs = [
    "img/prod-1.jpg",
    "img/prod-2.jpg",
    "img/prod-3.jpg",
    "img/prod-4.jpg",
    "img/prod-5.jpg",
    "img/prod-6.jpg",
    
  ]

  // const videos = [
  //   "img/ProductDetailVideo-1.mp4",
  //   "img/ProductDetailVideo-2.mp4"
  // ]
  
  const onClickHandlerImg = (img) => {
    setProductView(img);
    setIsImg(true);
  }
  // const onClickHandlerVideo = (video) => {
  //   setProductView(video);
  //   setIsImg(false);
  // }

  const handleMouseMove = (e) => {
    if (!containerRef.current || !imageRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();
    
    // Cursor position relative to container
    const cursorX = e.clientX - containerRect.left;
    const cursorY = e.clientY - containerRect.top;
    
    // Zoom position as percentage of image
    const zoomX = ((e.clientX - imageRect.left) / imageRect.width) * 100;
    const zoomY = ((e.clientY - imageRect.top) / imageRect.height) * 100;
    
    setCursorPosition({ x: cursorX, y: cursorY });
    setZoomPosition({ x: zoomX, y: zoomY });
  };

  const handleMouseEnter = () => {
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };
  
  return (



   <>
    <div className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] rounded-3xl w-[85vw] h-[70vh] max-sm:w-[90vw] max-sm:h-auto mx-auto'>
      
      <div className='flex max-sm:block max-sm:p-4'>
        <div className='flex w-[40vw] gap-6 mt-2 justify-center max-sm:w-full max-sm:gap-2'>
          <div className='flex flex-col w-[4vw] ml-8 max-sm:w-[16vw] max-sm:ml-0 space-y-3 h-[55vh] overflow-y-auto custom-scrollbar'>
            {
              imgs.map((img, index) => (
                <div key={index} className='relative group'>
                  <img 
                    onClick={() => onClickHandlerImg(img)} 
                    className='cursor-pointer transition-all duration-300 hover:opacity-80 transform hover:scale-105' 
                    src={img} 
                    alt="" 
                  />
                  {productView === img && isImg && (
                    <div className='absolute inset-0 border-2 border-amber-500'></div>
                  )}
                </div>
              ))
            }
            {/* {
              videos.map((video, index) => (
                <div key={index} className='relative group'>
                  <video  
                    onClick={() => onClickHandlerVideo(video)} 
                    className='border-2 border-gray-200 hover:border-amber-400 p-2 cursor-pointer rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105' 
                    src={video} 
                    alt="" 
                  />
                  {productView === video && !isImg && (
                    <div className='absolute inset-0 border-2 border-amber-500 rounded-xl bg-amber-50/20'></div>
                  )}
                </div>
              ))
            } */}
          
          </div>
          <div>
              <div 
                ref={containerRef}
                className='border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white flex flex-col justify-center items-center p-4 rounded-2xl relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300'
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {
                  isImg ? (
                    <div className="relative">
                      <img 
                        ref={imageRef}
                        className='h-[55vh] w-[20vw] max-sm:w-[80vw] rounded-md cursor-crosshair' 
                        src={productView} 
                        alt=""
                      />
                      {isZooming && (
                        <div 
                          className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-md overflow-hidden"
                          style={{
                            clipPath: `circle(80px at ${cursorPosition.x}px ${cursorPosition.y}px)`
                          }}
                        >
                          <img 
                            className='h-[55vh] w-[20vw] max-sm:w-[80vw] rounded-md' 
                            src={productView} 
                            alt=""
                            style={{
                              transform: 'scale(2.5)',
                              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                            }}
                          />
                        </div>
                      )}
                      {isZooming && (
                        <div 
                          className="absolute pointer-events-none border-2 border-white rounded-full shadow-lg"
                          style={{
                            width: '160px',
                            height: '160px',
                            left: `${cursorPosition.x - 80}px`,
                            top: `${cursorPosition.y - 80}px`,
                            boxShadow: '0 0 0 2px rgba(0,0,0,0.3), inset 0 0 0 2px rgba(255,255,255,0.8)'
                          }}
                        />
                      )}
                    </div>
                  ) : (
                    <video controls autoplay muted loop className='h-[55vh] w-[20vw] rounded-md' src={productView} alt="" />
                  )
                }
              </div>
                  <div className='mt-4 max-xl:mt-2'>
                    <button 
                      onClick={() => {
                        const message = "Hi! I'm interested in purchasing Tibb Hair Oil (100ml). Could you please provide more details about the product and pricing?";
                        const phoneNumber = "919891338607";
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className='group bg-yellow-700 hover:bg-yellow-800 cursor-pointer rounded-full px-5 py-3 text-white flex items-center justify-center w-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 hover:-translate-y-1'
                    >
                      <span className='transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                      </span>
                      <span className='ml-2 transition-all duration-300 group-hover:tracking-wider'>Buy Now</span>
                    </button>
                  </div>
          </div>
        </div>
        <div className='overflow-y-scroll w-[45vw] h-[70vh] p-8 pb-4 pt-6 scroll-container max-sm:w-full max-sm:h-auto max-sm:p-4 max-sm:mt-10 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg'>
                <div className='space-y-6'> 
                  <div className='border-b border-gray-200 pb-6'>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='w-2 h-2 bg-amber-500 rounded-full'></div>
                      <p className='text-amber-600 font-medium text-sm uppercase tracking-wide'>Tabib Care</p>
                    </div>
                    <h1 className='text-4xl font-bold text-gray-800 mb-4 leading-tight max-sm:text-3xl'>Tibb Hair Oil</h1>
                    <div className='flex items-center gap-3 mb-4'>
                      <div className='flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1.5 rounded-full shadow-sm'>
                        <p className='text-white font-semibold text-sm'>4.6</p>
                        <img className='w-4 h-4' src="img/rating-star.png" alt="" />
                      </div>
                      <span className='text-gray-500 text-sm'>(2,847 reviews)</span>
                    </div>
                    <div className='flex items-center gap-4 mb-4'>
                      <div className='flex items-center gap-2'>
                        <span className='text-3xl font-bold text-green-600'>₹339</span>
                        <div className='bg-green-100 px-2 py-1 rounded-md'>
                          <span className='text-green-700 font-semibold text-sm'>20% OFF</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-gray-400 line-through text-lg'>₹349</span>
                      <span className='text-sm text-gray-500'>MRP (incl. of all taxes)</span>
                    </div>
                    <div className='mt-4 flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2'>
                      <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div>
                      <p className='text-red-600 font-medium text-sm'>
                        Hurry! Only 10 left in stock
                      </p>
                    </div>
                  </div>
                  <div className='space-y-6'>
                    <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100'>
                      <h3 className='text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                        <div className='w-1 h-6 bg-blue-500 rounded-full'></div>
                        Quantity
                      </h3>
                      <div className='flex gap-2'>
                        <div className='bg-white border-2 border-blue-500 text-blue-600 font-semibold px-4 py-2 rounded-lg shadow-sm'>
                          100 ml
                        </div>
                        <div className='bg-gray-100 border border-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed'>
                          200 ml
                        </div>
                      </div>
                    </div>

                    <div className='bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100'>
                      <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                        <div className='w-1 h-6 bg-green-500 rounded-full'></div>
                        Key Highlights
                      </h3>
                      <div className='grid grid-cols-2 gap-3 max-sm:grid-cols-1'>
                        <div className='flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm'>
                          <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                          <span className='text-gray-700 font-medium'>For Men & Women</span>
                        </div>
                        <div className='flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm'>
                          <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                          <span className='text-gray-700 font-medium'>All Hair Types</span>
                        </div>
                        <div className='flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm'>
                          <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                          <span className='text-gray-700 font-medium'>Hair Nourishment</span>
                        </div>
                        <div className='flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm'>
                          <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                          <span className='text-gray-700 font-medium'>Sulfate Free</span>
                        </div>
                      </div>
                    </div>

                    <div className='bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100'>
                      <h3 className='text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                        <div className='w-1 h-6 bg-amber-500 rounded-full'></div>
                        Natural Ingredients
                      </h3>
                      <p className='text-gray-700 leading-relaxed bg-white rounded-lg p-3 shadow-sm'>
                        Enriched with <span className='font-semibold text-amber-600'>Olive Oil</span>, <span className='font-semibold text-amber-600'>Coconut Oil</span>, <span className='font-semibold text-amber-600'>Mustard Oil</span>, <span className='font-semibold text-amber-600'>Black Seeds</span>, <span className='font-semibold text-amber-600'>Fenugreek Seeds</span>, <span className='font-semibold text-amber-600'>Hibiscus Flower</span>, and <span className='font-semibold text-amber-600'>Curry Leaves</span> for complete hair nourishment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-100 shadow-lg'>
                  <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3'>
                    <div className='w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/>
                      </svg>
                    </div>
                    Product Specifications
                  </h2>
                  
                  <div className='space-y-4'>
                    <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
                      <h3 className='font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                        <div className='w-2 h-2 bg-amber-500 rounded-full'></div>
                        In the Box
                      </h3>
                      <div className='flex justify-between items-center'>
                        <span className='text-gray-600'>Pack of</span>
                        <span className='font-semibold text-gray-800 bg-amber-100 px-3 py-1 rounded-full'>1 Unit</span>
                      </div>
                    </div>

                    <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
                      <h3 className='font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                        <div className='w-2 h-2 bg-amber-500 rounded-full'></div>
                        General Information
                      </h3>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-3'>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Brand</span>
                            <span className='font-medium text-gray-800'>Tabib</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Model Name</span>
                            <span className='font-medium text-gray-800'>Tibb Hair Oil</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Ideal For</span>
                            <span className='font-medium text-gray-800'>Men & Women</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Applied For</span>
                            <span className='font-medium text-gray-800'>Nourishment</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Type</span>
                            <span className='font-medium text-gray-800'>Hair Oil</span>
                          </div>
                        </div>
                        <div className='space-y-3'>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Sulfate Free</span>
                            <span className='font-medium text-green-600'>✓ Yes</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Hair Type</span>
                            <span className='font-medium text-gray-800'>All Types</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Container</span>
                            <span className='font-medium text-gray-800'>Bottle</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Shelf Life</span>
                            <span className='font-medium text-gray-800'>24 Months</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-gray-600'>Net Quantity</span>
                            <span className='font-medium text-gray-800'>100 ml</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
                      <h3 className='font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                        <div className='w-2 h-2 bg-amber-500 rounded-full'></div>
                        How to Use
                      </h3>
                      <div className='bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 border border-amber-100'>
                        <p className='text-gray-700 leading-relaxed'>
                          Apply sufficient amount of oil on fingertips and massage gently on the scalp for 5-10 minutes. 
                          <span className='font-semibold text-amber-600'> Leave it overnight</span> for best results and wash with mild shampoo in the morning.
                        </p>
                      </div>
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

