import {SUCCESS_REGISTERD} from '../actions/index';
export default function(state = false, action){
    switch(action.type)
    {
        case SUCCESS_REGISTERD:
            return action.payload;
        default:
            return state;
    }
}