import axios from 'axios';

export const UserDataBase = axios.create({
    baseURL: "http://localhost:8080/user"
    // baseURL: "https://allaboutaustin-api.appspot.com/api"
})