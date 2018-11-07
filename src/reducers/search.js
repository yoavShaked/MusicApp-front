import { SEARCH_RESULTS, SEARCH_FAILD } from './../actions/index';
export default function(state = [], action){
    switch(action.type){
        case SEARCH_RESULTS:
            return {results: action.payload};
        case SEARCH_FAILD:
            return {errorMsg: action.payload};
        default:
            return state;
    }
}