import React from 'react';
import './Homepage.css';
import Hero from './Hero/Hero';
import Discount from './Discount/Discount';
import Carousel from './Carousel/Carousel';
import Hero1 from './Hero1/Hero1';

function Homepage() {
    return (
        <div>
            <Hero />
            <Carousel />
            <Hero1 />
            <Discount />
        </div>
    )
}

export default Homepage;