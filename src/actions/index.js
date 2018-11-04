import axios from 'axios';
const url = 'https://music-yoav.herokuapp.com/api';

export function signUp(user){
    return axios.post(`${url}/users`, user);
}

export function login(user){
    return axios.post(`${url}/auth`, user);
}