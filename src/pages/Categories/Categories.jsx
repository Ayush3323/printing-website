import React from 'react';

import Breadcrumb from './Breadcrumb/Breadcrumb';
import Herosection from './Part/Part';
import Sidebar from './Sidebar/Sidebar';
import BusinessEssentials from './Business/Business';
import ImageGallery from './Looks/Looks';
import MadeByYouPage from './Made/Made';
import PackagingNeeds from './Packaging/Packaging';
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
