import React from 'react';

import Breadcrumb from './Breadcrumb/Breadcrumb';
import Herosection from './Part/part';
import Sidebar from './Sidebar/sidebar';
import BusinessEssentials from './Business/business';
import ImageGallery from './Looks/looks';
import MadeByYouPage from './Made/made';
import PackagingNeeds from './Packaging/packaging';
function Categories() {
   return (
  <div>
    <Breadcrumb />
    <Herosection />

    {/* Sidebar + Products */}
    <div className="flex px-1 py-12 bg-white">
      <Sidebar />

      <div className="flex-1">
        <BusinessEssentials />

        {/* Image Gallery – niche hi rahegi */}
        <div className="mt-7 w-full">
          <ImageGallery />
          <MadeByYouPage />
          <PackagingNeeds />
        </div>
      </div>
    </div>
  </div>
);
}

export default Categories;