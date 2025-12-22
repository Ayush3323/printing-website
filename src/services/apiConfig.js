import axios from 'axios';

const apiHook = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// Request interceptor
apiHook.interceptors.request.use(
    (config) => {
        // You can add auth tokens here in the future
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
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
                // window.location.href = '/login';
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
