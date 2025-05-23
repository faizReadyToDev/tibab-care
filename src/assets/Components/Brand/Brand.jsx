import React from 'react'

function Brand() {
  return (
    <>
      <div className='mt-20 p-10 pt-0 flex gap-10 justify-center items-center'>
           
            <div className='w-[35vw]'>
              <h2 className='text-yellow-800 font-bold text-3xl'>How did we name our brand? 
</h2>
              <p className='font-semibold mt-10 text-justify'>The answer lies in our heritage. 'Tibb' is derived from the Arabic word for 'medicine' or 'cure,' encompassing the ancient wisdom of naturopathy and Tibb e Nabwi. Our brand, Tibb Hair Oil, is rooted in this tradition of holistic wellness.</p>

             

            </div>
             <div className=''>
             <video autoPlay muted loop className='w-[20vw] h-[40vh]' src="img/ProductDetailVideo-2.mp4"></video>
            </div>
          </div>
    </>
  )
}

export default Brand
