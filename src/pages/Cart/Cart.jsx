import React, { useEffect, useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Link } from 'react-router-dom';
import zakekeService from '../../services/zakekeService';
import './Cart.css';

const CartItem = ({ item, onRemove }) => {
    const [designDetails, setDesignDetails] = useState(null);
    const [loading, setLoading] = useState(!!item.designId);

    useEffect(() => {
        if (item.designId) {
            zakekeService.getDesignDetails(item.designId)
                .then(data => {
                    setDesignDetails(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Failed to fetch design details', err);
                    setLoading(false);
                });
        }
    }, [item.designId]);

    // Calculate prices - use finalPrice if available, otherwise basePrice
    const basePrice = item.finalPrice || item.basePrice || item.base_price || 0;
    const markupPrice = designDetails?.designUnitPrice || 0;
    const finalUnitPrice = Number(basePrice) + Number(markupPrice);
    const totalPrice = finalUnitPrice * (item.quantity || 1);

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                {loading ? (
                    <div className="image-placeholder animate-pulse"></div>
                ) : (
                    <img
                        src={designDetails?.tempPreviewImageUrl || item.image || item.img || item.primary_image || 'https://placehold.co/100x100'}
                        alt={item.title || 'Product'}
                    />
                )}
            </div>
            <div className="cart-item-details">
                <h3>{item.title || item.name || 'Product'}</h3>
                {item.designId && (
                    <div className="design-badge">Customized Design</div>
                )}
                <div className="price-breakdown">
                    <p>Unit Price: ₹{Number(basePrice).toFixed(2)}</p>
                    {markupPrice > 0 && <p className="markup">+ Customization: ₹{Number(markupPrice).toFixed(2)}</p>}
                </div>
                <div className="cart-item-actions">
                    <button onClick={() => onRemove(item.cartId)} className="remove-btn">Remove</button>
                    {item.designId && (
                        <Link to={`/zakeke-editor/${item.slug}?designId=${item.designId}`} className="edit-btn">
                            Edit Design
                        </Link>
                    )}
                </div>
            </div>
            <div className="cart-item-quantity">
                Qty: {item.quantity || 1}
            </div>
            <div className="cart-item-total">
                ₹{isNaN(totalPrice) ? '0.00' : totalPrice.toFixed(2)}
            </div>
        </div>
    );
};

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useShop();

    const handleCheckout = () => {
        // Redirect to checkout flow using navigate
        window.location.href = '/checkout/address';
    };

    const subtotal = cartItems.reduce((acc, item) => {
        // Calculate subtotal using finalPrice or basePrice
        const basePrice = item.finalPrice || item.basePrice || item.base_price || 0;
        const quantity = item.quantity || 1;
        return acc + (Number(basePrice) * quantity);
    }, 0);

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your cart is empty</h2>
                <Link to="/view-all" className="browse-btn">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1>Shopping Cart</h1>
                <div className="cart-content">
                    <div className="cart-items-list">
                        {cartItems.map(item => (
                            <CartItem key={item.cartId} item={item} onRemove={removeFromCart} />
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{isNaN(subtotal) ? '0.00' : subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row shipping">
                            <span>Shipping</span>
                            <span className="free">Calculated at checkout</span>
                        </div>
                        <hr />
                        <div className="summary-row total">
                            <span>Estimated Total</span>
                            <span>₹{isNaN(subtotal) ? '0.00' : subtotal.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
