import React from 'react';

const ImageGrid = () => {
  // Image data - direct image URLs only
  const imageUrls = [
    "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Category%20Images/Men_s-Embroidered-Polo-T-Shirt_Category-image_1x1",
    "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Category%20Images/Men_s-Cotton-T-Shirts_Category-image_1x1",
    "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Category%20Images/Men_s-Casual-Shirts_Category-image_1x1",
    "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Category%20Images/Men_s-Formal-Shirts_Category-image_1x1",
    "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Category%20Images/Men_s-Jeans_Category-image_1x1",
    "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Category%20Images/Men_s-Casual-Trousers_Category-image_1x1",
    "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Category%20Images/Men_s-Shorts_Category-image_1x1"
  ];

  return (
    <div className="min-h-screen bg-white p-1">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Love your new look
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our exclusive collection
          </p>
        </div>

        {/* 4-Column Image Grid - Images Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative group">
              <img
                src={url}
                alt={`Fashion item ${index + 1}`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ImageGrid;