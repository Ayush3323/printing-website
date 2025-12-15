import React from 'react';
import './Homepage.css';
import Hero from './Hero/Hero';
import Discount from './Discount/Discount';
import Carousel from './Carousel/Carousel';

function Homepage() {
    return (
        <div>
            <Hero />
            <Carousel />
            <Discount />
        </div>
    )
}

export default Homepage;