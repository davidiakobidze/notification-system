import axios, {AxiosResponse} from 'axios';
import {Notification, NotificationType} from '../../models/Notification'


const API_URL: string = 'http://localhost:3000';

const notificationAPI = {
    fetch: async (): Promise<Notification[]> => {
        try {
            const response: AxiosResponse<Notification[]> = await axios.get(`${API_URL}/notifications`);
            return response.data;
        } catch (error) {
            console.error('Error fetching notifications:', error);
            throw error;
        }
    },
    create: async (text: string, notificationType: NotificationType): Promise<Notification> => {
        try {
            const notificationData = {
                text,
                notificationType
            }
            const response: AxiosResponse<Notification> = await axios.post(
                `${API_URL}/notifications`,
                notificationData
            );
            return response.data;
        } catch (error) {
            console.error('Error creating notification:', error);
            throw error;
        }
    },
    delete: async (id: string): Promise<string> => {
        try {
            const response: AxiosResponse<string> = await axios.delete(`${API_URL}/notifications/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching notifications:', error);
            throw error;
        }
    },
};

export default notificationAPI;