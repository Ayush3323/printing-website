import React, { useRef } from 'react';

const ProductCarousel = ({ title, items, type = "product", className = "" }) => {
    const scrollRef = useRef(null);
    const scrollAmount = type === "category" ? 280 : 320;

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className={`relative w-full py-12 bg-gray-50/50 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 mb-8 ml-0">
                <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-black pl-4">
                    {title}
                </h2>
            </div>

            <div className="relative group/carousel">
                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-800 p-3 rounded-full shadow-lg z-20 opacity-0 group-hover/carousel:opacity-100 hover:bg-black hover:text-white transition-all duration-300"
                    aria-label="Scroll left"
                >
                    ❮
                </button>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-hidden scroll-smooth w-full px-6 gap-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {items.map((item, index) => (
                        <div
                            key={item.id || index}
                            className={`flex-shrink-0 group cursor-pointer transition-all duration-300 hover:-translate-y-2 ${type === "category" ? "w-64" : "w-56"
                                }`}
                        >
                            {/* Image Container */}
                            <div className={`relative overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300 ${type === "category" ? "rounded-full aspect-square border-4 border-white" : "rounded-xl aspect-square bg-gray-100"
                                }`}>
                                {item.href ? (
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                                        <img
                                            src={item.image || item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={item.image || item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}

                                {item.discount && (
                                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                                        {item.discount}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className={type === "category" ? "text-center" : "text-left"}>
                                <h3 className={`font-bold text-gray-900 line-clamp-2 ${type === "category" ? "text-lg" : "text-sm h-10"}`}>
                                    {item.title}
                                </h3>

                                {type === "product" && (
                                    <div className="mt-2 flex items-baseline gap-2">
                                        <span className="text-lg font-bold text-black">{item.price}</span>
                                        <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-800 p-3 rounded-full shadow-lg z-20 opacity-0 group-hover/carousel:opacity-100 hover:bg-black hover:text-white transition-all duration-300"
                    aria-label="Scroll right"
                >
                    ❯
                </button>

                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none z-10" />
            </div>
        </div>
    );
};

export default ProductCarousel;
