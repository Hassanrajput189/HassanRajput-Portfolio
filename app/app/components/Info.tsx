"use client";
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';


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
    <section className="flex items-start justify-center bg-background-primary pt-20 px-4 sm:px-6 lg:px-8">
    
      <div className="max-w-content w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                width={280}
                height={280}
                src="/profile picture.png"
                alt="Hassan Rajput - Full Stack Developer"
                className="rounded-2xl object-cover shadow-lg pb-10"
              />              
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-h1 text-primary font-bold mb-4">
              Hassan Rajput
            </h1>

            {/* Role */}
            <h2 className="text-h3 text-accent font-semibold mb-6">
              Full Stack Web Developer
            </h2>

            {/* Description */}
            <p className="text-body-large text-secondary mb-8 max-w-2xl">
              A passionate Full Stack Web Developer from Hyderabad, Pakistan. With a strong foundation in modern web technologies, I specialize in building dynamic, responsive, and user-centered applications that deliver seamless experiences across all devices.
            </p>

            {/* Extended Description */}
            <p className="text-body text-muted mb-8 max-w-2xl">
              Proficient in both front-end and back-end development, I have a keen eye for detail and a dedication to clean, efficient code that scales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => handleDownload("/Hassan_Rajput's_resume.pdf")}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-primary text-white font-medium rounded-button hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
              >
                <FaDownload className="w-4 h-4 mr-2" />
                Download Resume
              </button>
              
              <button
                onClick={() => handleNavigation("/projects")}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-button hover:bg-background-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link
                href="https://www.linkedin.com/in/muhammad-hassan-rajput/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-secondary hover:text-accent-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-full"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/Hassanrajput189"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-secondary hover:text-accent-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-full"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
