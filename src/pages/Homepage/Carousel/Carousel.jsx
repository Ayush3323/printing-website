import React, { useRef } from 'react';

const items = [
  { title: "Visiting Cards", img: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/IN_Visiting-card_GK-Fashions_Marquee_01_1" },
  { title: "Hoodies & Jackets", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Custom Polo T-shirts", img: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Production/3rd%20Feb%202025/IN_Polo_PrintedT-Shirts_Marquee_01_1" },
  { title: "Calendars & Diaries", img: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Big%20Marquee/IN_Calendar_-Notebooks-and-Diaries_SunlightCoffee_Marquee_01_1", href: "https://www.vistaprint.in/photo-gifts/calendars/desk-calendar" },
  { title: "Custom T-shirts", img: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_800/India%20LOB/NVHP/New%20Home%20Page/Production/3rd%20Feb%202025/IN_Polo_PrintedT-Shirts_Marquee_01_1" },
  { title: "Photo Gifts", img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", href: "https://www.vistaprint.in/photo-gifts" },
  { title: "Labels Stickers & Packaging", img: "https://images.unsplash.com/photo-1629198720835-3c01e78949c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Custom Stationery", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Signs, Posters & Marketing", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Custom Caps", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Custom Drinkware", img: "https://images.unsplash.com/photo-1542553458-79a13aebfda6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const Carousel = () => {
  const scrollRef = useRef(null);
  const scrollAmount = 280; // Matches item width + gap for smooth scrolling

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Explore All Categories</h1>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 text-xl p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 hover:shadow-xl transition-all active:scale-95"
        aria-label="Scroll left"
      >
        ❮
      </button>

      {/* Carousel Container - Hides scrollbar */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden space-x-7 px-4 scroll-smooth" // Changed to overflow-x-hidden
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides scrollbar for Firefox and IE
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 text-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Clickable Area - conditionally wraps with <a> or <div> */}
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-56 h-56 rounded-full overflow-hidden mx-auto mb-3 bg-gray-200 flex items-center justify-center border-4 border-white shadow-md group-hover:shadow-xl transition-shadow">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </a>
              ) : (
                <div>
                  <div className="w-56 h-56 rounded-full overflow-hidden mx-auto mb-3 bg-gray-200 flex items-center justify-center border-4 border-white shadow-md group-hover:shadow-xl transition-shadow">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              )}
              
              {/* Title */}
              <p className="text-base font-semibold text-gray-800 px-2">{item.title}</p>
            </div>
          ))}
        </div>
        
        {/* Gradient fade effects at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 text-xl p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 hover:shadow-xl transition-all active:scale-95"
        aria-label="Scroll right"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;