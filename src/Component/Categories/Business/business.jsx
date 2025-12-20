import React from 'react';

const BusinessEssentials = () => {
  const products = [
    { 
      id: 1, 
      name: 'Standard Visiting Cards',
      image: 'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/visiting-cards/Standard%20Visiting%20Cards/IN_Standard-Visiting-Cards_Overview'
    },
    { 
      id: 2, 
      name: 'Stationery & Letterheads',
      image: 'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/All%20Product/All%20products/Stationary_Letterhead_Stamps'
    },
    { 
      id: 3, 
      name: 'Flyers & Marketing',
      image: 'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/marketing%20Materials/Flyers/flyers_overview-tab'
    },
    { 
      id: 4, 
      name: 'Clothing & Bags',
      image: 'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/All%20Product/All%20products/Clothing_and_Bags'
    },
  ];

  return (
    <div className="min-h-screen bg-white p-12 font-sans">
      {/* Business Essentials Header */}
      <div className="mb-12">
       <h1 className="text-4xl font-bold text-gray-700 mb-3">Business Essential</h1>
        <div className=""></div>
      </div>

      {/* Products Grid - 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div 
            key={product.id}
            className="group cursor-pointer"
          >
            {/* Image with Border Radius */}
            <div 
              className="h-64 w-full rounded-xl overflow-hidden mb-4 bg-gray-50"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Product Name */}
            <h3 className="text-lg font-medium text-black text-center group-hover:text-gray-700 transition-colors duration-200">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessEssentials;