import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaTruck, FaSearch, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import orderService from '../../services/orderService';
import './Account.css';
import './Orders.css';

const OrderTracking = () => {
    const { trackingNumber } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTracking, setSearchTracking] = useState(trackingNumber || '');

    useEffect(() => {
        if (trackingNumber) {
            loadOrderByTracking(trackingNumber);
        }
    }, [trackingNumber]);

    const loadOrderByTracking = async (trackingNum) => {
        try {
            setLoading(true);
            // Get all orders and find the one with matching tracking number
            const orders = await orderService.getOrders();
            const foundOrder = orders.find(o => 
                o.shipment?.tracking_number === trackingNum
            );
            
            if (foundOrder) {
                // Load full order details
                const orderData = await orderService.getOrder(foundOrder.id);
                setOrder(orderData);
            } else {
                setError('Order with this tracking number not found');
            }
        } catch (err) {
            console.error('Error loading order:', err);
            setError('Failed to load tracking information');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTracking) {
            loadOrderByTracking(searchTracking);
        }
    };

    const getTrackingSteps = (shipment) => {
        if (!shipment) return [];
        
        const steps = [
            { 
                label: 'Label Created', 
                completed: true,
                date: shipment.shipped_at || shipment.status === 'Label Created'
            },
            { 
                label: 'In Transit', 
                completed: ['In Transit', 'Out for Delivery', 'Delivered'].includes(shipment.status),
                date: shipment.shipped_at
            },
            { 
                label: 'Out for Delivery', 
                completed: ['Out for Delivery', 'Delivered'].includes(shipment.status)
            },
            { 
                label: 'Delivered', 
                completed: shipment.status === 'Delivered',
                date: shipment.delivered_at
            }
        ];
        return steps;
    };

    if (loading) {
        return (
            <div className="account-page">
                <div className="account-container">
                    <div className="loading-spinner">Loading tracking information...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="account-page">
            <div className="account-container">
                <div className="account-header">
                    <div>
                        <h1>Track Your Order</h1>
                        <p>Enter your tracking number to see the status of your shipment</p>
                    </div>
                </div>

                {!trackingNumber && (
                    <div className="tracking-search-section">
                        <form onSubmit={handleSearch} className="tracking-search-form">
                            <div className="search-input-group-large">
                                <FaSearch className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Enter tracking number..."
                                    value={searchTracking}
                                    onChange={(e) => setSearchTracking(e.target.value)}
                                    className="search-input-large"
                                    required
                                />
                                <button type="submit" className="btn-primary btn-large">
                                    Track Order
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {error && (
                    <div className="account-content">
                        <div className="alert alert-error">{error}</div>
                        {!trackingNumber && (
                            <Link to="/account/orders" className="btn-secondary">
                                View My Orders
                            </Link>
                        )}
                    </div>
                )}

                {order && order.shipment && (
                    <div className="order-detail-content">
                        <div className="order-section">
                            <h2>Tracking Information</h2>
                            <div className="tracking-header-card">
                                <div className="tracking-info-main">
                                    <div className="tracking-number-display">
                                        <FaTruck />
                                        <div>
                                            <label>Tracking Number</label>
                                            <span className="tracking-number-large">{order.shipment.tracking_number}</span>
                                        </div>
                                    </div>
                                    <div className="tracking-carrier">
                                        <label>Carrier</label>
                                        <span>{order.shipment.carrier}</span>
                                    </div>
                                    <div className="tracking-status-main">
                                        <label>Current Status</label>
                                        <span className={`status-badge-large status-${order.shipment.status.toLowerCase().replace(' ', '-')}`}>
                                            {order.shipment.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="tracking-timeline">
                                <h3>Tracking Timeline</h3>
                                {getTrackingSteps(order.shipment).map((step, idx) => (
                                    <div key={idx} className={`tracking-step ${step.completed ? 'completed' : 'pending'}`}>
                                        <div className="tracking-marker">
                                            {step.completed ? <FaCheckCircle /> : <FaClock />}
                                        </div>
                                        <div className="tracking-content">
                                            <div className="tracking-label">{step.label}</div>
                                            {step.date && (
                                                <div className="tracking-date">
                                                    {new Date(step.date).toLocaleDateString('en-IN', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-section">
                            <h2>Order Details</h2>
                            <div className="order-info-card">
                                <div className="info-item">
                                    <label>Order Number:</label>
                                    <Link to={`/account/orders/${order.id}`} className="order-link">
                                        #{order.id}
                                    </Link>
                                </div>
                                <div className="info-item">
                                    <label>Order Date:</label>
                                    <span>
                                        {new Date(order.created_at).toLocaleDateString('en-IN', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <div className="info-item">
                                    <label>Total Amount:</label>
                                    <span>₹{parseFloat(order.total_amount).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {order.shipping_address_details && (
                            <div className="order-section">
                                <h2>
                                    <FaMapMarkerAlt /> Delivery Address
                                </h2>
                                <div className="address-detail-card">
                                    <p><strong>{order.shipping_address_details.recipient_name}</strong></p>
                                    <p>{order.shipping_address_details.street}</p>
                                    {order.shipping_address_details.apartment_suite && (
                                        <p>{order.shipping_address_details.apartment_suite}</p>
                                    )}
                                    <p>
                                        {order.shipping_address_details.city}, {order.shipping_address_details.state} {order.shipping_address_details.zip_code}
                                    </p>
                                    <p>{order.shipping_address_details.country}</p>
                                </div>
                            </div>
                        )}

                        <div className="order-actions">
                            <Link to={`/account/orders/${order.id}`} className="btn-primary">
                                View Full Order Details
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderTracking;
