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