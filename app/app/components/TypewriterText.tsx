'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = '', 
  delay = 50 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
};

export default TypewriterText; 