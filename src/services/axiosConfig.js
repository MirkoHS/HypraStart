// services/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_MAIL_API,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
