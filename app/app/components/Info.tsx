


"use client";
import React from 'react';

const handleNavigation = (url: string) => {
  if (!url) {
    alert("Invalid URL");
    return;
  }
  window.open(url, "_blank");
};

const handleDownload = (filePath: string) => {
  const link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.split('/').pop() || "download";
  link.click();
};
const Info = () => {
  return (
    
    <div className="flex flex-col xl:flex-row  justify-center items-center gap-10  w-full lg:w-[80vw] mx-auto">
      {/* Image Section */}
      <div id="image" className="lg:w-1/2 flex justify-center w-[80vw]">
        <img
          width={700}
          src="/profile picture.png"
          alt="Profile Picture"
          className="rounded-full hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Description Section */}
      <div id="description" className="lg:w-[60vw] xl:w-1/2 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left px-4">
        <p className="text-5xl text-blue-600 font-bold">
          Full Stack Web Developer
        </p>
        <p className="text-lg text-gray-500">
          Hi, I'm <span className='text-slate-700 font-bold'>Hassan Rajput</span>, a passionate Full Stack Web Developer from Hyderabad, Pakistan. With a strong foundation in modern web technologies, I specialize in building dynamic, responsive, and user-centered applications that deliver seamless experiences across all devices. Proficient in both front-end and back-end development, I have a keen eye for detail and a dedication to clean, efficient code that scales.
        </p>
        {/* Social Icons */}
        <ul id="socials" className="flex justify-start items-center gap-8 mt-4">
          <li
            onClick={() => handleNavigation("https://www.linkedin.com/in/muhammad-hassan-rajput/")}
            className="hover:shadow-2xl rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          >
            <img width={45} src="/linkedin.png" alt="LinkedIn" />
          </li>
          <li
            onClick={() => handleNavigation("https://github.com/Hassanrajput189")}
            className="hover:shadow-2xl rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          >
            <img width={45} src="/github.png" alt="GitHub" />
          </li>
          <li className=" bg-blue-600 cursor-pointer hover:font-bold transition-all text-xl border border-white rounded-full px-2 py-1">
          <button
            onClick={() => handleDownload("/Hassan_Rajput's_resume.pdf")}
            className="text-white flex justify-between items-center"
          >
            <img className="w-8 p-1" src="/resume_image.png" alt="Resume" />
            <span className="px-1 text-lg">Download Resume</span>
          </button>
        </li>

        </ul>
      </div>
    </div>
  );
};

export default Info;
