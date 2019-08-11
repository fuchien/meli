import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.MELI_API_URL
});

export default axiosInstance;
