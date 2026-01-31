import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import MainLayout from './components/Layouts/MainLayout';
import AuthLayout from './components/Layouts/AuthLayout';

// Page Components
import Homepage from './pages/Homepage/Homepage';
import Categories from './pages/Categories/Categories';
import Product from './pages/Product/Product';
import TemplateSelection from './pages/TemplateSelection/TemplateSelection';
import Editor from './pages/Editor/Editor';
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
import NotFound from './pages/NotFound/NotFound';

// Components
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Authentication Routes - No Header/Footer */}
                <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
                <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
                <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />
                <Route path="/reset-password/:token" element={<AuthLayout><ResetPassword /></AuthLayout>} />

                {/* Main Routes - With Header/Footer */}
                <Route path="/" element={<MainLayout><Homepage /></MainLayout>} />
                <Route path="/categories" element={<MainLayout><Categories /></MainLayout>} />
                <Route path="/view-all" element={<MainLayout><Categories /></MainLayout>} />
                <Route path="/categories/:category" element={<MainLayout><Categories /></MainLayout>} />
                <Route path="/categories/:category/:productSlug" element={<MainLayout><ProtectedRoute><Product /></ProtectedRoute></MainLayout>} />
                <Route path="/product" element={<MainLayout><ProtectedRoute><Product /></ProtectedRoute></MainLayout>} />
                <Route path="/product/:slug" element={<MainLayout><ProtectedRoute><Product /></ProtectedRoute></MainLayout>} />
                <Route path="/product/:slug/templates" element={<MainLayout><ProtectedRoute><TemplateSelection /></ProtectedRoute></MainLayout>} />
                <Route path="/editor/:templateId" element={<MainLayout><ProtectedRoute><Editor /></ProtectedRoute></MainLayout>} />
                <Route path="/zakeke-editor/:productId" element={<MainLayout><ProtectedRoute><ZakekeEditor /></ProtectedRoute></MainLayout>} />
                <Route path="/cart" element={<MainLayout><ProtectedRoute><Cart /></ProtectedRoute></MainLayout>} />

                {/* Checkout Routes - With Header/Footer */}
                <Route path="/checkout/address" element={<MainLayout><ProtectedRoute><CheckoutAddress /></ProtectedRoute></MainLayout>} />
                <Route path="/checkout/payment" element={<MainLayout><ProtectedRoute><CheckoutPayment /></ProtectedRoute></MainLayout>} />
                <Route path="/checkout/review" element={<MainLayout><ProtectedRoute><CheckoutReview /></ProtectedRoute></MainLayout>} />
                <Route path="/checkout/success/:orderId" element={<MainLayout><CheckoutSuccess /></MainLayout>} />
                <Route path="/checkout/failed" element={<MainLayout><CheckoutFailed /></MainLayout>} />

                {/* Account Routes - With Header/Footer */}
                <Route path="/account" element={<MainLayout><ProtectedRoute><AccountDashboard /></ProtectedRoute></MainLayout>} />
                <Route path="/account/profile" element={<MainLayout><ProtectedRoute><Profile /></ProtectedRoute></MainLayout>} />
                <Route path="/account/addresses" element={<MainLayout><ProtectedRoute><Addresses /></ProtectedRoute></MainLayout>} />
                <Route path="/account/settings" element={<MainLayout><ProtectedRoute><Settings /></ProtectedRoute></MainLayout>} />
                <Route path="/account/designs" element={<MainLayout><ProtectedRoute><MyDesigns /></ProtectedRoute></MainLayout>} />
                <Route path="/account/assets" element={<MainLayout><ProtectedRoute><MyAssets /></ProtectedRoute></MainLayout>} />
                <Route path="/account/orders" element={<MainLayout><ProtectedRoute><Orders /></ProtectedRoute></MainLayout>} />
                <Route path="/account/orders/:orderId" element={<MainLayout><ProtectedRoute><OrderDetail /></ProtectedRoute></MainLayout>} />
                <Route path="/track-order/:trackingNumber" element={<MainLayout><OrderTracking /></MainLayout>} />

                {/* Search Routes - With Header/Footer */}
                <Route path="/search" element={<MainLayout><SearchResults /></MainLayout>} />

                {/* Help & Support Routes - With Header/Footer */}
                <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
                <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
                <Route path="/returns" element={<MainLayout><Returns /></MainLayout>} />
                <Route path="/shipping" element={<MainLayout><Shipping /></MainLayout>} />
                <Route path="/help" element={<MainLayout><FAQ /></MainLayout>} />

                {/* Legal Routes - With Header/Footer */}
                <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
                <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
                <Route path="/cookies" element={<MainLayout><Cookies /></MainLayout>} />
                <Route path="/cookie-policy" element={<MainLayout><Cookies /></MainLayout>} />

                {/* 404 - Catch all unknown routes */}
                <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
