"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const handleNavigation = (url:string) => {
  if (!url) {
    alert("invalid URL");
    return;
  }
  window.open(url);
};

// Projects Data
const projects = [
  {
    image: "/iTask.png",
    name: "iTask",
    desc: "This to-do list app offers a clean, responsive interface for managing tasks with real-time updates, allowing users to effortlessly add, edit, and delete tasks.",
    tech: ["React", "Node", "Next"],
    url: "https://github.com/Hassanrajput189/iTask-Todo-List-App.git"
  },
  {
    image: "/PassLOCK.png",
    name: "PassLOCK",
    desc: "PassLOCK is a secure password manager that simplifies password storage and management, enabling users to create strong passwords and access credentials through a sleek interface",
    tech: ["React", "Node", "Next"],
    url: "https://github.com/Hassanrajput189/PassLOCK-Password-Manager.git"
  },
  {
    image: "/Spotify_clone.png",
    name: "Spotify Clone",
    desc: "This Spotify clone enables users to upload, organize, and listen to their favorite tracks, providing a seamless, personalized music experience for efficient music library management.",
    tech: ["React", "Node", "Next"],
    url: "https://github.com/Hassanrajput189/Spotify-clone.git"
  },
];

const Page = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">My Projects</h1>
        <div className="flex flex-col flex-wrap justify-center items-center gap-20 lg:flex-row my-6">
          {projects.map((project, index) => (
            <Card
              onClick={() => setSelectedProject(project)}
              key={index}
              image={project.image}
              name={project.name}
              desc={project.desc}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
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


