export const ASC = 'ascending';
export const DSC = 'descending';

export const sortByTraffic = (a, b, order=DSC) => {
    const diff = a.traffic - b.traffic;
    if (order === ASC) {
        return diff;
    }
    return -1 * diff;
}

export const sortByEducation = (a, b, order=DSC) => {
    const diff = a.education - b.education;
    if (order === ASC) {
        return diff;
    }
    return -1 * diff;
}

export const sortByFood = (a, b, order=DSC) => {
    const diff = a.food - b.food;
    if (order === ASC) {
        return diff;
    }
    return -1 * diff;
}