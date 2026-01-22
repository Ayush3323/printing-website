import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import userService from '../../services/userService';
import orderService from '../../services/orderService';
import './Checkout.css';

const CheckoutReview = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems, clearCart } = useShop();
    const [shippingAddress, setShippingAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loadingAddress, setLoadingAddress] = useState(true);
    const [customerNotes, setCustomerNotes] = useState('');

    useEffect(() => {
        const addressId = location.state?.shippingAddress;
        const payment = location.state?.paymentMethod;
        
        if (!addressId || !payment) {
            navigate('/checkout/address');
            return;
        }

        setPaymentMethod(payment);
        loadAddress(addressId);
    }, [location.state, navigate]);

    const loadAddress = async (addressId) => {
        try {
            setLoadingAddress(true);
            const addresses = await userService.getAddresses();
            const address = addresses.find(addr => addr.id === addressId);
            setShippingAddress(address);
        } catch (err) {
            console.error('Error loading address:', err);
        } finally {
            setLoadingAddress(false);
        }
    };

    const calculateTotals = () => {
        const subtotal = cartItems.reduce((acc, item) => acc + (item.basePrice || item.base_price) * item.quantity, 0);
        const shipping = 0; // TODO: Calculate shipping
        const tax = 0; // TODO: Calculate tax
        const total = subtotal + shipping + tax;
        return { subtotal, shipping, tax, total };
    };

    const handlePlaceOrder = async () => {
        setLoading(true);
        setError('');

        try {
            const totals = calculateTotals();

            // Prepare order data according to backend OrderSerializer
            const orderData = {
                shipping_address: location.state.shippingAddress,
                customer_notes: customerNotes,
                items: cartItems.map(item => ({
                    product: item.id,
                    design: item.designId || null,
                    quantity: item.quantity
                }))
            };

            // Create order
            const order = await orderService.createOrder(orderData);
            
            // Clear cart
            clearCart();

            // Redirect to success page
            navigate(`/checkout/success/${order.id}`);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to place order. Please try again.');
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

    const { subtotal, shipping, tax, total } = calculateTotals();

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-header">
                    <h1>Review Your Order</h1>
                    <div className="checkout-steps">
                        <div className="step completed">
                            <span className="step-number">✓</span>
                            <span className="step-label">Shipping Address</span>
                        </div>
                        <div className="step completed">
                            <span className="step-number">✓</span>
                            <span className="step-label">Payment</span>
                        </div>
                        <div className="step active">
                            <span className="step-number">3</span>
                            <span className="step-label">Review</span>
                        </div>
                    </div>
                </div>

                <div className="checkout-content">
                    <div className="checkout-main">
                        {error && <div className="error-message">{error}</div>}

                        <div className="checkout-section">
                            <h2>Shipping Address</h2>
                            {loadingAddress ? (
                                <div className="loading-spinner">Loading...</div>
                            ) : shippingAddress ? (
                                <div className="review-address">
                                    <p><strong>{shippingAddress.recipient_name}</strong></p>
                                    <p>{shippingAddress.street}</p>
                                    {shippingAddress.apartment_suite && <p>{shippingAddress.apartment_suite}</p>}
                                    <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip_code}</p>
                                    <p>{shippingAddress.country}</p>
                                    <p>Phone: {shippingAddress.phone_number}</p>
                                    <Link to="/checkout/address" className="edit-link">Edit</Link>
                                </div>
                            ) : null}
                        </div>

                        <div className="checkout-section">
                            <h2>Payment Method</h2>
                            <div className="review-payment">
                                <p><strong>
                                    {paymentMethod === 'razorpay' && 'Credit/Debit Card'}
                                    {paymentMethod === 'upi' && 'UPI'}
                                    {paymentMethod === 'netbanking' && 'Net Banking'}
                                    {paymentMethod === 'cod' && 'Cash on Delivery'}
                                </strong></p>
                                <Link to="/checkout/payment" className="edit-link">Edit</Link>
                            </div>
                        </div>

                        <div className="checkout-section">
                            <h2>Order Items</h2>
                            <div className="review-items">
                                {cartItems.map(item => (
                                    <div key={item.cartId} className="review-item">
                                        <div className="review-item-image">
                                            <img src={item.image || item.primary_image || 'https://placehold.co/80x80'} alt={item.title} />
                                        </div>
                                        <div className="review-item-details">
                                            <h3>{item.title}</h3>
                                            <p>Quantity: {item.quantity}</p>
                                            {item.designId && (
                                                <span className="customized-badge">Customized</span>
                                            )}
                                        </div>
                                        <div className="review-item-price">
                                            ₹{(item.basePrice || item.base_price) * item.quantity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="checkout-section">
                            <h2>Additional Notes (Optional)</h2>
                            <textarea
                                className="notes-textarea"
                                value={customerNotes}
                                onChange={(e) => setCustomerNotes(e.target.value)}
                                placeholder="Any special instructions for your order..."
                                rows="4"
                            />
                        </div>
                    </div>

                    <div className="checkout-sidebar">
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-totals">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>₹{shipping.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Tax</span>
                                    <span>₹{tax.toFixed(2)}</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checkout-actions">
                    <button onClick={() => navigate('/checkout/payment')} className="btn-link">
                        ← Back to Payment
                    </button>
                    <button onClick={handlePlaceOrder} className="btn-primary btn-large" disabled={loading}>
                        {loading ? 'Placing Order...' : `Place Order - ₹${total.toFixed(2)}`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutReview;
