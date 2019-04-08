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

export const GetAllZipcodes = (sortBy, order) => {
    return async (dispatch) => {
        const response = await DataBase.get("/zipcodes",{
            params: {
                sortBy,
                order
            }
        });
        dispatch({
            type: "GET_ALL_ZIPCODES",
            payload: response.data
        })
    }
}

export const GetTop10ZipcodeByCategory = (category, sortBy, order) => {
    return async (dispatch) => {
        const response = await DataBase.get("/zipcodes/top10",{
            params: {
                category,
                sortBy,
                order
            }
        });
        dispatch({
            type: "GET_TOP_ZIPCODES_BY_CATEGORY",
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

export const GetFilteredZipcodes = (foodGt, trafficGt, educationGt, sortBy, order) => {
    return async (dispatch) => {
        const response = await DataBase.get("/filter/zipcodes",{
            params: {
                foodGt,
                trafficGt,
                educationGt,
                sortBy,
                order
            }
        });
        dispatch({
            type: "GET_FILTERED_ZIPCODES",
            payload: response.data
        })
    }    
}