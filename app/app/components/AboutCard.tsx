"use client";
import React from 'react';
import { FaCode, FaAward } from 'react-icons/fa';

interface CardProps {
  name: string;
  desc?: string[];
  tech?: string[];
  icon?: 'code' | 'user' | 'award';
}

const AboutCard: React.FC<CardProps> = ({ name, desc, tech, icon = 'user' }) => {
  const getIcon = () => {
    switch (icon) {
      case 'code':
        return <FaCode className="w-6 h-6" />;
      case 'award':
        return <FaAward className="w-6 h-6" />;
      default:        
        return <img                
                width={50}
                height={50}
                src="/profile picture.png"
                alt="HR"                
               />              
    }
  };

  return (
    <section className="bg-background-primary border border-primary rounded-card p-8 shadow-card max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-accent-primary rounded-lg">
          {getIcon()}
        </div>
        <h2 className="text-h3 text-primary font-semibold">
          {name}
        </h2>
      </div>

      {/* Description */}
      {desc && (
        <div className="prose prose-slate max-w-none">
          <p className="text-body-large text-secondary leading-relaxed whitespace-pre-line">
            {desc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </p>
        </div>
      )}

      {/* Technologies/Skills */}
      {tech && tech.length > 0 && (
        <div className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {tech.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center px-4 py-2 bg-accent-subtle text-accent-primary rounded-lg text-body-small font-medium hover:bg-accent-primary hover:text-white transition-colors duration-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutCard;
