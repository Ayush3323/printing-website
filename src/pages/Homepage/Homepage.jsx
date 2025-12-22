import React, { useState, useEffect } from 'react';
import './Homepage.css';
import SectionHero from '../../components/Shared/SectionHero';
import ProductCarousel from '../../components/Shared/ProductCarousel';
import Discount from './Discount/Discount';
import {
    heroData,
    heroDataSecondary
} from '../../data/homeData';
import catalogService from '../../services/catalogService';

function Homepage() {
    const [categories, setCategories] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch Categories
                const categoriesData = await catalogService.getCategories();
                // Map to carousel format
                const mappedCategories = categoriesData.map(cat => ({
                    id: cat.id,
                    title: cat.name,
                    img: cat.image || "https://placehold.co/400x400?text=Category",
                    href: `/categories/${cat.slug}` // Assumes routing setup
                }));
                setCategories(mappedCategories);

                // Fetch Featured Products (using as Popular)
                const productsData = await catalogService.getProducts({ featured: true });
                setPopularProducts(productsData);

                // For Recently Viewed, we'll just show some random or latest products for now
                // In a real app, this would be from local storage or user history
                const recentData = await catalogService.getProducts();
                setFeaturedProducts(recentData.slice(0, 8)); // Just take first 8

                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch homepage data", err);
                setError("Failed to load some content. Please try again later.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <SectionHero data={heroData} />

            <ProductCarousel
                title="Explore All Categories"
                items={categories}
                type="category"
            />

            <ProductCarousel
                title="Your Recently Viewed Items"
                items={featuredProducts}
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
