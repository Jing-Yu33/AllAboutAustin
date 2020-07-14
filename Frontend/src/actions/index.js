import * as ActionTypes from '../constants/ActionTypes';
import { DataBase, UserDataBase } from '../apis/DataBase';

export const foodWeight = (weight) => {
    return {
        type: ActionTypes.FOOD_WEIGHT,
        payload: weight
    }
}

export const trafficWeight = (weight) => {
    return {
        type: ActionTypes.TRAFFIC_WEIGHT,
        payload: weight
    }
} 

export const educationWeight = (weight) => {
    return {
        type: ActionTypes.EDUCATION_WEIGHT,
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
            type: ActionTypes.GET_ALL_ZIPCODES,
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
            type: ActionTypes.GET_TOP_ZIPCODES_BY_CATEGORY,
            payload: response.data
        })
    }
}

export const GetOneZipcode = (zipcode) => {
    return async (dispatch) => {
        const response = await DataBase.get(`/zipcodes/${zipcode}`);
        dispatch({
            type: ActionTypes.GET_ONE_ZIPCODE,
            payload: response.data
        })
    }
}

export const GetFilteredZipcodes = (foodGt, trafficGt, educationGt, regions, hospitals, cinemas, sortBy, order) => {
    return async (dispatch) => {
        const response = await DataBase.get("/filter/zipcodes",{
            params: {
                foodGt,
                trafficGt,
                educationGt,
                regions,
                hospitals, 
                cinemas,
                sortBy,
                order
            }
        });
        dispatch({
            type: ActionTypes.GET_FILTERED_ZIPCODES,
            payload: response.data
        })
    }    
}
// export const GetUserZipcodesObject = (zipcodes) => {
//   return async (dispatch) => {
//       const response = await DataBase.get(`/zipcodes/${zipcode}`);
//       dispatch({
//           type: ActionTypes.GET_USER_ZIPCODES_OBJECTS,
//           payload: response.data
//       })
//   }
// }
export const SignIn = (id, name) => {
    return (
        {
            type: ActionTypes.SIGN_IN,
            payload: {
                id: id,
                name: name
            }
        }
    )
}

export const CreateUser = (googleId,userName) => {
    return async () => {
        const User = {
          googleId: googleId,
          userName: userName
        }
        await UserDataBase.post('', User); // {googleId, userName}
    }
}

export const GetUserZipcodes = (id) => {
    return async (dispatch) => {
        const response = await UserDataBase.get(`/${id}`);
        dispatch({
            type: ActionTypes.GET_USER_ZIPCODES,
            payload: {
                id: id,
                zipcodes: response.data
            }
        })
    }
}

export const AddZipcodesToUser = (userId, zipcode) => {
    return async () => {
        await UserDataBase.post(`/${userId}`, zipcode);
    }
}

export const RemoveZipcodesFromUser = (userId, zipcode) => {
    return async () => {
        await UserDataBase.post(`/${userId}/delete`, zipcode);
    }
}

export const SignOut = () => {
    return {
        type: ActionTypes.SIGN_OUT
    }
}