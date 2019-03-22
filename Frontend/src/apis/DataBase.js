import axios from 'axios';

export const DataBase = axios.create({
    baseURL: `${process.env.REACT_APP_LOCAL_DATABASE}/api`
})