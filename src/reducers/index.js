import {combineReducers} from 'redux';
import auth from './auth';
import success from './registersSuccess';

export default combineReducers({
    auth,
    success
});