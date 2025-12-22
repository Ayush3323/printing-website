import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Categories from './pages/Categories/Categories'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from "./pages/Product/Product";
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
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
