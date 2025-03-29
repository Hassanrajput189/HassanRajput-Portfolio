


import React from 'react';

interface CardProps {
  name: string;
  image: string;
  desc: string;
  tech: string[];
  onClick?: () => void;
}

const ProjectCard: React.FC<CardProps> = ({ image, desc, tech, name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-between items-center gap-3 bg-gray-200 rounded-2xl w-[80vw] lg:w-1/4 h-[400px] lg:h-[500px] cursor-pointer border border-black hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      {/* Image Section - Takes half of the card height */}
      {image &&(
      <div className="w-full h-1/2 flex justify-center items-center overflow-hidden rounded-t-2xl">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      )}
      {/* Content Section */}
      <div className="flex flex-col justify-evenly items-center gap-2 p-4 w-full h-1/2">
        {/* Name Section */}
        <div className="text-center font-bold text-xl">
          {name}
        </div>

        {/* Description Section */}
        {desc &&(
        <div className="text-center overflow-hidden text-ellipsis">
          <p className="line-clamp-3">{desc}</p>
        </div>
        )}
        {/* Technologies Section */}
        {tech && tech.length > 0 &&(
        <div className="text-center">
          <p className="font-semibold">Technologies:</p>
          <div className="flex justify-center items-center flex-wrap gap-1">
            {tech.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
