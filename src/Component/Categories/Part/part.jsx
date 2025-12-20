import React from 'react';

const Herosection = () => {
  return (
    <div className="  font-sans">
      {/* Hero Section - Full width, no border radius */}
      <div 
        className="relative overflow-hidden w-full"
        style={{ 
          height: '400px', 
          backgroundColor: '#4db0ceff'
        }}
      >
        {/* Left side - Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-1/2 pl-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              View all categories
            </h1>
            <p className="text-xl text-white opacity-90">
              Find high-quality customised products you need.
            </p>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="absolute right-0 top-0 h-full w-1/2">
          <div className="h-full flex items-center justify-end pr-12">
            <div 
              className="overflow-hidden"  // Removed rounded-lg
              style={{ 
                height: '300px',
                width: '500px',
                backgroundImage: 'url(https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_1920/India%20LOB/marquee/For%20Marketing/All-categories2_Marquee_Category-Page_for-marketing)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;