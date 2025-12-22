import React from 'react';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import CategoryHero from './Part/Part';
import Sidebar from './Sidebar/Sidebar';
import BusinessEssentials from './Business/Business';
import ImageGallery from './Looks/Looks';
import MadeByYouPage from './Made/Made';
import PackagingNeeds from './Packaging/Packaging';

function Categories() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Breadcrumb />
            <CategoryHero />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar - Fixed width on desktop */}
                    <aside className="lg:w-1/4">
                        <Sidebar />
                    </aside>

                    {/* Main Content Area */}
                    <main className="lg:w-3/4 space-y-12">
                        <section className="bg-white rounded-2xl shadow-sm p-6">
                            <BusinessEssentials />
                        </section>

                        <section className="bg-white rounded-2xl shadow-sm p-6">
                            <ImageGallery />
                        </section>

                        <section className="bg-white rounded-2xl shadow-sm p-6">
                            <MadeByYouPage />
                        </section>

                        <section className="bg-white rounded-2xl shadow-sm p-6">
                            <PackagingNeeds />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Categories;
