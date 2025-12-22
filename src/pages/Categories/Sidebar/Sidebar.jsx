import React from 'react';

const Sidebar = () => {
  const categories = [
    {
      name: 'Visiting Cards',
      items: [
        'Standard Visiting Cards',
        'Classic Visiting Cards',
        'Rounded Corner Visiting Cards',

      ]
    },
    {
      name: 'Clothing, Caps & Bags',
      items: [
        'Custom Polo T-shirts',
        'Custom T-shirts',
        'Custom Dress Shirts',
        'View all in Clothing & Bags'
      ]
    },
    {
      name: 'Stationery, Letterheads & Notebooks',
      items: [
        'Custom Letterheads',
        'Custom Notebooks',
        'Customised Diaries',
        'Personalised Pens',
        'View all in Stationary'
      ]
    },
    {
      name: 'Signs, Posters & Marketing Materials',
      items: [
        'Flyers And Leaflets',
        'Standees',
        'Posters',
        'Signs, Posters & Marketing Materials'
      ]
    },
    {
      name: 'Labels, Stickers & Packaging',
      items: [
        'Custom Labels',
        'Custom Stickers',
        'Custom Packaging',
        'Labels, Stickers & Packaging'
      ]
    },

    {
      name: 'Home & Gifts',
      items: [
        'Photo Albums',
        'Custom Drinkware',
        'Mugs',
        'Gift Hampers',
        ' Gifts'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-24.5 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg  p-8">


          <div className="space-y-8">
            {categories.map((category, index) => (
              <div key={category.name} className="mb-6">
                {/* Main Category with Black Underline */}
                <div className="mb-3 pb-2 border-b border-black">
                  <h3 className="text-xl font-bold text-black">
                    {category.name}
                  </h3>
                </div>

                {/* Sub-items */}
                {category.items && (
                  <div className="ml-4 space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href="#"
                        className="block px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-all duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}

                {/* For categories without items */}
                {!category.items && (
                  <div className="ml-4 px-4 py-3 text-gray-500 italic">
                    No sub-categories available
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;