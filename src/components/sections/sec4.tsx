import React from 'react'
import GridComponent from './technologies'

function Sec4() {
  return (
    <><div className='w-full flex sec4 px-56 py-24 flex-col h-[90vh] gap-10 bg-[#f8f8f8] '>
    <div className='flex h-20 sec4a w-full justify-between items-center '>
    <div  className='  flex flex-col relative  justify-center  linestyle '>
     
     <h2 className='font-stretch-condensed text-2xl  before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1 before:border-t-4 before:border-[#f8b21c] '> HERE ARE </h2>
     <h2 className=' text-2xl italic style2'> my tech friends</h2> 

    </div>
      <div className='flex justify-center items-center'>
        <h3 className='text-3xl font-light text-gray-600'>Technologies</h3>
      </div>
    </div>
    <GridComponent />
   </div></>
  )
}

export default Sec4