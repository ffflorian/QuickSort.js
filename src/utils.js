'use strict';

export const Utils = {
    isArraySortedAscending (arr) {
        if (!(arr instanceof Array)) {
            return false;
        }
        for (let i = 0; i < arr.length - 1; i++) {
            // walk through the whole array and return the function
            // if one element is bigger than the element behind it.
            if (arr[i] > arr[i+1]) {
                console.log(arr[i] + " > " + arr[i+1]);
                return false;
            }
        }
        return true;
    },
    getPartOfArray (arr, length) {
        if (!(arr instanceof Array)) {
            return null;
        }
        if (typeof length !== 'number' || length >= arr.length) {
            // if the given length is bigger or the same size
            // as the array, return the whole array as string
            return arr;
        }
        let part = "[";
        for (let i = 0; i < length; i++) {
            part += arr[i] + ", ";
        }
        return part + "... ]";
    }
};
