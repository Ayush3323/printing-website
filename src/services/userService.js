import apiHook from './apiConfig';

const userService = {
    getProfile: async () => {
        try {
            const response = await apiHook.get('/users/profile/'); // Adjust path if needed
            return response.data;
        } catch (error) {
            console.error('Error fetching profile:', error);
            throw error;
        }
    },

    getAddresses: async () => {
        try {
            const response = await apiHook.get('/addresses/');
            return response.data.results || response.data;
        } catch (error) {
            console.error('Error fetching addresses:', error);
            throw error;
        }
    }
};

export default userService;
