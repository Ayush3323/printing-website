import React, { useRef } from 'react';

const RecentlyViewed = () => {
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

  const viewedItems = [
    {
      id: 1,
      title: "Custom Polo T-Shirt",
      price: "₹550.00",
      originalPrice: "₹699.00",
      discount: "21% off",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Production/3rd%20Feb%202025/IN_Polo_PrintedT-Shirts_Marquee_01_1",
      href: "#"
    },
    {
      id: 2,
      title: "Premium Visiting Cards",
      price: "₹100.00",
      originalPrice: "₹150.00",
      discount: "33% off",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/IN_Visiting-card_GK-Fashions_Marquee_01_1",
      href: "#"
    },
    {
      id: 3,
      title: "Desk Calendar 2025",
      price: "₹299.00",
      originalPrice: "₹399.00",
      discount: "25% off",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Big%20Marquee/IN_Calendar_-Notebooks-and-Diaries_SunlightCoffee_Marquee_01_1",
      href: "https://www.vistaprint.in/photo-gifts/calendars/desk-calendar"
    },
    {
      id: 4,
      title: "Winter Hoodie",
      price: "₹850.00",
      originalPrice: "₹199.00",
      discount: "29% off",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "#"
    },
    {
      id: 5,
      title: "Custom Mug Set",
      price: "₹399.00",
      originalPrice: "₹599.00",
      discount: "33% off",
      image: "https://images.unsplash.com/photo-1542553458-79a13aebfda6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "#"
    },
    {
      id: 6,
      title: "Marketing Posters",
      price: "₹249.00",
      originalPrice: "₹349.00",
      discount: "29% off",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "#"
    },
    {
      id: 7,
      title: "Custom Caps",
      price: "₹299.00",
      originalPrice: "₹449.00",
      discount: "33% off",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "#"
    },
    {
      id: 8,
      title: "Photo Frame Gift",
      price: "₹199.00",
      originalPrice: "₹299.00",
      discount: "33% off",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "https://www.vistaprint.in/photo-gifts"
    },
  ];

  return (
    <div className="w-full py-8 bg-white">
      {/* 标题部分 - 居中对齐 */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your recently viewed items</h2>
      </div>

      {/* 全宽度容器，从最左边开始 */}
      <div className="w-full relative">
        {/* 左滚动按钮 */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 text-gray-800 text-xl p-2 rounded-full shadow-md z-10 hover:bg-gray-50 hover:shadow-lg transition-all"
          aria-label="Scroll left"
        >
          ❮
        </button>

        {/* 轮播内容区 - 全宽度，从最左边开始 */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scroll-smooth w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* 第一个项目从最左边开始 */}
          <div className="flex-shrink-0 w-48 ml-4 group cursor-pointer">
            <div className="w-full h-48 mb-3 overflow-hidden bg-gray-100 rounded-lg">
              <a href={viewedItems[0].href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={viewedItems[0].image}
                  alt={viewedItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10 overflow-hidden">
                {viewedItems[0].title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-gray-900">
                  {viewedItems[0].price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {viewedItems[0].originalPrice}
                </span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                  {viewedItems[0].discount}
                </span>
              </div>
            </div>
          </div>

          {/* 其余项目 */}
          {viewedItems.slice(1).map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 ml-5 group cursor-pointer"
            >
              <div className="w-full h-48 mb-3 overflow-hidden bg-gray-100 rounded-lg">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10 overflow-hidden">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {item.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {item.originalPrice}
                  </span>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                    {item.discount}
                  </span>
                </div>
              </div>
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

export default RecentlyViewed;