import React from 'react'
import webpageimg from "../../assets/User-Experience-Design.svg";
import clickimg from "../../assets/usability-testing.svg";
import heartpenimg from "../../assets/visual-design.svg";
import reactimg from "../../assets/Research-and-Strategy.svg";
import Image from 'next/image';
function Sec3() {
  return (
    <>
    <div className='h-[40vh]  w-full pl-56 flex sec3 bg-[#f8f8f8]'>

<div  className=' sec3a py-10 pr-10 w-[30%] flex flex-col relative justify-center  linestyle '>

<h2 className='font-stretch-condensed text-7xl  before:absolute before:top-0 before:left-0 before:w-1/4 before:h-1 before:border-t-4 before:border-[#f8b21c] '> WHAT </h2>
<h2  className='font-stretch-condensed text-7xl BeachBar-Regular  '>I DO</h2>
</div>
<div className='flex sec3b justify-between gap-15 items-center py-10 px-60 ml-[-15%] w-[85%] bg-[#f8b21c] '>
     <div className='flex flex-col  items-center'>
       <Image src={reactimg}  alt="react " />
       <h2>Android</h2>
       <h2>Development</h2> 
      
     </div>
     <div className='flex flex-col  items-center'>
       <Image src={clickimg}  alt="react " />
       <h2>Frontend</h2>
       <h2>Development</h2> 
      
     </div>
     <div className='flex flex-col  items-center'>
       <Image src={webpageimg}  alt="react " />
       <h2>Backend</h2>
       <h2>Development</h2> 
      
     </div>
     <div className='flex flex-col  items-center'>
       <Image src={heartpenimg}  alt="react " />
       <h2>Agent</h2>
       <h2>Development</h2> 
      
     </div>
     
  </div>

</div>
    </>
  )
}

export default Sec3