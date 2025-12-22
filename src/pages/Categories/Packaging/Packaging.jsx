import React from 'react';

const PackagingNeeds = () => {
  // Packaging images data
  const packagingImages = [
    {
      id: 1,
      title: "Product & Packaging Labels",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/marketing%20Materials/Labels%20and%20Stickers/Product%20and%20Packaging%20Labels/IN_Product-and-Packaging-Labels_Overview",
      alt: "Product and Packaging Labels"
    },
    {
      id: 2,
      title: "QR Code Stickers",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/label%20and%20sticker/QR%20Code%20Sticker%20Revised/IN_QR-Code-Stickers_Overview",
      alt: "QR Code Stickers"
    },
    {
      id: 3,
      title: "Auto Lock Boxes",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Packaging%20Materials/Auto%20Lock%20Boxes/IN_Auto-Lock-Boxes_Overview",
      alt: "Auto Lock Boxes"
    }
   
    
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            For Your Packaging Needs
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Complete packaging solutions for your business. Quality materials for shipping, labeling, and protection.
          </p>
        </div>

        {/* 4-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packagingImages.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="mb-4 w-full">
                <div className="overflow-hidden rounded-lg bg-gray-50 aspect-square flex items-center justify-center">
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x400/cccccc/ffffff?text=${encodeURIComponent(item.title)}`;
                    }}
                  />
                </div>
              </div>

              {/* Item Title */}
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Optional Description Section */}
       
      </div>
    </div>
  );
};

export default PackagingNeeds;