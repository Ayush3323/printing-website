import apiHook from './apiConfig';

const zakekeService = {
    /**
     * Get a Zakeke access token from our backend.
     */
    getToken: async () => {
        try {
            const response = await apiHook.get('/zakeke/token/');
            return response.data.access_token;
        } catch (error) {
            console.error('Error fetching Zakeke token:', error);
            throw error;
        }
    },

    /**
     * Test authentication with Zakeke through our backend.
     */
    testAuth: async () => {
        try {
            const response = await apiHook.get('/zakeke/test_auth/');
            return response.data;
        } catch (error) {
            console.error('Error testing Zakeke auth:', error);
            throw error;
        }
    },

    /**
     * Get details for a specific Zakeke design.
     */
    getDesignDetails: async (designId) => {
        try {
            const response = await apiHook.get(`/zakeke/designs/${designId}/`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching Zakeke design details for ID ${designId}:`, error);
            throw error;
        }
    },

    async registerOrder(orderData) {
        const response = await apiHook.post('/zakeke/order/', orderData);
        return response.data;
    }
};

export default zakekeService;
