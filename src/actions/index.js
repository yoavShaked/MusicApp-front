import axios from 'axios';
import YTSearch from 'youtube-api-search';
const url = 'https://music-yoav.herokuapp.com/api';
const youtubeSearchUrl = 'https://www.googleapis.com/youtube/v3/search';
export const AUTH_USER = 'sign_up_user';
export const ERROR_MSG = 'error_msg';
export const LOGIN_USER = 'login_user';
export const LOGIN_FAILD = 'login_faild';
export const SEARCH_RESULTS = 'search_results';
export const SEARCH_FAILD = 'search_faild';

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

export const searchByTerm = term => async dispatch =>{
    // try{
    //     YTSearch({key: api_key, term, maxResults: 20, type: 'video', part: 'snippet'}, videos =>  dispatch({type: SEARCH_RESULTS, payload: videos}));        
    // }
    // catch(ex){
    //     dispatch({type: SEARCH_FAILD, payload: 'Search faild.'});
    // }
}