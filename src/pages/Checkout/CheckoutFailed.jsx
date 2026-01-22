import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaArrowLeft } from 'react-icons/fa';
import './Checkout.css';

const CheckoutFailed = () => {
    return (
        <div className="checkout-page">
            <div className="checkout-failed-container">
                <div className="failed-icon">
                    <FaExclamationCircle />
                </div>
                <h1>Payment Failed</h1>
                <p className="error-message">
                    We're sorry, but your payment could not be processed. Please try again or use a different payment method.
                </p>

                <div className="failed-actions">
                    <Link to="/checkout/payment" className="btn-primary">
                        Try Again
                    </Link>
                    <Link to="/cart" className="btn-secondary">
                        <FaArrowLeft /> Back to Cart
                    </Link>
                </div>

                <div className="failed-help">
                    <p>If you continue to experience issues, please contact our support team.</p>
                    <Link to="/contact" className="help-link">Contact Support</Link>
                </div>
            </div>
        </div>
    );
};

export default CheckoutFailed;
