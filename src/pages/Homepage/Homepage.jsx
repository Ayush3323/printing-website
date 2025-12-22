import React from 'react';
import './Homepage.css';
import Hero from './Hero/Hero';
import Discount from './Discount/Discount';
import Carousel from './Carousel/Carousel';
import RecentlyViewed from './Carousel/Carousel1';
import PopularProducts from './Carousel/Product';
import Hero1 from './Hero/Hero1';

function Homepage() {
    return (
        <div>
            <Hero />
            <Carousel />
            <RecentlyViewed />
            <PopularProducts />
            <Hero1 />
            <Discount />
        </div>
    )
}

export default Homepage;