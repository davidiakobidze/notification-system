import axios, {AxiosResponse} from 'axios';
import {Notification} from '../../models/Notification'


export const API_URL: string = 'http://localhost:3000';

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
};

export default notificationAPI;