"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

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
  
  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!isSidebarOpen);
    }
  };

  const navItems = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contactMe" },
  ];

  return ( 
    <nav className="sticky top-0 z-50 bg-background-primary border-b border-primary">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/"
            className="flex-shrink-0"
          >
            <span className="text-2xl font-bold text-primary">HR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-secondary hover:text-primary p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {!isSidebarOpen &&(
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isSidebarOpen && isMobile && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
              onClick={toggleSidebar}
            />
            
            {/* Sidebar panel */}
            <div className="relative flex flex-col w-3/4 bg-background-primary border-r border-black ">              
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto ">
                <div className='flex justify-between'>
                <div className="flex-shrink-0 flex items-center px-4">
                  <Link href="/" className="text-2xl font-bold text-primary">
                    HR
                  </Link>
                </div>
                <div className="flex-shrink-0 flex items-center px-4 cursor-pointer" onClick={toggleSidebar}>
                  <FaTimes className="h-6 w-6" />
                </div>
                </div>
                <nav className="mt-8 px-2 space-y-1 ">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.url}
                      className="text-secondary hover:text-primary block pl-3 pr-4 py-2 text-base font-medium w-full text-left transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
