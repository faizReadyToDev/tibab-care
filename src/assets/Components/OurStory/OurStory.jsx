import React, { useState } from 'react'

const ourStory = [
  {
    phases: "Our Journey Begins",
    data: "In December 2022, I traveled to Dubai and worked there for some time. However, due to the climate and water, I experienced severe hair fall. By October 2023, I had returned to India due to personal reasons, and my scalp had lost a significant amount of hair, especially around the hairline."
  },
  {
     phases: "Interest in Herbal Therapies",
    data: "Before going to Dubai, I had always been interested in herbal medicines and therapies. I would often read about and research herbal treatments. Based on this interest, I thought, why not try to find a solution for my hair fall?"
  },
  {
     phases: "Creating a Hair Oil",
    data: "I tried some commercial products, but they didn't yield the desired results. So, I started experimenting with formulas from books and created a hair oil that proved to be highly effective in controlling my hair fall."
  },
  {
     phases: "Business Idea",
    data: "My friend and business partner, Abdul Qadir Miyan, and I would often discuss potential business ideas. I thought, why not turn my hair oil into a business? We started researching and developing the product further."
  },
  {
     phases: "Researching the Market",
    data: "During my research, I came across several hair oil companies making grand claims, but when I used their products, I didn't experience any significant benefits. However, I noticed that many celebrities were endorsing these products, which made me realize that people are genuinely struggling with hair-related issues. This realization motivated me to share my hair oil with others, as it had proven effective for me."
  },
  {
     phases: "Launching Tibb Hair Oil",
    data: "In February 2024, Abdul Qadir Miyan and I began working on perfecting the formula, and after 10 months of rigorous research, trials, and testing, we launched Tibb Hair Oil on October 11, 2024. The product is based on traditional Tibbi formulas and is a completely herbal product."
  },
  {
     phases: "Remarkable Results",
    data: "During the 10-month research and trial period, we observed astonishing results. The oil not only controlled hair fall but also eliminated dandruff and gradually reversed gray hair. What's more, users reported hair regrowth in areas with thinning hair. Additionally, some users experienced relief from migraines and improved memory due to the oil's nourishing properties."
  },
  {
     phases: "Market Presence",
    data: "Today, Tibb Hair Oil is available in the market and online, and we're delivering it across India. This hair oil is not just a product; it's a complete nourishment for your hair and scalp, providing all the necessary nutrients for healthy hair growth."
  },
]

function OurStory() {
      const [ourStoryData, setOurStoryData] = useState("Our Journey Begins");
  return (
    <>
      <div className='mt-20 p-10 pb-0 pt-0 flex gap-10 justify-center'>
            <div className=' text-black border border-yellow-700 p-4 rounded-md '>
             {ourStory.map((item, index) => (
            <h2
              key={index}
              onClick={() => setOurStoryData(item.phases)}
              className='border p-4 rounded-md bg-black text-white text-center cursor-pointer hover:bg-yellow-900 transition ourstory-heading'
            >
              <span className='ourstory-arrow'>{">"}</span> {item.phases}
            </h2>
          ))}
            </div>
            <div className='w-[40vw]'>
              {
                ourStory.filter((item) => item.phases === ourStoryData).map((item,index) => {
                  return (
                    <>

                      <p key={index} className='mt-10 text-yellow-800 text-justify font-semibold border p-4 rounded-md'>
                        {item.data}
                      </p>
                    </>
                  )
                })
              }

            </div>
          </div>
    </>
  )
}

export default OurStory
