import React from 'react'

function Sec2() {
  return (
    <>
    <div id='aboutme' className='h-[90vh] sec2 w-full bg-[#f8f8f8] flex  p-56 py-48 justify-between'>
        <div  className=' py-10 pr-10 sec2a flex flex-col relative  linestyle '>
       
          <h2 className='font-stretch-condensed text-7xl  before:absolute before:top-0 before:left-0 before:w-1/3 before:h-1 before:border-t-4 before:border-[#f8b21c] '> THINGS</h2>
          <h2  className='font-stretch-condensed text-7xl BeachBar-Regular #aboutme '>ABOUT  ME</h2>
        </div>
        <div className='flex flex-col py-10 sec2b w-[50%] '>
           <h2 className='font-bold text-2xl font-stretch-expanded'>Crafting Seamless</h2>
            <h2 className=' text-2xl italic style2'> digital Experiences</h2>
           <p className=' mt-10 mt-10 font-thin font-stretch-semi-expanded '>I’m a full-stack developer passionate about building not just functional but visually stunning, high-performance applications.</p>
           <p className='font-thin font-stretch-semi-expanded md:hidden lg:hidden '>My approach blends clean UI/UX, smooth animations, and AI-driven enhancements to create products that feel intuitive and responsive.</p>
           <p className='font-thin font-stretch-semi-expanded '>Whether it’s web or mobile, I ensure that every project is fast, engaging, and future-ready—because great software is more than just code.</p>

           <div className='mt-10 relative '>

            <h2 className='text-black z-20 flex gap-1 text-2xl font-light font-stretch-condensed relative 
             before:absolute before:top-0 before:left-0 before:w-1/3 before:h-full before:bg-[#f8b21c] before:z-[-1]  '>
             
               MORE ABOUT ME</h2>

           </div>

  
        </div>
     </div>
    </>
  )
}

export default Sec2