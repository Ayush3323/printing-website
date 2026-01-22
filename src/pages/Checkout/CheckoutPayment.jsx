import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import './Checkout.css';

const CheckoutPayment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems } = useShop();
    const [paymentMethod, setPaymentMethod] = useState('razorpay');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const shippingAddressId = location.state?.shippingAddress;

    useEffect(() => {
        if (!shippingAddressId) {
            navigate('/checkout/address');
        }
    }, [shippingAddressId, navigate]);

    const handleContinue = async () => {
        setLoading(true);
        setError('');

        try {
            // TODO: Initialize Razorpay payment when integration is ready
            // For now, proceed to review
            navigate('/checkout/review', {
                state: {
                    shippingAddress: shippingAddressId,
                    paymentMethod: paymentMethod
                }
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Payment initialization failed');
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate('/view-all')} className="btn-primary">
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-header">
                    <h1>Checkout</h1>
                    <div className="checkout-steps">
                        <div className="step completed">
                            <span className="step-number">✓</span>
                            <span className="step-label">Shipping Address</span>
                        </div>
                        <div className="step active">
                            <span className="step-number">2</span>
                            <span className="step-label">Payment</span>
                        </div>
                        <div className="step">
                            <span className="step-number">3</span>
                            <span className="step-label">Review</span>
                        </div>
                    </div>
                </div>

                <div className="checkout-content">
                    <div className="checkout-main">
                        <div className="checkout-section">
                            <h2>Payment Method</h2>
                            {error && <div className="error-message">{error}</div>}

                            <div className="payment-methods">
                                <div
                                    className={`payment-method-card ${paymentMethod === 'razorpay' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('razorpay')}
                                >
                                    <div className="payment-method-radio">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="razorpay"
                                            checked={paymentMethod === 'razorpay'}
                                            onChange={() => setPaymentMethod('razorpay')}
                                        />
                                    </div>
                                    <div className="payment-method-info">
                                        <h3>Credit/Debit Card</h3>
                                        <p>Pay securely with Razorpay</p>
                                        <div className="payment-icons">
                                            <span className="payment-icon">Visa</span>
                                            <span className="payment-icon">Mastercard</span>
                                            <span className="payment-icon">Rupay</span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`payment-method-card ${paymentMethod === 'upi' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('upi')}
                                >
                                    <div className="payment-method-radio">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="upi"
                                            checked={paymentMethod === 'upi'}
                                            onChange={() => setPaymentMethod('upi')}
                                        />
                                    </div>
                                    <div className="payment-method-info">
                                        <h3>UPI</h3>
                                        <p>Pay using UPI (PhonePe, Google Pay, Paytm)</p>
                                    </div>
                                </div>

                                <div
                                    className={`payment-method-card ${paymentMethod === 'netbanking' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('netbanking')}
                                >
                                    <div className="payment-method-radio">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="netbanking"
                                            checked={paymentMethod === 'netbanking'}
                                            onChange={() => setPaymentMethod('netbanking')}
                                        />
                                    </div>
                                    <div className="payment-method-info">
                                        <h3>Net Banking</h3>
                                        <p>Pay using your bank account</p>
                                    </div>
                                </div>

                                <div
                                    className={`payment-method-card ${paymentMethod === 'cod' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('cod')}
                                >
                                    <div className="payment-method-radio">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={() => setPaymentMethod('cod')}
                                        />
                                    </div>
                                    <div className="payment-method-info">
                                        <h3>Cash on Delivery</h3>
                                        <p>Pay when you receive your order</p>
                                        <span className="cod-note">Available for orders above ₹500</span>
                                    </div>
                                </div>
                            </div>

                            <div className="payment-security">
                                <p>🔒 Your payment information is secure and encrypted</p>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-sidebar">
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-items">
                                {cartItems.map(item => (
                                    <div key={item.cartId} className="summary-item">
                                        <div className="summary-item-image">
                                            <img src={item.image || item.primary_image || 'https://placehold.co/60x60'} alt={item.title} />
                                        </div>
                                        <div className="summary-item-details">
                                            <p className="item-name">{item.title}</p>
                                            <p className="item-quantity">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="summary-item-price">
                                            ₹{(item.basePrice || item.base_price) * item.quantity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-totals">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{cartItems.reduce((acc, item) => acc + (item.basePrice || item.base_price) * item.quantity, 0).toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>Calculated at review</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Estimated Total</span>
                                    <span>₹{cartItems.reduce((acc, item) => acc + (item.basePrice || item.base_price) * item.quantity, 0).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checkout-actions">
                    <button onClick={() => navigate('/checkout/address')} className="btn-link">
                        ← Back to Address
                    </button>
                    <button onClick={handleContinue} className="btn-primary btn-large" disabled={loading}>
                        {loading ? 'Processing...' : 'Continue to Review'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPayment;
