import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-1 text-sm bg-gray-200">
      <div className="flex flex-col items-center">
        <span className="text-gray-800">© {new Date().getFullYear()} Muhammad Hassan Rajput. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">Created with</span>
          <span className="text-red-500">❤️</span>
          <span className="text-gray-800">by Hassan Rajput</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;