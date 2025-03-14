"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    

      <div className="h-14 z-40 bg-white  w-full flex justify-between items-center px-6 md:px-12 fixed top-0">
        {/* Logo */}
        <Link href="/" className="text-xl pt-3 font-bold flex justify-center items-center">
        <h2 className=' text-2xl italic style2'>Santosh Allu </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#aboutme" className="text-gray-700 hover:text-black">
            About Me
          </Link>
          <Link href="#target-section" scroll={false} className="text-gray-700 hover:text-black">
            Skills
          </Link>
          <Link href="#projects" className="text-gray-700 hover:text-black">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-14 right-0 w-2/3 bg-white shadow-md flex flex-col p-6 space-y-4 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <Link href="#aboutme" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
            About Me
          </Link>
          <Link href="#skills" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          {/*<Link href="#projects" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
            Projects
          </Link>*/}
          <Link href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>

  );
}
