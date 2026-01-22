import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaTimes, FaSlidersH, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import ScrollReveal from '../../components/ScrollReveal';
import LottieAnimation from '../../components/LottieAnimation';
import catalogService from '../../services/catalogService';
import './SearchResults.css';

const SearchResults = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [searchTerm, setSearchTerm] = useState(query);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);
    const [error, setError] = useState('');

    // Filter states
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [sortBy, setSortBy] = useState('relevance');
    const [inStock, setInStock] = useState(false);

    useEffect(() => {
        loadInitialData();
    }, []);

    useEffect(() => {
        if (query) {
            setSearchTerm(query);
            performSearch(query);
        }
    }, [query]);

    const loadInitialData = async () => {
        try {
            const [catsData, prodsData] = await Promise.all([
                catalogService.getCategories(),
                catalogService.getProducts()
            ]);
            setCategories(catsData);
            if (query) {
                performSearch(query);
            } else {
                setProducts(prodsData);
                setLoading(false);
            }
        } catch (err) {
            console.error('Error loading data:', err);
            setError('Failed to load data');
            setLoading(false);
        }
    };

    const performSearch = async (searchQuery) => {
        try {
            setLoading(true);
            setError('');
            const data = await catalogService.getProducts({ search: searchQuery });
            setProducts(data);
        } catch (err) {
            console.error('Search error:', err);
            setError('Search failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            setSearchParams({ q: searchTerm.trim() });
            performSearch(searchTerm.trim());
        }
    };

    const handleClearFilters = () => {
        setSelectedCategory('');
        setPriceRange([0, 10000]);
        setInStock(false);
        setSortBy('relevance');
    };

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Category filter
        if (selectedCategory) {
            filtered = filtered.filter(p => 
                p.category?.slug === selectedCategory || 
                p.category?.id?.toString() === selectedCategory
            );
        }

        // Price filter
        filtered = filtered.filter(p => {
            const price = parseFloat(p.base_price || p.price || 0);
            return price >= priceRange[0] && price <= priceRange[1];
        });

        // Stock filter
        if (inStock) {
            filtered = filtered.filter(p => p.in_stock !== false);
        }

        // Sort
        switch (sortBy) {
            case 'price_low':
                filtered.sort((a, b) => (parseFloat(a.base_price || a.price || 0)) - (parseFloat(b.base_price || b.price || 0)));
                break;
            case 'price_high':
                filtered.sort((a, b) => (parseFloat(b.base_price || b.price || 0)) - (parseFloat(a.base_price || a.price || 0)));
                break;
            case 'name_asc':
                filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
                break;
            case 'name_desc':
                filtered.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
                break;
            case 'newest':
                filtered.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
                break;
            default: // relevance - keep original order
                break;
        }

        return filtered;
    }, [products, selectedCategory, priceRange, inStock, sortBy]);

    const activeFiltersCount = useMemo(() => {
        let count = 0;
        if (selectedCategory) count++;
        if (priceRange[0] > 0 || priceRange[1] < 10000) count++;
        if (inStock) count++;
        return count;
    }, [selectedCategory, priceRange, inStock]);

    if (loading && products.length === 0) {
        return (
            <div className="search-results-page">
                <div className="search-container">
                    <div className="loading-container">
                        <LottieAnimation type="loading" width={200} height={200} />
                        <p>Searching for products...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="search-results-page">
            <div className="search-container">
                {/* Search Header */}
                <ScrollReveal direction="down" delay={0.1}>
                    <div className="search-header">
                        <form onSubmit={handleSearch} className="search-form-main">
                            <div className="search-input-wrapper">
                                <FaSearch className="search-icon-input" />
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input-main"
                                />
                                {searchTerm && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearchTerm('');
                                            setSearchParams({});
                                        }}
                                        className="clear-search-btn"
                                    >
                                        <FaTimes />
                                    </button>
                                )}
                                <button type="submit" className="search-submit-btn">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </ScrollReveal>

                {error && (
                    <ScrollReveal direction="fade" delay={0.2}>
                        <div className="error-message">{error}</div>
                    </ScrollReveal>
                )}

                {/* Results Header */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="results-header">
                        <div className="results-count">
                            <h2>
                                {query ? `Search Results for "${query}"` : 'All Products'}
                            </h2>
                            <p>{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found</p>
                        </div>
                        <div className="results-controls">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`filter-toggle-btn ${showFilters ? 'active' : ''}`}
                            >
                                <FaSlidersH />
                                Filters {activeFiltersCount > 0 && <span className="filter-badge">{activeFiltersCount}</span>}
                            </button>
                            <div className="sort-dropdown">
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                    <option value="relevance">Sort by: Relevance</option>
                                    <option value="price_low">Price: Low to High</option>
                                    <option value="price_high">Price: High to Low</option>
                                    <option value="name_asc">Name: A to Z</option>
                                    <option value="name_desc">Name: Z to A</option>
                                    <option value="newest">Newest First</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="results-layout">
                    {/* Filters Sidebar */}
                    <ScrollReveal direction="left" delay={0.3}>
                        <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
                            <div className="filters-header">
                                <h3>Filters</h3>
                                {activeFiltersCount > 0 && (
                                    <button onClick={handleClearFilters} className="clear-filters-btn">
                                        Clear All
                                    </button>
                                )}
                            </div>

                            <div className="filter-section">
                                <h4>Category</h4>
                                <div className="filter-options">
                                    <label className="filter-option">
                                        <input
                                            type="radio"
                                            name="category"
                                            value=""
                                            checked={!selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                        />
                                        <span>All Categories</span>
                                    </label>
                                    {categories.slice(0, 10).map(category => (
                                        <label key={category.id} className="filter-option">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category.slug || category.id}
                                                checked={selectedCategory === (category.slug || category.id.toString())}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                            />
                                            <span>{category.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="filter-section">
                                <h4>Price Range</h4>
                                <div className="price-range-inputs">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([parseFloat(e.target.value) || 0, priceRange[1]])}
                                        min="0"
                                    />
                                    <span>-</span>
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value) || 10000])}
                                        min="0"
                                    />
                                </div>
                                <div className="price-range-display">
                                    ₹{priceRange[0]} - ₹{priceRange[1]}
                                </div>
                            </div>

                            <div className="filter-section">
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={inStock}
                                        onChange={(e) => setInStock(e.target.checked)}
                                    />
                                    <span>In Stock Only</span>
                                </label>
                            </div>
                        </aside>
                    </ScrollReveal>

                    {/* Products Grid */}
                    <div className="products-results">
                        {filteredProducts.length === 0 ? (
                            <ScrollReveal direction="fade" delay={0.3}>
                                <div className="empty-results">
                                    <LottieAnimation type="empty" width={250} height={250} />
                                    <h3>No products found</h3>
                                    <p>
                                        {query 
                                            ? `We couldn't find any products matching "${query}"`
                                            : 'No products match your filters'}
                                    </p>
                                    {activeFiltersCount > 0 && (
                                        <button onClick={handleClearFilters} className="btn-primary">
                                            Clear Filters
                                        </button>
                                    )}
                                </div>
                            </ScrollReveal>
                        ) : (
                            <div className="products-grid">
                                {filteredProducts.map((product, index) => (
                                    <ScrollReveal
                                        key={product.id}
                                        direction="up"
                                        delay={index * 0.05}
                                    >
                                        <ProductCard product={product} />
                                    </ScrollReveal>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductCard = ({ product }) => {
    // Handle both transformed and raw product formats
    const primaryImage = product.image || product.primary_image || 
                        product.images?.[0]?.image || 
                        'https://placehold.co/300x300';
    const productName = product.title || product.name;
    const productSlug = product.slug || product.id;
    const price = parseFloat(product.finalPrice || product.base_price || product.price || 0);
    const comparePrice = product.originalPrice ? parseFloat(product.originalPrice.replace('₹', '')) : 
                        (product.compare_at_price ? parseFloat(product.compare_at_price) : null);
    const inStock = product.in_stock !== false;

    return (
        <Link to={`/product/${productSlug}`} className="product-card-search">
            <div className="product-image-wrapper">
                <img src={primaryImage} alt={productName} />
                {!inStock && (
                    <div className="out-of-stock-badge">Out of Stock</div>
                )}
            </div>
            <div className="product-info-search">
                <h3>{productName}</h3>
                {product.subcategory_name && (
                    <p className="product-category">{product.subcategory_name}</p>
                )}
                <div className="product-price-search">
                    <span className="price-amount">₹{price.toFixed(2)}</span>
                    {comparePrice && comparePrice > price && (
                        <span className="compare-price">
                            ₹{comparePrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default SearchResults;
