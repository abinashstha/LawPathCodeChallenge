import { ToastOptions } from 'react-toastify';

export const initialFormValue = {
    postcode: 0,
    state: '',
    suburb: '',
};

export const notificationConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    pauseOnHover: true,
    hideProgressBar: true,
};
