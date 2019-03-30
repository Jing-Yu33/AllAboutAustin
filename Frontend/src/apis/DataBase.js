import axios from 'axios';

export const DataBase = axios.create({
    baseURL: "https://allaboutaustinapi.appspot.com/api"
})