import axios from 'axios';

const apiHook = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // baseURL: 'http://127.0.0.1:8000/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// Request interceptor
apiHook.interceptors.request.use(
    (config) => {
        // Use Basic Auth credentials if available
        const credentials = localStorage.getItem('authCredentials');
        if (credentials) {
            config.headers.Authorization = `Basic ${credentials}`;
            config.withCredentials = true; // For session cookies
        } else {
            // Fallback to Bearer token if available
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiHook.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // Server responded with a status code outside of 2xx
            console.error('API Error:', error.response.data);
            if (error.response.status === 401) {
                // Handle unauthorized access
                localStorage.removeItem('authCredentials');
                localStorage.removeItem('username');
                if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
                    window.location.href = '/login';
                }
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Network Error:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default apiHook;
