import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8080/auth/login', { email, password });
        const { token, user } = res.data;

        // Save token in localStorage
        localStorage.setItem('token', token);

        // Dispatch login success action
        dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
    } catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
};