export const compareByFood = (a, b) => {
    const diff = a.foodScore - b.foodScore;
    return -1 * diff;
}

export const compareByTraffic = (a, b) => {
    const diff = a.trafficScore - b.trafficScore;
    return -1 * diff;
}

export const compareByEducation = (a, b) => {
    const diff = a.educationScore - b.educationScore;
    return -1 * diff;
}

export const compareByAverage = (a, b) => {
    const diff = a.averageScore - b.averageScore;
    return -1 * diff;
}