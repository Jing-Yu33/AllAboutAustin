import axios from 'axios';

export const DataBase = axios.create({
    baseURL: 'http://localhost:8080/api'
})