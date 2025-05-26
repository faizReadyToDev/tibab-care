import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "./Slider.css";

function Review() {
    const reviews = [
        {
          name: "Faiz Ur Rehman",
          image: "img/review-1.jpg",
          review: "My hair feels stronger and healthier – no more breakage. Truly a game-changer!"
        },
        {
          name: "Adnan mirza",
          review: "Amazing results – my hair is softer and stronger!"
        },
        {
          name: "Ayush Jain",
          review: "Reduced breakage, increased shine – highly recommended!"
        },
        {
          name: "Ali Raza",
          review: "Feels like a spa treatment for my hair!"
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
        <div className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] w-[85vw] mx-auto p-10 mt-10 rounded-3xl mb-10 max-sm:w-[90vw]'>
            <div className='mb-5'>
                <h2 className='font-semibold text-yellow-700 text-3xl mb-3'>What They Say</h2>
                <h3 className='font-semibold text-[var(--gray-color)] '>Feedback from our lovely customer.</h3>
                </div>
            <div>
                <div className=''>
                  <Swiper 
                  modules={[Navigation, Pagination, Autoplay]}
                //   pagination={{ clickable: true }}
                  autoplay={{ delay: 1500 }}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={slidesPerView}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className=''
                  >

                    {reviews.map((user,index)=>(
                         <SwiperSlide key={index}>
                             <div className='flex flex-col justify-center mt-5 mb-5 w-[25vw] h-[35vh] rounded-3xl p-5 box max-sm:w-[70vw] max-sm:h-auto'>
                            <div className='flex gap-5 items-center mb-3'>
                                <img className='w-[5vw] max-sm:w-[20vw] rounded-full' src="img/review-1.jpg" alt="" />
                                <div>
                                    <h3 className='font-semibold max-sm:text-xl'>{user.name}</h3>
                                    <div className='flex w-[1vw] max-sm:w-[5vw]'>
                                        <img className='' src="img/star.png" alt="" />
                                        <img className='' src="img/star.png" alt="" />
                                        <img className='' src="img/star.png" alt="" />
                                        <img className='' src="img/star.png" alt="" />
                                        <img className='' src="img/star.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-[var(--gray-color)] mb-5 max-sm:text-black max-sm:text-xl'>{user.review}</p>
                                <div className='flex '>
                                    <img className='max-xl:w-[3vw] max-sm:w-[10vw]' src="img/insta.png" alt="" />
                                    <img className='max-xl:w-[3vw] max-sm:w-[10vw]' src="img/mail.png" alt="" />
                                </div>
                            </div>
                        </div>
                         </SwiperSlide>


                    ))

                       
                    }
                  </Swiper>
                       

                            
                       

                       
                        
                    
                       
                        
                </div>
               
              
            </div>

        </div>
   
   
   </>
  )
}

export default Review
