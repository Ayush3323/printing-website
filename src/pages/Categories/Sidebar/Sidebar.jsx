import React from 'react';
import { categorySidebar } from '../../../data/categoriesData';

const Sidebar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
      <div className="p-6 space-y-8">
        {categorySidebar.map((category) => (
          <div key={category.name} className="group">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
              {category.name}
            </h3>

            <ul className="space-y-1">
              {category.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
