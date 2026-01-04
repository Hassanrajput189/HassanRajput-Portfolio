"use client";
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface CardProps {
  name: string;
  image: string;
  desc: string;
  tech: string[];
  url?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<CardProps> = ({ image, desc, tech, name, onClick }) => {  
  return (
    <div 
      className="bg-background-primary border border-primary rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
            
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-44 overflow-hidden bg-background-secondary">
          <img 
            src={image} 
            alt={`${name} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaExternalLinkAlt className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6 flex flex-col items-center">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-h4 text-primary font-semibold mb-2 group-hover:text-accent-primary transition-colors duration-200">
            {name}
          </h3>
          <div className=" h-0.5 bg-accent-primary rounded-full"></div>
        </div>

        
        
        {/* Technologies */}
        {tech && tech.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 text-label font-medium bg-accent-subtle text-accent-primary rounded-full"
                >
                  {item}
                </span>
              ))}
              
            </div>
          </div>
        )}

        {/* Project Link */}
        <div className='relative bottom-0'>
        {onClick && (
          <div className="flex items-center rounded-lg px-3 py-2 w-fit text-accent-primary text-body-small font-medium group-hover:bg-gray-100 group-hover:text-accent-hover transition-colors duration-200 cursor-pointer"
          onClick={onClick}>
            <span >View Project</span>
            <FaExternalLinkAlt className="w-3 h-3 ml-1" />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
