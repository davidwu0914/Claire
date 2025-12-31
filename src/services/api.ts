import axios from 'axios';
import { BookingData } from '../types';

const API_BASE_URL = 'https://api.example.com'; // 替換為實際的API基礎URL

export const fetchServices = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/services`);
        return response.data;
    } catch (error) {
        throw new Error('獲取服務時出錯: ' + (error as Error).message);
    }
};

export const submitBooking = async (bookingData: BookingData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('提交預約時出錯: ' + (error as Error).message);
    }
};