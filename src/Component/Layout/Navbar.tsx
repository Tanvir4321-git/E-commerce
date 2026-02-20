'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navlink from './Navlink';
import Image from 'next/image';
import logo1 from '../../../public/logo.png'



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#B8A5D4]  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image alt='logo' src={logo1} width={80}  />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[#2D5016] text-[18px]">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/allproducts">Allproducts</Navlink>
            <Navlink href="/about">About</Navlink>
            <Navlink href="/contact">Contact Us</Navlink>
          </div>

         

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#2D5016] hover:text-[#1F3D0A] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-[#A5C89E] flex flex-col">
          <Navlink
            href="/"
           
            onClick={() =>  setIsOpen(false)}
          >
            Home
          </Navlink>
          <Navlink
            href="/allproducts"
           
            onClick={() => setIsOpen(false)}
          >
            All products
          </Navlink>
          <Navlink
            href="/about"
            
            onClick={() => setIsOpen(false)}
          >
            About
          </Navlink>
          <Navlink
            href="/contact"
           
            onClick={() => setIsOpen(false)}
          >
            COntact us
          </Navlink>

     
         

        </div>
      </div>
    </nav>
  );
}