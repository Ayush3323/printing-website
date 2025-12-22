import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import CategoryHero from './Part/Part';
import Sidebar from './Sidebar/Sidebar';
import BusinessEssentials from './Business/Business';
import catalogService from '../../services/catalogService';

function Categories() {
    const { category: categorySlug } = useParams(); // Get category slug from URL
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch all categories to navigate effectively
                // (Optimization: fetch only specific category if we have an endpoint, 
                // but we need sidebars too, so all cats for sidebar or filtered sidebar?)
                // User said: "side bar content change and show the data of the that specific category only"

                const catsData = await catalogService.getCategories();

                // If specific category selected, fetch its products. Otherwise fetch all (or top) products.
                const productParams = categorySlug ? { category: categorySlug } : {};
                const prodsData = await catalogService.getProducts(productParams);

                setCategories(catsData);
                setProducts(prodsData);
                setLoading(false);
            } catch (error) {
                console.error("Error loading categories page:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [categorySlug]); // Re-fetch when slug changes

    // Filter categories for Sidebar based on active selection
    // If on a specific category page, Sidebar shows that category (and its subcategories)
    // If on "View All", it shows all.
    const displayedCategories = categorySlug
        ? categories.filter(c => c.slug === categorySlug)
        : categories;

    // Organize products by Subcategory if on a specific category page
    // This matches the user's "Sections" request.
    const activeCategory = categorySlug ? categories.find(c => c.slug === categorySlug) : null;
    let contentSections = [];

    if (activeCategory) {
        // Group fetched products by subcategory
        const subcategories = activeCategory.subcategories || [];
        contentSections = subcategories.map(sub => {
            // Filter products belonging to this subcategory
            // Ideally backend returns subcategory ID/Slug in product. 
            // Our transformProduct might need to ensure we have subcategory info.
            // Assuming 'subcategory' field in product matches subcategory name or ID.
            // Let's filter by matching subcategory name or id if available.
            // checking product structure: product.subcategory (id) or product.subcategory_name

            // Safe filter:
            const subProducts = products.filter(p => {
                // If product has subcategory ID or Name, try to match
                // We don't have sub ID readily in `transformProduct` output unless we add it. 
                // We added 'attributes', let's check product object from service.
                // Re-check catalogService transform... it returns id, title... 
                // We might need to check if product raw data had subcategory info.
                // Actually, `getProducts` returns transformed products. 
                // The transformed product object doesn't strictly have subcategory ID.
                return true; // Use more robust logic below.
            });

            // Wait, filtering `products` (which is ALL products for this category) by subcategory requires identifying them.
            // Let's just pass ALL products to sections? No, that's messy.
            // Better: filtering logic needs to be robust. 
            // CatalogService `transformProduct` handles `id`, `title`. 
            // Backend `Product` has `subcategory` foreign key.
            // Let's assume we can add `subcategoryName` to transformed product or use the raw data if we modified service.

            // TEMPORARY FIX: Since we lack explicit sub-grouping in transformed object, 
            // and we want valid sections:
            // We will just slice products for demo or if we fix service, use real filter.
            // User wants "Business Essentials", "Packaging" etc which are subcategories.

            return {
                title: sub.name,
                products: products // Placeholder: In real app, filter `p.subcategoryId === sub.id`
            };
        });

        // REFINING: To make this actually generic and working, we need product -> subcategory mapping.
        // I will assume for now we distribute them or show all. 
        // Actually, let's just create generic sections if mapping strictly is hard without service update.
        // User asked for "specific sub category and products".
        // I'll update catalogService to include subcategory info in mapped product.
    } else {
        // View All logic (original generic slices)
        contentSections = [
            { title: "Business Essentials", products: products.slice(0, 4) },
            { title: "Packaging & Branding", products: products.slice(4, 8) },
            { title: "Promotional Products", products: products.slice(8, 12) },
            { title: "More", products: products.slice(12, 16) }
        ];
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Breadcrumb />
            <CategoryHero />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="lg:w-1/4">
                        <Sidebar
                            categories={displayedCategories}
                            showProducts={!!categorySlug} // Show products if specific category selected
                        />
                    </aside>

                    {/* Main Content */}
                    <main className="lg:w-3/4 space-y-12">
                        {activeCategory ? (
                            // Render actual subcategory sections
                            (activeCategory.subcategories || []).map(sub => {
                                // Filter products for this subcategory.
                                // NOTE: This requires `catalogService` to make sure products have `subcategory_name` or `subcategory` ID exposed.
                                // I will assume we update catalogService momentarily.
                                const subProducts = products.filter(p => p.subcategory_name === sub.name || p.subcategory === sub.id); // Try to match by name or ID

                                if (subProducts.length === 0) return null;

                                return (
                                    <section key={sub.id} className="bg-white rounded-2xl shadow-sm p-6">
                                        <BusinessEssentials title={sub.name} products={subProducts} />
                                    </section>
                                );
                            })
                        ) : (
                            // Generic View All sections
                            contentSections.map((section, idx) => (
                                section.products.length > 0 && (
                                    <section key={idx} className="bg-white rounded-2xl shadow-sm p-6">
                                        <BusinessEssentials title={section.title} products={section.products} />
                                    </section>
                                )
                            ))
                        )}

                        {products.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No products found in this category.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Categories;
