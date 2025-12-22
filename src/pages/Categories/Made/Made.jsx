import React from 'react';

const MadeByYouPage = () => {
  // 7 product images with titles
  const products = [
    {
      id: 1,
      title: "Personalised Photo Album",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Photo%20Gifts/Photo%20Albums/IN_Photo-album_Overview",
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      title: "Custom Engraved Pen",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Pens/Personalised%20Pens/IN_Personalised-Pens_Overview",
      rating: 4.2,
      reviews: 89
    },
    {
      id: 3,
      title: "Personalised Notebook",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Category%20Images/Stationery/Personalised-notebooks_Stationery_Category-image_1x1",
      rating: 4.7,
      reviews: 256
    },
    {
      id: 4,
      title: "2025 Executive Diary",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/All%20Product/Discover%20More/Calendars",
      rating: 4.8,
      reviews: 312
    },
    {
      id: 5,
      title: "Photo Mug",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Photo%20Gifts/Photo%20Mugs/IN_Photo-mug_Overview",
      rating: 4.3,
      reviews: 187
    },
    {
      id: 6,
      title: "Custom T-Shirt",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Apparel/Personalised-Tshirts/IN_Personalised-Tshirt_Overview",
      rating: 4.6,
      reviews: 423
    },
    {
      id: 7,
      title: "Personalised Phone Case",
      url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/Electronics/Phone-Cases/IN_Phone-case_Overview",
      rating: 4.4,
      reviews: 215
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <svg className="w-4 h-4 text-gray-300 fill-current absolute" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-400 fill-current absolute" style={{ clipPath: 'inset(0 50% 0 0)' }} viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        </div>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Made by You
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Customize unique products with your personal touch. Create something truly yours.
          </p>
        </div>

        {/* 4-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="mb-4 w-full">
                <div className="overflow-hidden rounded-lg bg-gray-50 aspect-square flex items-center justify-center">
                  <img
                    src={product.url}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x400/cccccc/ffffff?text=${encodeURIComponent(product.title)}`;
                    }}
                  />
                </div>
              </div>

              {/* Product Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {product.title}
              </h3>

              {/* Rating Section */}
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center mb-1">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-800 font-medium">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-500 text-sm">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Optional: Add to Cart Button (removed per request) */}
              {/* Remove this section if no button is needed */}
            </div>
          ))}
        </div>

        {/* Additional 8th item if needed for even layout */}
        {/* Remove this if you want exactly 7 items */}
        {products.length % 4 !== 0 && (
          <div className="lg:col-span-4 text-center mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-500 italic">
             
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MadeByYouPage;