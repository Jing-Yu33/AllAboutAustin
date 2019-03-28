import { DataBase } from '../apis/DataBase';

export const foodWeight = (weight) => {
    return {
        type: "FOOD_WEIGHT",
        payload: weight
    }
}

export const trafficWeight = (weight) => {
    return {
        type: "TRAFFIC_WEIGHT",
        payload: weight
    }
} 

export const educationWeight = (weight) => {
    return {
        type: "EDUCATION_WEIGHT",
        payload: weight
    }
}

export const GetAllZipcodes = (category, sortBy, order, amount) => {
    return async (dispatch) => {
        const response = await DataBase.get("/zipcodes",{
            params: {
                category,
                sortBy,
                order,
                amount
            }
        });
        dispatch({
            type: "GET_ALL_ZIPCODES",
            payload: response.data
        })
    }
}

export const GetOneZipcode = (zipcode) => {
    return async (dispatch) => {
        const response = await DataBase.get(`/zipcodes/${zipcode}`);
        dispatch({
            type: "GET_ONE_ZIPCODE",
            payload: response.data
        })
    }
}