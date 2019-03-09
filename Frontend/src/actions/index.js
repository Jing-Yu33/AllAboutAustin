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