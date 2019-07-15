export const compareObjectArrays = (arr1: Array<{}>, arr2: Array<{}>, prop: string): any[] => {
    return arr1.filter((obj1: {}) => {
        return !arr2.some((obj2: {}) => {
            return obj1[prop] === obj2[prop]
        });
    });
};


