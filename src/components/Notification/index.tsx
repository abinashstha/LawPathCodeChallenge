import { toast } from 'react-toastify';
import { notificationConfig } from '../../constants';

export const showSuccess = (message: string) => {
    return toast.success(message, notificationConfig);
};

export const showError = (message: string) => {
    return toast.error(message, notificationConfig);
};
