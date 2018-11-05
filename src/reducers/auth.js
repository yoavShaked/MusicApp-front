import { AUTH_USER, ERROR_MSG } from './../actions/index';

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
        default:
            return state;
    }
}