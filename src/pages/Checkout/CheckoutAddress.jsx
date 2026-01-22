import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import userService from '../../services/userService';
import './Checkout.css';

const CheckoutAddress = () => {
    const navigate = useNavigate();
    const { cartItems } = useShop();
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showNewAddress, setShowNewAddress] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loadingAddresses, setLoadingAddresses] = useState(true);

    const [newAddress, setNewAddress] = useState({
        type: 'shipping',
        recipient_name: '',
        phone_number: '',
        street: '',
        apartment_suite: '',
        city: '',
        state: '',
        zip_code: '',
        country: 'India',
        company_name: '',
        is_default: false
    });

    useEffect(() => {
        loadAddresses();
    }, []);

    const loadAddresses = async () => {
        try {
            setLoadingAddresses(true);
            const data = await userService.getAddresses();
            setAddresses(data);
            // Auto-select default shipping address
            const defaultShipping = data.find(addr => addr.type === 'shipping' && addr.is_default);
            if (defaultShipping) {
                setSelectedAddress(defaultShipping.id);
            }
        } catch (err) {
            console.error('Error loading addresses:', err);
        } finally {
            setLoadingAddresses(false);
        }
    };

    const handleNewAddressChange = (e) => {
        setNewAddress({
            ...newAddress,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveNewAddress = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const saved = await userService.createAddress(newAddress);
            await loadAddresses();
            setSelectedAddress(saved.id);
            setShowNewAddress(false);
            setNewAddress({
                type: 'shipping',
                recipient_name: '',
                phone_number: '',
                street: '',
                apartment_suite: '',
                city: '',
                state: '',
                zip_code: '',
                country: 'India',
                company_name: '',
                is_default: false
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save address');
        } finally {
            setLoading(false);
        }
    };

    const handleContinue = () => {
        if (!selectedAddress) {
            setError('Please select or create a shipping address');
            return;
        }
        navigate('/checkout/payment', { state: { shippingAddress: selectedAddress } });
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
                        <div className="step active">
                            {/* <span className="step-number">1</span> */}
                            <span className="step-label">Shipping</span>
                        </div>
                        <div className="step">
                            {/* <span className="step-number">2</span> */}
                            <span className="step-label">Payment</span>
                        </div>
                        <div className="step">
                            {/* <span className="step-number">3</span> */}
                            <span className="step-label">Review</span>
                        </div>
                    </div>
                </div>

                <div className="checkout-content">
                    <div className="checkout-main">
                        <div className="checkout-section">
                            <h2>Shipping Address</h2>
                            {error && <div className="error-message">{error}</div>}

                            {loadingAddresses ? (
                                <div className="loading-spinner">Loading addresses...</div>
                            ) : (
                                <>
                                    {addresses.length > 0 && (
                                        <div className="address-list">
                                            {addresses
                                                .filter(addr => addr.type === 'shipping')
                                                .map(address => (
                                                    <div
                                                        key={address.id}
                                                        className={`address-card ${selectedAddress === address.id ? 'selected' : ''}`}
                                                        onClick={() => setSelectedAddress(address.id)}
                                                    >
                                                        <div className="address-radio">
                                                            <input
                                                                type="radio"
                                                                name="address"
                                                                checked={selectedAddress === address.id}
                                                                onChange={() => setSelectedAddress(address.id)}
                                                            />
                                                        </div>
                                                        <div className="address-details">
                                                            <h3>{address.recipient_name}</h3>
                                                            <p>{address.street}</p>
                                                            {address.apartment_suite && <p>{address.apartment_suite}</p>}
                                                            <p>{address.city}, {address.state} {address.zip_code}</p>
                                                            <p>{address.country}</p>
                                                            <p className="phone">Phone: {address.phone_number}</p>
                                                            {address.is_default && (
                                                                <span className="default-badge">Default</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    )}

                                    {!showNewAddress ? (
                                        <button
                                            type="button"
                                            className="btn-secondary"
                                            onClick={() => setShowNewAddress(true)}
                                        >
                                            + Add New Address
                                        </button>
                                    ) : (
                                        <form onSubmit={handleSaveNewAddress} className="new-address-form">
                                            <h3>Add New Shipping Address</h3>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Recipient Name *</label>
                                                    <input
                                                        type="text"
                                                        name="recipient_name"
                                                        value={newAddress.recipient_name}
                                                        onChange={handleNewAddressChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone Number *</label>
                                                    <input
                                                        type="tel"
                                                        name="phone_number"
                                                        value={newAddress.phone_number}
                                                        onChange={handleNewAddressChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Street Address *</label>
                                                <input
                                                    type="text"
                                                    name="street"
                                                    value={newAddress.street}
                                                    onChange={handleNewAddressChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Apartment, Suite, etc.</label>
                                                <input
                                                    type="text"
                                                    name="apartment_suite"
                                                    value={newAddress.apartment_suite}
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>City *</label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={newAddress.city}
                                                        onChange={handleNewAddressChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>State *</label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        value={newAddress.state}
                                                        onChange={handleNewAddressChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>ZIP Code *</label>
                                                    <input
                                                        type="text"
                                                        name="zip_code"
                                                        value={newAddress.zip_code}
                                                        onChange={handleNewAddressChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Country *</label>
                                                <select
                                                    name="country"
                                                    value={newAddress.country}
                                                    onChange={handleNewAddressChange}
                                                    required
                                                >
                                                    <option value="India">India</option>
                                                    <option value="United States">United States</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                </select>
                                            </div>
                                            <div className="form-actions">
                                                <button
                                                    type="button"
                                                    className="btn-secondary"
                                                    onClick={() => setShowNewAddress(false)}
                                                >
                                                    Cancel
                                                </button>
                                                <button type="submit" className="btn-primary" disabled={loading}>
                                                    {loading ? 'Saving...' : 'Save Address'}
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    <div className="checkout-sidebar">
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-items">
                                {cartItems.map(item => {
                                    const price = item.finalPrice || item.basePrice || item.base_price || 0;
                                    const quantity = item.quantity || 1;
                                    const itemTotal = Number(price) * quantity;
                                    
                                    return (
                                        <div key={item.cartId} className="summary-item">
                                            <div className="summary-item-image">
                                                <img src={item.image || item.img || item.primary_image || 'https://placehold.co/60x60'} alt={item.title || 'Product'} />
                                            </div>
                                            <div className="summary-item-details">
                                                <p className="item-name">{item.title || item.name || 'Product'}</p>
                                                <p className="item-quantity">Qty: {quantity}</p>
                                            </div>
                                            <div className="summary-item-price">
                                                ₹{itemTotal.toFixed(2)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="summary-totals">
                                {(() => {
                                    const subtotal = cartItems.reduce((acc, item) => {
                                        const price = item.finalPrice || item.basePrice || item.base_price || 0;
                                        const quantity = item.quantity || 1;
                                        return acc + (Number(price) * quantity);
                                    }, 0);
                                    
                                    return (
                                        <>
                                            <div className="summary-row">
                                                <span>Subtotal</span>
                                                <span>₹{isNaN(subtotal) ? '0.00' : subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="summary-row">
                                                <span>Shipping</span>
                                                <span>Calculated at payment</span>
                                            </div>
                                            <div className="summary-row total">
                                                <span>Estimated Total</span>
                                                <span>₹{isNaN(subtotal) ? '0.00' : subtotal.toFixed(2)}</span>
                                            </div>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checkout-actions">
                    <button onClick={() => navigate('/cart')} className="btn-link">
                        ← Back to Cart
                    </button>
                    <button onClick={handleContinue} className="btn-primary btn-large">
                        Continue to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutAddress;
