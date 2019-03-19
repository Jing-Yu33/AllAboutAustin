import { DataBase } from '../apis/DataBase';

export const sortCategory = (category) => {
    return {
        type: "SORT_CATEGORY",
        payload: category
    }
}

export const sortOrder = (order) => {
    return {
        type: "SORT_ORDER",
        payload: order
    }
}

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

export const GetAllZipcodes = (sortBy) => {
    return async (dispatch) => {
        const response = await DataBase.get("/zipcodes",{
            params: {
                sortBy
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