import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAnglesUp } from "react-icons/fa6";
function Footer() {
  return (
    <>
     <div className='h-12 footer z-40 bg-[#ffff] justify-between flex items-center w-full fixed   footer px-15 pr-19 bottom-0 '>
      
      <h4 className='text-sm-grey  font-thin'>santoshallu1234@gamil.com</h4>
      <h4 className='text-black flex gap-1 justify-center items-center opacity-30 scale-75 font-stretch-condensed'>TO TOP <FaAnglesUp /></h4>
      <div className='flex justify-center items-center gap-6'>
       <h4 className='font-stretch-condensed font-semibold'>COONECT : </h4>
       <h2><FaGithub /></h2>
       <h2><FaInstagram/></h2>
       <h2><FaLinkedinIn /></h2>
       
      </div>
   </div>
    </>
  )
}

export default Footer