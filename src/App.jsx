import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Categories from './pages/Categories/Categories'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from "./pages/Product/Product";
import TemplateSelection from "./pages/TemplateSelection/TemplateSelection";
import Editor from "./pages/Editor/Editor";
import ZakekeEditor from './pages/Editor/ZakekeEditor';
import Cart from './pages/Cart/Cart';
// import AdminLayout from './components/AdminLayout';


function App() {

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/view-all" element={<Categories />} />
            <Route path="/product" element={<Product />} />
            {/* Dynamic routes for categories/subcategories if we want them to be specific, 
                but Categories page seems to handle query params? 
                Actually, deeper linking might need new routes: 
                <Route path="/categories/:categorySlug" element={<Categories />} />
                But user just asked for view-all specifically. */}
            <Route path="/categories/:category" element={<Categories />} />
            <Route path="/categories/:category/:productSlug" element={<Product />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/product/:slug/templates" element={<TemplateSelection />} />
            <Route path="/editor/:templateId" element={<Editor />} />
            <Route path="/zakeke-editor/:productId" element={<ZakekeEditor />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
