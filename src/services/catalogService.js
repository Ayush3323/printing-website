import apiHook from './apiConfig';

const catalogService = {
    // Banners / Hero
    getBanners: async (placement) => {
        try {
            const params = placement ? { placement } : {};
            const response = await apiHook.get('/banners/', { params });
            return response.data;
        } catch (error) {
            console.error('Error fetching banners:', error);
            throw error;
        }
    },

    // Categories
    getCategories: async () => {
        try {
            const response = await apiHook.get('/categories/');
            return response.data.results || response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },

    getCategoryBySlug: async (slug) => {
        try {
            // Since we don't have a direct slug endpoint for single category lookup in the list view without ID,
            // we might need to filter or use a specific endpoint. 
            // For now, let's fetch all and find, or assume the ID is known. 
            // Ideally backend should support lookup by slug.
            // Let's assume we fetch list and find for now as optimization can specific endpoint later.
            const response = await apiHook.get('/categories/');
            const categories = response.data.results || response.data;
            return categories.find(c => c.slug === slug);
        } catch (error) {
            console.error('Error fetching category:', error);
            throw error;
        }
    },

    // Products
    getProducts: async ({ category, subcategory, featured, search } = {}) => {
        try {
            const params = {};
            if (category) params.category = category;
            if (subcategory) params.subcategory = subcategory;
            if (search) params.search = search;

            const response = await apiHook.get('/products/', { params });
            let products = response.data.results || response.data;

            // Filter featured on client side if not supported by backend yet (backend supports it?)
            // Backend ProductViewSet search_fields=['name', 'sku', 'description']
            // We might need to add filter for is_featured in backend or filter here.
            if (featured) {
                products = products.filter(p => p.is_featured);
            }

            return products.map(transformProduct);
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    getProductBySlug: async (slug) => {
        try {
            // Need a way to lookup by slug.
            // The backend default router supports /products/{id}/
            // We might need to add a lookup_field = 'slug' to backend or filter list.
            // Let's rely on filtering list for now to be safe without backend mods,
            // or try to filter? Backend ViewSet doesn't seem to have slug lookup explicitly set on router.
            // Let's try fetching all for now (safe fallback) or using search.
            const response = await apiHook.get('/products/');
            const products = response.data.results || response.data;
            const product = products.find(p => p.slug === slug);
            if (product) return transformProduct(product);
            return null;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    }
};

// Helper: Transform Backend Product -> Frontend Format
const transformProduct = (product) => {
    const primaryImage = product.primary_image || (product.images && product.images.length > 0 ? product.images[0].image : null);

    // Extract additional images
    const galleryImages = product.images ? product.images.map(img => img.image) : [];
    // Combine primary and gallery, ensuring uniqueness if primary is also in gallery
    // (Backend ProductImageSerializer has `is_primary` flag, often `primary_image` on model is just a cache or manually set)
    // Let's just use the `images` list if available, or fallback.
    const allImages = galleryImages.length > 0 ? galleryImages : (primaryImage ? [primaryImage] : []);

    return {
        id: product.id,
        title: product.name,
        slug: product.slug,
        description: product.description,
        price: `₹${product.final_price}`,
        originalPrice: product.is_on_sale && product.base_price > product.final_price
            ? `₹${product.base_price}`
            : null,
        discount: product.is_on_sale && product.discount_value
            ? (product.discount_type === 'percentage' ? `${Math.round(product.discount_value)}% off` : `₹${product.discount_value} off`)
            : null,
        image: primaryImage || "https://placehold.co/600x400?text=No+Image",
        images: allImages, // New Field for Gallery
        img: primaryImage || "https://placehold.co/600x400?text=No+Image", // Compatibility
        href: `/product/${product.slug}`,
        isFeatured: product.is_featured,
        attributes: product.attributes || [],
        subcategory: product.subcategory, // ID
        subcategory_name: product.subcategory_name, // Name
        print_specs: product.print_specs || null,
        reviews: product.reviews || [],
        rating: {
            value: product.average_rating || 0,
            count: product.review_count || 0
        }
    };
};

export default catalogService;
