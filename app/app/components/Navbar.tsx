"use client"

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (url: string): void => {
    window.location.href = url;
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!isSidebarOpen);
    }
  };

  return ( 
    <div className="sticky top-0 z-50">
      <div className='flex justify-start items-center'>
        <nav className="bg-blue-600 text-white py-2 px-2 md:flex md:justify-between md:items-center m-5 rounded-full w-fit md:w-full">
          {/* Logo Section */}
          <div id="logo" className="md:pl-6 cursor-pointer md:flex-none" onClick={toggleSidebar}>
            <span className="text-4xl text-black font-bold">HR</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex md:justify-center md:items-center gap-8 mx-9">
            <li onClick={() => handleClick("/")} className="cursor-pointer hover:font-bold transition-all text-xl">Home</li>
            <li onClick={() => handleClick("/projects")} className="cursor-pointer hover:font-bold transition-all text-xl">Projects</li>
            <li onClick={() => handleClick("/about")} className="cursor-pointer hover:font-bold transition-all text-xl">About</li>
            <li onClick={() => handleClick("/contactMe")} className="cursor-pointer hover:font-bold transition-all text-xl">Contact Me</li>
          </ul>

          {/* Sidebar for mobile view */}
          {isSidebarOpen && isMobile && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start z-10">
              <div className="bg-blue-600 p-6 h-full w-1/2 max-w-xs rounded-lg border border-white">
                <button onClick={toggleSidebar} className="text-black text-2xl mb-4">X</button>
                <ul className="flex flex-col gap-6">
                  <li onClick={() => handleClick("/")} className="cursor-pointer hover:font-bold transition-all text-xl">Home</li>
                  <li onClick={() => handleClick("/projects")} className="cursor-pointer hover:font-bold transition-all text-xl">Projects</li>
                  <li onClick={() => handleClick("/about")} className="cursor-pointer hover:font-bold transition-all text-xl">About</li>
                  <li onClick={() => handleClick("/contactMe")} className="cursor-pointer hover:font-bold transition-all text-xl">Contact Me</li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
