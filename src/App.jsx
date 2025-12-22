import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Categories from './pages/Categories/Categories'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from "./components/Product/Product";
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
