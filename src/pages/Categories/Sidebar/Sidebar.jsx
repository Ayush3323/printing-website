import React from 'react';

const Sidebar = ({ categories = [], showProducts = false }) => {
  // If showing products (specific category view), we assume 'categories' has only 1 item (the active category)
  // or we render for all passed categories (though usually it's just one).

  // Specific Category View: Header = Subcategory, Items = Products
  if (showProducts && categories.length > 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="p-6 space-y-8">
          {categories.map((category) => (
            <div key={category.id}>
              {/* Optionally hide the main category title since it's on the page hero? 
                        User said: "loads the sub category as a heading"
                        So we iterate subcategories directly. */}
              {category.subcategories && category.subcategories.map((sub) => (
                <div key={sub.id} className="mb-6 last:mb-0 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
                    {sub.name}
                  </h3>
                  <ul className="space-y-2">
                    {(sub.products || []).map((product) => (
                      <li key={product.id}>
                        {/* We use relative path or construct full path? 
                            If we are on /categories/catName/ already, we can use relative, 
                            but safer to use full path if we have the category slug available.
                            Since backend data structure doesn't easily give parent category of *product* object here without looking up,
                            we use the `product.slug` but we need to prepend the current category if we want to stay in that context.
                            The sidebar iterates `categories` -> `subcategories` -> `products`.
                            We can access `category.slug` from the outer loop! 
                        */}
                        <a
                          href={`/categories/${category.slug}/${product.slug}`}
                          className="block px-3 py-1.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200"
                        >
                          {product.name}
                        </a>
                      </li>
                    ))}
                    {(sub.products || []).length === 0 && (
                      <li className="text-xs text-gray-400 italic px-3">No products</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default / View All View: Header = Category, Items = Subcategories
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
      <div className="p-6 space-y-8">
        {categories.map((category) => (
          <div key={category.id} className="group">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
              <a href={`/categories/${category.slug}`}>{category.name}</a>
            </h3>

            {category.subcategories && category.subcategories.length > 0 && (
              <ul className="space-y-1">
                {category.subcategories.map((sub, idx) => (
                  <li key={idx}>
                    <a
                      href={`/categories/${category.slug}?subcategory=${sub.slug}`}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

