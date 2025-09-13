import React, { useState } from 'react'

const ourStory = [
  {
    phases: "Our Journey Begins",
    data: "In December 2022, I traveled to Dubai and worked there for some time. However, due to the climate and water, I experienced severe hair fall. By October 2023, I had returned to India due to personal reasons, and my scalp had lost a significant amount of hair, especially around the hairline.",
    icon: "🌍"
  },
  {
     phases: "Interest in Herbal Therapies",
    data: "Before going to Dubai, I had always been interested in herbal medicines and therapies. I would often read about and research herbal treatments. Based on this interest, I thought, why not try to find a solution for my hair fall?",
    icon: "🌿"
  },
  {
     phases: "Creating a Hair Oil",
    data: "I tried some commercial products, but they didn't yield the desired results. So, I started experimenting with formulas from books and created a hair oil that proved to be highly effective in controlling my hair fall.",
    icon: "🧪"
  },
  {
     phases: "Business Idea",
    data: "My friend and business partner, Abdul Qadir Miyan, and I would often discuss potential business ideas. I thought, why not turn my hair oil into a business? We started researching and developing the product further.",
    icon: "💡"
  },
  {
     phases: "Researching the Market",
    data: "During my research, I came across several hair oil companies making grand claims, but when I used their products, I didn't experience any significant benefits. However, I noticed that many celebrities were endorsing these products, which made me realize that people are genuinely struggling with hair-related issues. This realization motivated me to share my hair oil with others, as it had proven effective for me.",
    icon: "📊"
  },
  {
     phases: "Launching Tibb Hair Oil",
    data: "In February 2024, Abdul Qadir Miyan and I began working on perfecting the formula, and after 10 months of rigorous research, trials, and testing, we launched Tibb Hair Oil on October 11, 2024. The product is based on traditional Tibbi formulas and is a completely herbal product.",
    icon: "🚀"
  },
  {
     phases: "Remarkable Results",
    data: "During the 10-month research and trial period, we observed astonishing results. The oil not only controlled hair fall but also eliminated dandruff and gradually reversed gray hair. What's more, users reported hair regrowth in areas with thinning hair. Additionally, some users experienced relief from migraines and improved memory due to the oil's nourishing properties.",
    icon: "✨"
  },
  {
     phases: "Market Presence",
    data: "Today, Tibb Hair Oil is available in the market and online, and we're delivering it across India. This hair oil is not just a product; it's a complete nourishment for your hair and scalp, providing all the necessary nutrients for healthy hair growth.",
    icon: "🏆"
  },
]


function OurStory() {
      const [ourStoryData, setOurStoryData] = useState("Our Journey Begins");
  return (
    <>
      <div className='mt-10 bg-gradient-to-r from-amber-50 to-[#faebd7] py-10'>
        <div className='w-[70vw] mx-auto max-sm:w-[90vw]'>
          <div className='flex gap-6 justify-center max-sm:flex-col max-sm:gap-4'>
            {/* Timeline Navigation */}
            <div className='w-[25vw] max-sm:w-full'>
              <div className='bg-white rounded-xl shadow-md border border-amber-200 p-4'>
                <h3 className='text-lg font-bold text-amber-800 mb-4 flex items-center gap-2'>
                  <span className='text-xl'>📖</span>
                  Timeline
                </h3>
                <div className='space-y-2'>
                  {ourStory.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setOurStoryData(item.phases)}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105`}
                    >
                      <div className={`flex items-center gap-2 p-3 rounded-lg border transition-all duration-300 ${
                        ourStoryData === item.phases 
                          ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-600 shadow-md' 
                          : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                      }`}>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                          ourStoryData === item.phases 
                            ? 'bg-white/20' 
                            : 'bg-white'
                        }`}>
                          {item.icon}
                        </div>
                        <div className='flex-1'>
                          <div className={`font-semibold text-xs ${
                            ourStoryData === item.phases ? 'text-white' : 'text-amber-800'
                          }`}>
                            {item.phases}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Display */}
            <div className='w-[40vw] max-sm:w-full'>
              {ourStory.filter((item) => item.phases === ourStoryData).map((item, index) => {
                const currentIndex = ourStory.findIndex(story => story.phases === item.phases);
                return (
                  <div key={index} className='bg-white rounded-xl shadow-md border border-amber-200 overflow-hidden'>
                    {/* Header */}
                    <div className='bg-gradient-to-r from-amber-600 to-yellow-600 p-4 text-white'>
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-lg'>
                          {item.icon}
                        </div>
                        <div>
                          <div className='text-amber-100 text-xs font-medium mb-1'>
                            Chapter {currentIndex + 1} of {ourStory.length}
                          </div>
                          <h2 className='text-lg font-bold'>{item.phases}</h2>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className='w-full bg-white/20 rounded-full h-1.5 mb-1'>
                        <div 
                          className='bg-white h-1.5 rounded-full transition-all duration-1000'
                          style={{ width: `${((currentIndex + 1) / ourStory.length) * 100}%` }}
                        ></div>
                      </div>
                      <div className='text-amber-100 text-xs'>
                        Progress: {currentIndex + 1}/{ourStory.length}
                      </div>
                    </div>

                    {/* Content */}
                    <div className='p-4'>
                      <p className='text-amber-800 leading-relaxed text-sm font-medium'>
                        {item.data}
                      </p>
                      
                      {/* Navigation */}
                      <div className='flex justify-between items-center mt-4 pt-3 border-t border-amber-200'>
                        <button 
                          onClick={() => {
                            const prevIndex = currentIndex > 0 ? currentIndex - 1 : ourStory.length - 1;
                            setOurStoryData(ourStory[prevIndex].phases);
                          }}
                          className='flex items-center gap-1 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-md transition-all duration-300 hover:scale-105 text-xs'
                        >
                          <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
                          </svg>
                          Previous
                        </button>
                        
                        <div className='text-amber-600 text-xs font-medium'>
                          {currentIndex + 1} of {ourStory.length}
                        </div>
                        
                        <button 
                          onClick={() => {
                            const nextIndex = currentIndex < ourStory.length - 1 ? currentIndex + 1 : 0;
                            setOurStoryData(ourStory[nextIndex].phases);
                          }}
                          className='flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-md transition-all duration-300 hover:scale-105 shadow-sm text-xs'
                        >
                          Next
                          <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStory
