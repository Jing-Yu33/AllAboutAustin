import axios from 'axios';

export const DataBase = axios.create({
    // baseURL: "http://api.allaboutaustin-236003.appspot.com"
    // baseURL: "http://api.allaboutaustin.info"

    // baseURL: "http://localhost:8080"
    baseURL: "https://intense-cove-32051.herokuapp.com/"
})

export const UserDataBase = axios.create({
    // baseURL: "http://api.allaboutaustin-236003.appspot.com/user"
    // baseURL: "http://api.allaboutaustin.info/user"
    
    baseURL: "https://intense-cove-32051.herokuapp.com/user"
})