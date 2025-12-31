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

    // Calculate prices based on Zakeke's formula
    const unitPrice = Number(item.base_price || 0);
    const markupPrice = designDetails?.designUnitPrice || 0;
    const finalUnitPrice = unitPrice + markupPrice;
    const totalPrice = finalUnitPrice * item.quantity;

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                {loading ? (
                    <div className="image-placeholder animate-pulse"></div>
                ) : (
                    <img
                        src={designDetails?.tempPreviewImageUrl || item.primary_image || 'https://placehold.co/100x100'}
                        alt={item.title}
                    />
                )}
            </div>
            <div className="cart-item-details">
                <h3>{item.title}</h3>
                {item.designId && (
                    <div className="design-badge">Customized Design</div>
                )}
                <div className="price-breakdown">
                    <p>Unit Price: ₹{unitPrice}</p>
                    {markupPrice > 0 && <p className="markup">+ Customization: ₹{markupPrice}</p>}
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
                Qty: {item.quantity}
            </div>
            <div className="cart-item-total">
                ₹{totalPrice.toFixed(2)}
            </div>
        </div>
    );
};

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useShop();

    const handleCheckout = async () => {
        try {
            const orderData = {
                orderCode: `ORDER-${Date.now()}`,
                orderDate: new Date().toISOString(),
                sessionID: 'frontend-session-123',
                total: cartItems.reduce((acc, item) => acc + (Number(item.base_price) * item.quantity), 0),
                details: cartItems.map(item => ({
                    sku: item.id.toString(),
                    designID: item.designId || '',
                    quantity: item.quantity,
                    modelUnitPrice: Number(item.base_price)
                }))
            };

            await zakekeService.registerOrder(orderData);
            alert('Order registered in Zakeke! Print-ready files are being generated.');
            clearCart();
        } catch (err) {
            console.error('Checkout failed', err);
            alert('Checkout failed: ' + err.message);
        }
    };

    const subtotal = cartItems.reduce((acc, item) => {
        // We'd ideally want to wait for all design details to calculate real subtotal,
        // but for now we'll sum base prices or use a derived total if we had it.
        return acc + (Number(item.base_price) * item.quantity);
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
                            <span>Subtotal (Base)</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row shipping">
                            <span>Shipping</span>
                            <span className="free">Calculated at checkout</span>
                        </div>
                        <hr />
                        <div className="summary-row total">
                            <span>Estimted Total</span>
                            <span>₹{subtotal.toFixed(2)}</span>
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
