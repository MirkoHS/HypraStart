import axiosInstance from './axiosConfig';

export const sendContactEmail = async (email, message) => {
    try {
        const response = await axiosInstance.post('/send-contact-email', {
            email,
            message,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
