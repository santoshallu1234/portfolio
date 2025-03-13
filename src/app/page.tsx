"use client"
import React, { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/button';
import { IoPlayForwardSharp } from "react-icons/io5";
import Image from 'next/image';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridComponent from '@/components/sections/technologies';
import Header from '@/components/sections/header';
import Navbar from '@/components/sections/header';
import profpic from "../assets/profpic.jpg";
import Squares from '@/components/sections/squares';
import gsap from "gsap" ;
import Sec3 from '@/components/sections/sec3';
import Sec2 from '@/components/sections/sec2';
import Footer from '@/components/sections/footer';
import Sec4 from '@/components/sections/sec4';
gsap.registerPlugin(ScrollTrigger);
function page() {

  const variable = useRef(null);

  const MAIN_data_1 = ()=>{
    return(<>
    <div className='h-[90vh] sec1 w-full p-44 lg:p-0 overflow-hidden bg-[#f8b21c] relative'>
      <div className='h-full w-full p-44 md:pl-12 absolute sec1main  pointer-events-none ' >
        
        <h2 className='text-8xl bebas text-white pointer-events-none flex'>
        WEBSITE</h2>
     
        <h2  className=' text-7xl lg:text-8xl bebas text-black  pointer-events-none'>EXPERIENCE MATTERS</h2>
        <p className='ml-44 flex justify-center items-center gap-2 z-30'> <IoPlayForwardSharp /> lets have a talk</p>
      </div>
     
         
        <Image src={profpic}  alt="profile pic" className='h-[50%] opacity-0 profimg w-75 brightness-125 rounded-b-full rounded-t-full z-30 absolute right-10 bottom-45' />

        <div className="absolute inset-0 z-0">
        <Squares squareSize={120} borderColor="#ffffff" speed={0.1} direction="right" />
      </div>
     
     </div>
      <Sec2/>
      
     <div className='h-[10vh] bg-[#f8f8f8] timepass'></div>
      <Sec3/>
     <div className='h-[20vh] lg:h-[10vh] bg-[#f8f8f8] timepass'></div>
     <Sec4/></>)
  }

  useEffect(() => {
    gsap.fromTo(
      ".profimg",
      { opacity: 0, rotateY: 180 }, // Start flipped and hidden
      { opacity: 1, rotateY: 0, duration: 1.5, ease: "power2.out" } // Smooth flip-in animation
    );
   


    const handleMouseMove = (e:any) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;

      gsap.to(".profimg", {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
      });
     

    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  

  return (
    <div className='h-[100vh] w-full overflow-x-hidden  relative ' ref={variable}>
    {/*<div className='h-12 z-20 bg-[#ffff] w-full flex justify-between items-center px-15 fixed'>
     <h1>SA</h1>
    </div>*/}
    <Navbar/>
    

    <div className='h-full w-full px-15 py-10 main '>
     <MAIN_data_1/>
    </div>
    <Footer/>
    </div>

  )
}

export default page
