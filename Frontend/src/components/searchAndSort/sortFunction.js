export const compareByFood = (a, b) => {
    var diff = a.foodScore - b.foodScore;
    if(diff === 0){
        diff = a.averageScore - b.averageScore;
    }
    return -1 * diff;
}

export const compareByTraffic = (a, b) => {
    var diff = a.trafficScore - b.trafficScore;
    if(diff === 0){
        diff = a.averageScore - b.averageScore;
    }
    return -1 * diff;
}

export const compareByEducation = (a, b) => {
    var diff = a.educationScore - b.educationScore;
    if(diff === 0){
        diff = a.averageScore - b.averageScore;
    }
    return -1 * diff;
}

export const compareByAverage = (a, b) => {
    var diff = a.averageScore - b.averageScore;
    if(diff === 0){
        diff = a.averageScore - b.averageScore;
    }
    return -1 * diff;
}