import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import catalogService from "../../services/catalogService";
import { useShop } from "../../context/ShopContext";

export default function Product() {
  const { slug, productSlug } = useParams();
  const activeSlug = productSlug || slug;

  const { addToCart } = useShop();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");
  const [imageList, setImageList] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        if (!activeSlug) return;

        const data = await catalogService.getProductBySlug(activeSlug);

        if (data) {
          setProduct(data);
          setImageList(data.images && data.images.length > 0 ? data.images : ["https://placehold.co/600x400?text=No+Image"]);
          setActiveImage(data.images && data.images.length > 0 ? data.images[0] : "https://placehold.co/600x400?text=No+Image");

          // Fetch Related Products (same subcategory)
          if (data.subcategory) {
            const related = await catalogService.getProducts({ subcategory: data.subcategory });
            // Filter out current product
            setRelatedProducts(related.filter(p => p.id !== data.id).slice(0, 5));
          } else {
            // Fallback: fetch general products
            const related = await catalogService.getProducts();
            setRelatedProducts(related.filter(p => p.id !== data.id).slice(0, 5));
          }
        }
      } catch (error) {
        console.error("Failed to load product", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [activeSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    navigate('/cart');
  };

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-20">

      {/* 1. HERO SECTION (Breadcrumb + Title + Layout) */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:underline">Home</Link>
          {" > "}
          <Link to={`/categories/${product.subcategory_name}`} className="hover:underline">{product.subcategory_name || 'Category'}</Link>
          {" > "}
          <span className="text-gray-900 font-medium">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: IMAGE GALLERY */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
              <img
                src={activeImage}
                alt={product.title}
                className="w-full h-full object-contain mix-blend-multiply p-8"
              />
            </div>
            {/* Thumbnails */}
            {imageList.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {imageList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden ${activeImage === img ? 'border-blue-600' : 'border-transparent hover:border-gray-200'} transition-all`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: PRODUCT DETAILS */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>

            {/* Rating / Reviews */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-sm">
                {'★'.repeat(Math.round(product.rating?.value || 0))}
                {'☆'.repeat(5 - Math.round(product.rating?.value || 0))}
              </div>
              <a href="#reviews" className="text-sm text-blue-600 hover:underline">
                {product.rating?.count > 0 ? `${product.rating.count} reviews` : 'Be the first to review'}
              </a>
            </div>

            <div className="border-t border-b border-gray-100 py-6 mb-8">
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
                    {product.discount}
                  </span>
                )}
              </div>
            </div>

            {/* Dynamic Attributes (Size, Material, etc.) */}
            {product.attributes && product.attributes.length > 0 && (
              <div className="space-y-6 mb-8">
                {product.attributes.map((attr, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      {attr.display_name || attr.name}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {attr.values.map((val, vIdx) => (
                        <button
                          key={vIdx}
                          className="px-4 py-3 text-sm border-2 rounded-lg hover:border-blue-600 hover:bg-blue-50 focus:border-blue-600 focus:bg-blue-50 transition-all text-gray-700 font-medium"
                        >
                          {val.display_value || val.value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {product.zakeke_product_id ? (
                <Link
                  to={`/zakeke-editor/${product.slug}`}
                  className="flex-1 bg-black text-white text-lg font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-transform active:scale-95 shadow-lg text-center"
                >
                  Personalize with 3D
                </Link>
              ) : (
                <Link
                  to={`/product/${product.slug}/templates`}
                  className="flex-1 bg-black text-white text-lg font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-transform active:scale-95 shadow-lg text-center"
                >
                  Browse Design
                </Link>
              )}
              <button
                onClick={handleAddToCart}
                className="bg-white text-black border-2 border-gray-200 text-lg font-bold py-4 px-8 rounded-full hover:border-black transition-colors"
              >
                Add to Cart
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500 text-center sm:text-left">
              *100% Satisfaction Guaranteed
            </p>
          </div>
        </div>
      </div>

      {/* 2. SPECIFICATIONS / DETAILS SECTION (Placeholder for dynamic data) */}
      <div className="bg-gray-50 py-16 mt-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Product Specs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
            {product.print_specs && product.print_specs.length > 0 ? (
              <div className="space-y-6">
                {product.print_specs.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">{spec.surface} Print Area</h3>
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
                      <div>
                        <dt className="text-xs font-medium text-gray-500 uppercase">Dimensions</dt>
                        <dd className="mt-1 text-sm text-gray-900 font-semibold">{spec.width_mm}mm x {spec.height_mm}mm</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium text-gray-500 uppercase">Safe Zone</dt>
                        <dd className="mt-1 text-sm text-gray-900 font-semibold">{spec.safe_zone_mm}mm</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium text-gray-500 uppercase">Bleed</dt>
                        <dd className="mt-1 text-sm text-gray-900 font-semibold">{spec.bleed_margin_mm}mm</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium text-gray-500 uppercase">DPI (Min)</dt>
                        <dd className="mt-1 text-sm text-gray-900 font-semibold">{spec.min_resolution_dpi || 300}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 bg-white rounded-xl border border-dashed border-gray-300 text-center">
                <p className="text-gray-500 text-sm">Technical specifications are being updated for this product.</p>
              </div>
            )}
          </div>

          {/* Dynamic Description / Overview */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="prose text-gray-600">
              <p>{product.description}</p>
              {/* Placeholder for rich text content */}
              {!product.description && <p className="italic text-gray-400">No description available.</p>}
            </div>
          </div>
        </div>
      </div>

      {/* 3. RELATED PRODUCTS (Dynamic) */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {relatedProducts.map(rel => (
              <Link to={rel.href} key={rel.id} className="group block">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-3">
                  <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">{rel.title}</h3>
                <div className="text-sm font-bold mt-1">{rel.price}</div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No related products found in this category.</p>
        )}
      </div>

      {/* 4. REVIEWS (Dynamic + Static Fallback) */}
      <div id="reviews" className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-4">
            Customer Reviews
            <span className="text-lg font-normal text-gray-500">({product.rating?.count || 0})</span>
          </h2>

          {product.reviews && product.reviews.length > 0 ? (
            <div className="space-y-6">
              {product.reviews.map((rev, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(rev.rating)}
                      {'☆'.repeat(5 - rev.rating)}
                    </div>
                    <span className="text-xs text-gray-400">{new Date(rev.created_at).toLocaleDateString()}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{rev.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{rev.comment}</p>
                  <div className="text-xs text-gray-500 font-medium">{rev.user_name || 'Verified Buyer'}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 mb-4">No reviews yet for this product.</p>
              <button className="text-blue-600 font-medium hover:underline">Be the first to review</button>
            </div>
          )}
        </div>
      </div>

      {/* 5. FAQ (Static - Generic) */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            "How long does shipping take?",
            "Can I upload my own design?",
            "What file formats are accepted?"
          ].map((q, i) => (
            <div key={i} className="group cursor-pointer border rounded-lg p-5 hover:border-black transition-colors flex justify-between items-center">
              <span className="font-medium text-gray-700 group-hover:text-black">{q}</span>
              <span className="text-xl text-gray-300 group-hover:text-black">+</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}