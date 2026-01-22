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
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import CheckoutAddress from './pages/Checkout/CheckoutAddress';
import CheckoutPayment from './pages/Checkout/CheckoutPayment';
import CheckoutReview from './pages/Checkout/CheckoutReview';
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess';
import CheckoutFailed from './pages/Checkout/CheckoutFailed';
import ProtectedRoute from './components/ProtectedRoute';
import AccountDashboard from './pages/Account/AccountDashboard';
import Profile from './pages/Account/Profile';
import Addresses from './pages/Account/Addresses';
import Settings from './pages/Account/Settings';
import Orders from './pages/Account/Orders';
import OrderDetail from './pages/Account/OrderDetail';
import OrderTracking from './pages/Account/OrderTracking';
import SearchResults from './pages/Search/SearchResults';
import Contact from './pages/Help/Contact';
import FAQ from './pages/Help/FAQ';
import Returns from './pages/Help/Returns';
import Shipping from './pages/Help/Shipping';
import Terms from './pages/Legal/Terms';
import Privacy from './pages/Legal/Privacy';
import Cookies from './pages/Legal/Cookies';
import MyDesigns from './pages/Account/MyDesigns';
import MyAssets from './pages/Account/MyAssets';

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
            
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            
            {/* Checkout Routes (Protected) */}
            <Route path="/checkout/address" element={
                <ProtectedRoute>
                    <CheckoutAddress />
                </ProtectedRoute>
            } />
            <Route path="/checkout/payment" element={
                <ProtectedRoute>
                    <CheckoutPayment />
                </ProtectedRoute>
            } />
            <Route path="/checkout/review" element={
                <ProtectedRoute>
                    <CheckoutReview />
                </ProtectedRoute>
            } />
            <Route path="/checkout/success/:orderId" element={<CheckoutSuccess />} />
            <Route path="/checkout/failed" element={<CheckoutFailed />} />
            
            {/* Account Routes (Protected) */}
            <Route path="/account" element={
                <ProtectedRoute>
                    <AccountDashboard />
                </ProtectedRoute>
            } />
            <Route path="/account/profile" element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            } />
            <Route path="/account/addresses" element={
                <ProtectedRoute>
                    <Addresses />
                </ProtectedRoute>
            } />
            <Route path="/account/settings" element={
                <ProtectedRoute>
                    <Settings />
                </ProtectedRoute>
            } />
            <Route path="/account/designs" element={
                <ProtectedRoute>
                    <MyDesigns />
                </ProtectedRoute>
            } />
            <Route path="/account/assets" element={
                <ProtectedRoute>
                    <MyAssets />
                </ProtectedRoute>
            } />
            <Route path="/account/orders" element={
                <ProtectedRoute>
                    <Orders />
                </ProtectedRoute>
            } />
            <Route path="/account/orders/:orderId" element={
                <ProtectedRoute>
                    <OrderDetail />
                </ProtectedRoute>
            } />
            <Route path="/track-order/:trackingNumber" element={<OrderTracking />} />
            
            {/* Search Routes */}
            <Route path="/search" element={<SearchResults />} />
            
            {/* Help & Support Routes */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/help" element={<FAQ />} />
            
            {/* Legal Routes */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/cookie-policy" element={<Cookies />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
