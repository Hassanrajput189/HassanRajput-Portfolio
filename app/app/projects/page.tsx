"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

// Projects Data
const projects = [
  {
    image: "/TypingClash.png",
    name: "TypingClash",
    desc: "A real-time typing competition platform where multiple users can compete simultaneously to improve their typing speed and accuracy.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Tailwind CSS"],
    url: "https://github.com/Hassanrajput189/TypingClash.git"
  },
  {
    image: "/PassLOCK.png",
    name: "PassLOCK",
    desc: "A secure password manager that simplifies password storage and management, enabling users to create strong passwords and access credentials through a sleek interface.",
    tech: ["React", "Node.js", "Tailwind CSS", "Local Storage"],
    url: "https://github.com/Hassanrajput189/PassLOCK-Password-Manager.git"
  },
  {
    image: "/CryptoCraft.png",
    name: "CryptoCraft",
    desc: "A web application that implements various cryptography techniques for encrypting and decrypting text messages, providing a secure way to protect sensitive information.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    url: "https://github.com/Hassanrajput189/CryptoCraft.git"
  },
  {
    image: "/iTask.png",
    name: "iTask",
    desc: "A to-do list app with a clean, responsive interface for managing tasks with real-time updates, allowing users to effortlessly add, edit, and delete tasks.",
    tech: ["React", "Node.js", "Tailwind CSS", "Local Storage"],
    url: "https://github.com/Hassanrajput189/iTask-Todo-List-App.git"
  },
  {
    image: "/Spotify_clone.png",
    name: "Spotify Clone",
    desc: "A Spotify clone that enables users to upload, organize, and listen to their favorite tracks, providing a seamless, personalized music experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/Hassanrajput189/Spotify-clone.git"
  }
];

const Page = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);    
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <Navbar />      
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-h2 text-primary font-bold mb-4">
              My Projects
            </h1>
            <p className="text-body-large text-secondary max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development, from full-stack applications to specialized tools.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (            
              <ProjectCard
                key={index}
                onClick={() => setSelectedProject(project)}
                image={project.image}
                name={project.name}
                desc={project.desc}
                tech={project.tech}                
              />
            ))}
          </div>
        </div>        
      </main>
      <Footer />
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Page;


