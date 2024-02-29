import { useState } from 'react'
import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';





export default function Head1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const handleLinkClick = (url) => {
    
    console.log(`Navigating to: ${url}`);
  };
 
  
  return (
    
    <header class="text-gray-400 bg-gray-900 body-font fixed  w-full z-10 top-0">
      
       
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
     
      <a href='/' class="ml-3 text-xl hover:text-sky-500 duration-500 hover:text-xl">Rizwan Shahid</a>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link
        to={''}
        className="mr-5  duration-500 hover:text-2xl hover:text-sky-500"
        onClick={() => handleLinkClick('#home')}
      >
        HOME
      </Link>
      <Link
       to={'Aboutbanner'}
        className="mr-5  duration-500 hover:text-2xl hover:text-sky-500"
        onClick={(About) => handleLinkClick('')}
      >
        About
      </Link>
      <Link
        to={'Eduction'}
        className="mr-5 duration-500 hover:text-2xl hover:text-sky-500"
        onClick={() => handleLinkClick('#third')}
      >
        Eduction
      </Link>
      <Link
        to={'Skill'}
        className="mr-5  duration-500 hover:text-2xl hover:text-sky-500"
        onClick={() => handleLinkClick('#forth')}
      >
        Skills
      </Link>
      <Link
        to={'Contact'}
        className="mr-5  duration-500 hover:text-2xl hover:text-sky-500"
        onClick={() => handleLinkClick('#fith')}
      >
        Contact
      </Link>
     
    </nav>
    <div class="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3 ">
    
    <p> <a href="https://www.instagram.com/"
        
            class="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i
                class="fa-brands fa-facebook "></i></a> </p>
    <p> <a href="https://github.com/reezouaanshahid?tab=overview&from=2024-01-01&to=2024-01-09"
            class="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i
                class="fa-brands fa-github"></i></a> </p>
    <p> <a href="https://www.linkedin.com/in/rizwan-barcha-5156b6261/"
            class="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i
                class="fa-brands fa-linkedin"></i></a> </p>
    <p> <a href="https://www.facebook.com/login/"
            class="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i
            
                class="fa-brands fa-instagram "></i></a> </p>
</div>
  </div>
</header>
  )
}
