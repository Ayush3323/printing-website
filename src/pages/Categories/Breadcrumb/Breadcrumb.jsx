import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="bg-white p-8 font-sans">
      <div className="flex items-center space-x-2">
        <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
          Home
        </a>
        <span className="text-gray-400">/</span>
        <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
          View All
        </a>
      </div>
    </div>
  );
};

export default Breadcrumb;