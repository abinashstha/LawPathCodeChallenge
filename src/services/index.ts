import axios from 'axios';
import { config } from '../utils/config';

export const validateAddress = (address: IAddress) => {
    const { state, suburb } = address;
    return axios.get('/postcode/search.json', {
        params: {
            state,
            q: suburb,
        },
        headers: { 'auth-key': config.authKey },
    });
};
