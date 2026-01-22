import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaTruck, FaMapMarkerAlt, FaCreditCard, FaDownload, FaPrint, FaArrowLeft } from 'react-icons/fa';
import orderService from '../../services/orderService';
import './Account.css';
import './Orders.css';

const OrderDetail = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (orderId) {
            loadOrder();
        }
    }, [orderId]);

    const loadOrder = async () => {
        try {
            setLoading(true);
            const orderData = await orderService.getOrder(orderId);
            setOrder(orderData);
        } catch (err) {
            console.error('Error loading order:', err);
            setError('Failed to load order details');
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        const statusLower = status.toLowerCase();
        if (statusLower === 'delivered') return 'delivered';
        if (['pending', 'processing', 'printing'].includes(statusLower)) return 'pending';
        if (['shipped'].includes(statusLower)) return 'shipped';
        if (['cancelled', 'refunded'].includes(statusLower)) return 'cancelled';
        return 'default';
    };

    const getStatusSteps = (status) => {
        const steps = [
            { key: 'pending', label: 'Order Placed', completed: true },
            { key: 'processing', label: 'Processing', completed: ['Processing', 'Printing', 'Shipped', 'Delivered'].includes(status) },
            { key: 'printing', label: 'Printing', completed: ['Printing', 'Shipped', 'Delivered'].includes(status) },
            { key: 'shipped', label: 'Shipped', completed: ['Shipped', 'Delivered'].includes(status) },
            { key: 'delivered', label: 'Delivered', completed: status === 'Delivered' }
        ];
        return steps;
    };

    if (loading) {
        return (
            <div className="account-page">
                <div className="account-container">
                    <div className="loading-spinner">Loading order details...</div>
                </div>
            </div>
        );
    }

    if (error || !order) {
        return (
            <div className="account-page">
                <div className="account-container">
                    <div className="alert alert-error">
                        {error || 'Order not found'}
                    </div>
                    <Link to="/account/orders" className="btn-primary">
                        Back to Orders
                    </Link>
                </div>
            </div>
        );
    }

    const statusSteps = getStatusSteps(order.status);

    return (
        <div className="account-page">
            <div className="account-container">
                <div className="account-header">
                    <div>
                        <button onClick={() => navigate('/account/orders')} className="back-button">
                            <FaArrowLeft /> Back to Orders
                        </button>
                        <h1>Order #{order.id}</h1>
                        <p>Placed on {new Date(order.created_at).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</p>
                    </div>
                    <div className={`status-badge-large status-${getStatusColor(order.status)}`}>
                        {order.status}
                    </div>
                </div>

                <div className="order-detail-content">
                    {/* Order Status Timeline */}
                    <div className="order-section">
                        <h2>Order Status</h2>
                        <div className="status-timeline">
                            {statusSteps.map((step, idx) => (
                                <div key={step.key} className={`timeline-step ${step.completed ? 'completed' : ''}`}>
                                    <div className="timeline-marker">
                                        {step.completed ? '✓' : idx + 1}
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-label">{step.label}</div>
                                        {step.completed && idx < statusSteps.length - 1 && (
                                            <div className="timeline-line"></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Items */}
                    <div className="order-section">
                        <h2>Order Items</h2>
                        <div className="order-items-detail">
                            {order.items?.map((item, idx) => (
                                <div key={idx} className="order-item-detail">
                                    <div className="item-image-detail">
                                        <img 
                                            src={item.product?.primary_image || 'https://placehold.co/120x120'} 
                                            alt={item.product_name_snapshot || 'Product'} 
                                        />
                                    </div>
                                    <div className="item-info-detail">
                                        <h3>{item.product_name_snapshot || 'Product'}</h3>
                                        <p className="item-sku">SKU: {item.sku_snapshot || 'N/A'}</p>
                                        <p className="item-quantity">Quantity: {item.quantity}</p>
                                        {item.frozen_canvas_state && (
                                            <span className="customized-badge">Customized Design</span>
                                        )}
                                        {item.render_status && (
                                            <div className="render-status">
                                                <span className={`status-indicator status-${item.render_status}`}>
                                                    {item.render_status}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="item-price-detail">
                                        <div className="unit-price">₹{parseFloat(item.unit_price || 0).toFixed(2)} each</div>
                                        <div className="total-price">₹{parseFloat(item.total_price || 0).toFixed(2)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipping Information */}
                    {order.shipping_address_details && (
                        <div className="order-section">
                            <h2>
                                <FaMapMarkerAlt /> Shipping Address
                            </h2>
                            <div className="address-detail-card">
                                <p><strong>{order.shipping_address_details.recipient_name}</strong></p>
                                {order.shipping_address_details.company_name && (
                                    <p>{order.shipping_address_details.company_name}</p>
                                )}
                                <p>{order.shipping_address_details.street}</p>
                                {order.shipping_address_details.apartment_suite && (
                                    <p>{order.shipping_address_details.apartment_suite}</p>
                                )}
                                <p>
                                    {order.shipping_address_details.city}, {order.shipping_address_details.state} {order.shipping_address_details.zip_code}
                                </p>
                                <p>{order.shipping_address_details.country}</p>
                                <p>📞 {order.shipping_address_details.phone_number}</p>
                            </div>
                        </div>
                    )}

                    {/* Shipment Tracking */}
                    {order.shipment && (
                        <div className="order-section">
                            <h2>
                                <FaTruck /> Shipment Tracking
                            </h2>
                            <div className="shipment-card">
                                <div className="shipment-info">
                                    <div className="info-item">
                                        <label>Carrier:</label>
                                        <span>{order.shipment.carrier}</span>
                                    </div>
                                    <div className="info-item">
                                        <label>Tracking Number:</label>
                                        <span className="tracking-number">{order.shipment.tracking_number}</span>
                                    </div>
                                    <div className="info-item">
                                        <label>Status:</label>
                                        <span className={`status-badge status-${order.shipment.status.toLowerCase().replace(' ', '-')}`}>
                                            {order.shipment.status}
                                        </span>
                                    </div>
                                    {order.shipment.shipped_at && (
                                        <div className="info-item">
                                            <label>Shipped On:</label>
                                            <span>
                                                {new Date(order.shipment.shipped_at).toLocaleDateString('en-IN', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    )}
                                    {order.shipment.delivered_at && (
                                        <div className="info-item">
                                            <label>Delivered On:</label>
                                            <span>
                                                {new Date(order.shipment.delivered_at).toLocaleDateString('en-IN', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {order.shipment.tracking_number && (
                                    <div className="tracking-actions">
                                        <Link 
                                            to={`/track-order/${order.shipment.tracking_number}`}
                                            className="btn-secondary"
                                        >
                                            Track Package
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Payment Information */}
                    <div className="order-section">
                        <h2>
                            <FaCreditCard /> Payment Information
                        </h2>
                        <div className="payment-card">
                            <div className="info-item">
                                <label>Payment Method:</label>
                                <span>{order.payment_method || 'Not specified'}</span>
                            </div>
                            <div className="info-item">
                                <label>Payment Status:</label>
                                <span className={order.is_paid ? 'paid' : 'unpaid'}>
                                    {order.is_paid ? '✓ Paid' : 'Unpaid'}
                                </span>
                            </div>
                            {order.transaction_id && (
                                <div className="info-item">
                                    <label>Transaction ID:</label>
                                    <span className="transaction-id">{order.transaction_id}</span>
                                </div>
                            )}
                            {order.paid_at && (
                                <div className="info-item">
                                    <label>Paid On:</label>
                                    <span>
                                        {new Date(order.paid_at).toLocaleDateString('en-IN', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="order-section">
                        <h2>Order Summary</h2>
                        <div className="order-summary-card">
                            <div className="summary-row-large">
                                <span>Subtotal:</span>
                                <span>₹{parseFloat(order.subtotal || 0).toFixed(2)}</span>
                            </div>
                            {order.shipping_total > 0 && (
                                <div className="summary-row-large">
                                    <span>Shipping:</span>
                                    <span>₹{parseFloat(order.shipping_total).toFixed(2)}</span>
                                </div>
                            )}
                            {order.tax_total > 0 && (
                                <div className="summary-row-large">
                                    <span>Tax:</span>
                                    <span>₹{parseFloat(order.tax_total).toFixed(2)}</span>
                                </div>
                            )}
                            {order.discount_total > 0 && (
                                <div className="summary-row-large discount">
                                    <span>Discount:</span>
                                    <span>-₹{parseFloat(order.discount_total).toFixed(2)}</span>
                                </div>
                            )}
                            <div className="summary-row-large total-large">
                                <span>Total:</span>
                                <span>₹{parseFloat(order.total_amount).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Customer Notes */}
                    {order.customer_notes && (
                        <div className="order-section">
                            <h2>Your Notes</h2>
                            <div className="notes-card">
                                <p>{order.customer_notes}</p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="order-actions">
                        {order.items?.some(item => item.print_file_url) && (
                            <a 
                                href={order.items.find(item => item.print_file_url)?.print_file_url}
                                download
                                className="btn-secondary"
                            >
                                <FaDownload /> Download Print Files
                            </a>
                        )}
                        <button onClick={() => window.print()} className="btn-secondary">
                            <FaPrint /> Print Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
