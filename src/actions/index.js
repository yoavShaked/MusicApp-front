import axios from 'axios';

const url = 'https://music-yoav.herokuapp.com/api';

export const AUTH_USER = 'sign_up_user';
export const ERROR_MSG = 'error_msg';
export const LOGIN_USER = 'login_user';
export const LOGIN_FAILD = 'login_faild';
export const SUCCESS_REGISTERD = 'success_registerd'

export const signUp = user => async dispatch => {
    try {
        const response = await axios.post(`${url}/users`, user);
        dispatch({type: AUTH_USER, payload: response.data.token});
    }
    catch (ex) {
        dispatch({type: ERROR_MSG, payload: 'Email in use.' });
    }
}

export const login = user => async dispatch => {
    try{
        const response = await axios.post(`${url}/auth`, user);
        dispatch({type: LOGIN_USER, payload: response.data.token});
    }
    catch(ex){
        dispatch({type: LOGIN_FAILD, payload: 'Wrong email or password.' });
    }
}

export function registeredSuccess(success){

    return {
        type:SUCCESS_REGISTERD,
        payload: success
    }
}