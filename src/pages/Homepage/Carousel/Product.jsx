import React, { useRef } from 'react';

const PopularProducts = () => {
  const scrollRef = useRef(null);
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const popularProducts = [
    {
      id: 1,
      name: "Custom Polo T-Shirt",
      price: "₹550.00",
      badge: "Buy 1 at ₹550",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Production/3rd%20Feb%202025/IN_Polo_PrintedT-Shirts_Marquee_01_1",
    },
    {
      id: 2,
      name: "Premium Visiting Cards",
      price: "₹100.00",
      badge: "Buy 1 at ₹100",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/IN_Visiting-card_GK-Fashions_Marquee_01_1",
    },
    {
      id: 3,
      name: "Desk Calendar 2025",
      price: "₹299.00",
      badge: "Buy 1 at ₹299",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Big%20Marquee/IN_Calendar_-Notebooks-and-Diaries_SunlightCoffee_Marquee_01_1",
    },
    {
      id: 4,
      name: "Winter Hoodie",
      price: "₹850.00",
      badge: "Buy 1 at ₹850",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Custom Mug Set",
      price: "₹399.00",
      badge: "Buy 1 at ₹399",
      image: "https://images.unsplash.com/photo-1542553458-79a13aebfda6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Marketing Posters",
      price: "₹249.00",
      badge: "Buy 1 at ₹249",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Custom Caps",
      price: "₹299.00",
      badge: "Buy 1 at ₹299",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Photo Frame Gift",
      price: "₹199.00",
      badge: "Buy 1 at ₹199",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Custom T-Shirts",
      price: "₹450.00",
      badge: "Buy 1 at ₹450",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Production/3rd%20Feb%202025/IN_Polo_PrintedT-Shirts_Marquee_01_1",
    },
    {
      id: 10,
      name: "Notebooks & Diaries",
      price: "₹160.00",
      badge: "Buy 1 at ₹160",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Big%20Marquee/IN_Calendar_-Notebooks-and-Diaries_SunlightCoffee_Marquee_01_1",
    },
  ];

  return (
    <div className="w-full py-8 bg-white">
      {/* 标题部分 */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Our Most Popular Products</h2>
      </div>

      {/* 全宽度容器 */}
      <div className="w-full relative">
        {/* 左滚动按钮 */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 text-gray-800 text-xl p-2 rounded-full shadow-md z-10 hover:bg-gray-50 hover:shadow-lg transition-all"
          aria-label="Scroll left"
        >
          ❮
        </button>

        {/* 轮播内容区 - 全宽度 */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scroll-smooth w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* 第一个产品从最左边开始 */}
          <div className="flex-shrink-0 w-64 ml-4">
            <div className="relative w-full h-64 mb-3 overflow-hidden bg-gray-100 rounded-lg">
              <img
                src={popularProducts[0].image}
                alt={popularProducts[0].name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
              />
              {/* Badge - Buy 1 at */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                {popularProducts[0].badge}
              </div>
            </div>
            {/* 产品名称 */}
            <h3 className="text-sm font-medium text-gray-900 text-center">
              {popularProducts[0].name}
            </h3>
          </div>

          {/* 其余产品 */}
          {popularProducts.slice(1).map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 ml-5"
            >
              <div className="relative w-full h-64 mb-3 overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                {/* Badge - Buy 1 at */}
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.badge}
                </div>
              </div>
              {/* 产品名称 */}
              <h3 className="text-sm font-medium text-gray-900 text-center">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* 右滚动按钮 */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 text-gray-800 text-xl p-2 rounded-full shadow-md z-10 hover:bg-gray-50 hover:shadow-lg transition-all"
          aria-label="Scroll right"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;