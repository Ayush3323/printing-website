import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaDownload, FaShoppingBag } from 'react-icons/fa';
import orderService from '../../services/orderService';
import './Checkout.css';

const CheckoutSuccess = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (orderId) {
            loadOrder();
        }
    }, [orderId]);

    const loadOrder = async () => {
        try {
            const orderData = await orderService.getOrder(orderId);
            setOrder(orderData);
        } catch (err) {
            console.error('Error loading order:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="checkout-page">
                <div className="checkout-container">
                    <div className="loading-spinner">Loading order details...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-success-container">
                <div className="success-icon">
                    <FaCheckCircle />
                </div>
                <h1>Order Placed Successfully!</h1>
                <p className="success-message">
                    Thank you for your order. We've received your order and will begin processing it right away.
                </p>

                {order && (
                    <div className="order-details-card">
                        <div className="order-info">
                            <div className="info-row">
                                <span className="info-label">Order Number:</span>
                                <span className="info-value">#{order.id}</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Order Date:</span>
                                <span className="info-value">
                                    {new Date(order.created_at).toLocaleDateString('en-IN', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Total Amount:</span>
                                <span className="info-value">₹{parseFloat(order.total_amount).toFixed(2)}</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Status:</span>
                                <span className={`status-badge status-${order.status.toLowerCase()}`}>
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="success-actions">
                    {orderId && (
                        <Link to={`/account/orders/${orderId}`} className="btn-primary">
                            View Order Details
                        </Link>
                    )}
                    <Link to="/account/orders" className="btn-primary">
                        View All Orders
                    </Link>
                    <Link to="/view-all" className="btn-secondary">
                        <FaShoppingBag /> Continue Shopping
                    </Link>
                </div>

                <div className="success-info">
                    <p>📧 A confirmation email has been sent to your email address.</p>
                    <p>You can track your order status in your account dashboard.</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;
