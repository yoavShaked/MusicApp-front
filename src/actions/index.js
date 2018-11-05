import axios from 'axios';
const url = 'https://music-yoav.herokuapp.com/api';

export const AUTH_USER = 'sign_up_user';
export const ERROR_MSG = 'error_msg';
export const signUp = user => async dispatch => {
    try {
        const response = await axios.post(`${url}/users`, user);
        dispatch({type: AUTH_USER, payload: response.data.token});
    }
    catch (ex) {
        dispatch({type: ERROR_MSG, payload: 'Email in use.' });
    }
}
