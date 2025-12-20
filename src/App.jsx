import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Homepage from './Component/Homepage/Homepage'
import Categories from './Component/Categories/Categories'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './Component/blank/blank'
import Product from "./Component/product/product";
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
