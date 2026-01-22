import apiHook from './apiConfig';

const orderService = {
    // Get all orders for the current user
    getOrders: async (params = {}) => {
        try {
            const response = await apiHook.get('/orders/', { params });
            return response.data.results || response.data;
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error;
        }
    },

    // Get a single order by ID
    getOrder: async (id) => {
        try {
            const response = await apiHook.get(`/orders/${id}/`);
            return response.data;
        } catch (error) {
            console.error('Error fetching order:', error);
            throw error;
        }
    },

    // Create a new order (checkout)
    createOrder: async (orderData) => {
        try {
            const response = await apiHook.post('/orders/', orderData);
            return response.data;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    },

    // Update an order (limited fields)
    updateOrder: async (id, orderData) => {
        try {
            const response = await apiHook.patch(`/orders/${id}/`, orderData);
            return response.data;
        } catch (error) {
            console.error('Error updating order:', error);
            throw error;
        }
    }
};

export default orderService;
