import React, { useRef } from 'react'
import './Carousel.css'



const items = [
  { title: "Visiting Cards", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "Hoodies & Jackets", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "Custom Polo T-shirts", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "Calendars & Diaries", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "Custom T-shirts", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "Photo Gifts", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "labels stickers and packaging", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "Custom stationary", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "signs,posters,marketing materials", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "Custom Caps", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
  { title: "Custom Drink ware", img: "https://static.zara.net/assets/public/de8a/bcae/217c47019588/d4edf3455490/03166330706-p/03166330706-p.jpg?ts=1761121517281&w=1024" },
];

const Carousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    
    <div className="carousel-wrapper">
      {/* Left Button */}
      <h1 className='Head' >Explore All Categories</h1>
      <button className="nav-btn left" onClick={() => scroll("left")}>
        ❮
      </button>

      {/* Scroll Area */}
      <div className="carousel" ref={scrollRef}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <div className="circle">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button className="nav-btn right" onClick={() => scroll("right")}>
        ❯
      </button>
    </div>
  );
};



export default Carousel;
