import React from 'react';
import './Homepage.css';
import SectionHero from '../../components/Shared/SectionHero';
import ProductCarousel from '../../components/Shared/ProductCarousel';
import Discount from './Discount/Discount';
import {
    heroData,
    heroDataSecondary,
    exploreCategories,
    recentlyViewed,
    popularProducts
} from '../../data/homeData';

function Homepage() {
    return (
        <div className="bg-white">
            <SectionHero data={heroData} />

            <ProductCarousel
                title="Explore All Categories"
                items={exploreCategories}
                type="category"
            />

            <ProductCarousel
                title="Your Recently Viewed Items"
                items={recentlyViewed}
                type="product"
            />

            <ProductCarousel
                title="Our Most Popular Products"
                items={popularProducts}
                type="product"
            />

            <SectionHero data={heroDataSecondary} className="py-0" />

            <Discount />
        </div>
    )
}

export default Homepage;