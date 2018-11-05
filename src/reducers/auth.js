import { AUTH_USER, ERROR_MSG, LOGIN_USER, LOGIN_FAILD } from './../actions/index';

const INITAL_STATE = {
    auth: '',
    err_msg: ''
};

export default function (state = INITAL_STATE, action) {
    switch (action.type) {
        case AUTH_USER:
            return { authUser: action.payload };
        case ERROR_MSG:
            return { errorMsg: action.payload };
        case LOGIN_USER:
            return { loginUser: action.payload };
        case LOGIN_FAILD:
            return { loginFaild: action.payload };
        default:
            return state;
    }
}