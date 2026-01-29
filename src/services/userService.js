import apiHook from './apiConfig';
import axios from 'axios';

const userService = {
    // Authentication
    register: async (userData) => {
        try {
            const response = await apiHook.post('/users/register/', userData);
            return response.data;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    },

    login: async (username, password) => {
        try {
            // Using Basic Auth - Django REST Framework accepts Basic Auth for login
            const credentials = btoa(`${username}:${password}`);

            const response = await apiHook.get('/users/me/', {
                headers: {
                    'Authorization': `Basic ${credentials}`,
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // For session cookies
            });

            // Store credentials for future requests
            localStorage.setItem('authCredentials', credentials);
            localStorage.setItem('username', username);

            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('authCredentials');
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('authCredentials');
    },

    getAuthHeader: () => {
        const credentials = localStorage.getItem('authCredentials');
        return credentials ? `Basic ${credentials}` : null;
    },

    // User Profile
    getProfile: async () => {
        try {
            const response = await apiHook.get('/users/me/');
            return response.data;
        } catch (error) {
            console.error('Error fetching profile:', error);
            throw error;
        }
    },

    updateProfile: async (data) => {
        try {
            const response = await apiHook.patch('/users/me/', data);
            return response.data;
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error;
        }
    },

    // Addresses
    getAddresses: async () => {
        try {
            const response = await apiHook.get('/addresses/');
            return response.data.results || response.data;
        } catch (error) {
            console.error('Error fetching addresses:', error);
            throw error;
        }
    },

    createAddress: async (addressData) => {
        try {
            const response = await apiHook.post('/addresses/', addressData);
            return response.data;
        } catch (error) {
            console.error('Error creating address:', error);
            throw error;
        }
    },

    updateAddress: async (id, addressData) => {
        try {
            const response = await apiHook.patch(`/addresses/${id}/`, addressData);
            return response.data;
        } catch (error) {
            console.error('Error updating address:', error);
            throw error;
        }
    },

    deleteAddress: async (id) => {
        try {
            const response = await apiHook.delete(`/addresses/${id}/`);
            return response.data;
        } catch (error) {
            console.error('Error deleting address:', error);
            throw error;
        }
    }
};

export default userService;
