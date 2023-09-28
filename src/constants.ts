import { ToastOptions } from 'react-toastify';

export const initialFormValue: IFormValue = {
    postcode: '',
    state: '',
    suburb: '',
};

export const initialFieldValue: IFieldValue = {
    state: null,
    postcode: null,
    suburb: null,
};

export const notificationConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    pauseOnHover: true,
    hideProgressBar: true,
};
