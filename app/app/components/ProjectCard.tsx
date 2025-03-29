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
      className="flex flex-col justify-between items-center gap-3 bg-white rounded-2xl w-[80vw] lg:w-1/4 h-[400px] lg:h-[500px] cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200"
    >
      {/* Image Section - Takes half of the card height */}
      {image && (
        <div className="w-full h-1/2 flex justify-center items-center overflow-hidden rounded-t-2xl relative group">
          <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
              View Details
            </span>
          </div>
        </div>
      )}
      
      {/* Content Section */}
      <div className="flex flex-col justify-between items-center gap-2 p-4 w-full h-1/2">
        {/* Name Section */}
        <div className="text-center">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">{name}</h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Description Section */}
        {desc && (
          <div className="text-center">
            <p className="line-clamp-2 text-gray-600 text-sm leading-relaxed">
              {desc}
            </p>
          </div>
        )}
        
        {/* Technologies Section */}
        {tech && tech.length > 0 && (
          <div className="text-center w-full">
            <p className="font-semibold text-gray-800 mb-2">Technologies:</p>
            <div className="flex justify-center items-center flex-wrap gap-1">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
