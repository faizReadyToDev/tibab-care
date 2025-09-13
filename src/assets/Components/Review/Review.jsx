import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Review() {
    const reviews = [
        {
          name: "Faiz Ur Rehman",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
          review: "My hair feels stronger and healthier – no more breakage. Truly a game-changer!",
          rating: 5
        },
        {
          name: "Adnan Mirza",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
          review: "Amazing results – my hair is softer and stronger!",
          rating: 5
        },
        {
          name: "Ayush Jain",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
          review: "Reduced breakage, increased shine – highly recommended!",
          rating: 5
        },
        {
          name: "Ali Raza",
          avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
          review: "Feels like a spa treatment for my hair!",
          rating: 5
        },
      ];
      const [slidesPerView,setSlidesPerView] = useState(3);
      useEffect(() => {
        if(window.innerWidth < 1024){
          setSlidesPerView(1)
        }
      },[window.innerWidth])
  return (
   <>
        <div className='bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 w-[85vw] mx-auto p-12 mt-10 rounded-3xl mb-10 max-sm:w-[90vw] max-sm:p-6 border border-amber-100 shadow-xl'>
            <div className='text-center mb-12 max-sm:mb-8'>
                <h2 className='font-bold text-amber-800 text-4xl mb-4 max-sm:text-3xl'>Customer Reviews</h2>
                <p className='text-amber-700 text-lg font-medium max-sm:text-base'>What our customers say about their experience</p>
                <div className='w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-4 rounded-full'></div>
            </div>
            
            <div>
                <Swiper 
                  modules={[Navigation, Pagination, Autoplay]}
                  pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-amber-400',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-amber-600'
                  }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={24}
                  slidesPerView={slidesPerView}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className='pb-12'
                  >

                    {reviews.map((user,index)=>(
                         <SwiperSlide key={index}>
                             <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 h-auto min-h-[280px] flex flex-col justify-between max-sm:min-h-[320px]'>
                                
                                {/* Header with avatar and name */}
                                <div className='flex items-center gap-4 mb-4'>
                                    <div className='relative'>
                                        <img 
                                            className='w-16 h-16 rounded-full object-cover border-3 border-amber-200 shadow-md max-sm:w-14 max-sm:h-14' 
                                            src={user.avatar} 
                                            alt={user.name}
                                            onError={(e) => {
                                                e.target.src = "img/review-1.jpg";
                                            }}
                                        />
                                        <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center'>
                                            <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='font-semibold text-gray-800 text-lg max-sm:text-base'>{user.name}</h3>
                                        <p className='text-amber-600 text-sm font-medium'>Verified Customer</p>
                                    </div>
                                </div>

                                {/* Star rating */}
                                <div className='flex gap-1 mb-4'>
                                    {[...Array(user.rating)].map((_, i) => (
                                        <svg key={i} className='w-5 h-5 text-amber-400 fill-current' viewBox='0 0 20 20'>
                                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review text */}
                                <div className='flex-1'>
                                    <p className='text-gray-700 leading-relaxed text-base max-sm:text-sm italic'>
                                        "{user.review}"
                                    </p>
                                </div>

                                {/* Bottom decoration */}
                                <div className='mt-4 pt-4 border-t border-amber-100'>
                                    <div className='flex justify-center'>
                                        <div className='w-8 h-1 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full'></div>
                                    </div>
                                </div>
                            </div>
                         </SwiperSlide>
                    ))}
                  </Swiper>
            </div>
        </div>
   
   
   </>
  )
}

export default Review
