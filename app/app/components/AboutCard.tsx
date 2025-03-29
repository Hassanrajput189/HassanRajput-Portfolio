import React from 'react';

interface CardProps {
  name: string;
  desc?: string;
  tech?: string[];
  onClick?: () => void;
}

const AboutCard: React.FC<CardProps> = ({ name, desc, tech, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-5 rounded-2xl w-[90vw] lg:w-[60vw] h-auto cursor-pointer shadow-2xl shadow-gray-300 p-8  transition duration-300 ease-in-out transform hover:scale-105 "
      style={{
        transform: 'perspective(1000px)',
      }}
    >
      {/* Name Section */}
      <h2 className=" font-bold text-3xl text-gray-800 text-center">
        {name}
      </h2>

      {/* Description Section */}
      {desc && (
        <div className="text-lg text-gray-600 whitespace-pre-line">
          {desc}
        </div>
      )}

      {/* Technologies Section */}
        {tech && tech.length > 0 && (
          <div className="text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-md font-medium shadow-sm hover:bg-blue-200 transition duration-300 "
              >
                {/* Working on it */}
                {/* <img width={80} src={item} alt="" />   */}
              {item}</span>
            ))}
          </div>
        )}

    </div>
  );
};


export default AboutCard;
