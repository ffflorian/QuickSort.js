'use strict';

/** @class Utils */
class Utils {
    /**
     * @typedef {Object} returnStatus
     * @param {!string} status
     * @param {!(boolean|string|Array<number>)} result
     * @param {string} error
     */

    /**
     * Check if a given array is sorted ascending
     * @param {!Array<number>} arr - The array to check
     * @returns {returnStatus}
     */
    isArraySortedAscending (arr) {
        if (!(arr instanceof Array)) {
            return false;
        }
        for (let i = 0; i < arr.length - 1; i++) {
            // walk through the whole array and return the function
            // if one element is bigger than the element behind it.
            if (arr[i] > arr[i+1]) {
                const error = `${arr[i]} > ${arr[i+1]}`;
                return {
                    status: 'error',
                    result: false,
                    error: error
                };
            }
        }
        return {
            status: 'success',
            result: true,
            error: null
        };
    }

    /**
     * Get part of an array
     * @param {!Array<number>} arr - The array to check
     * @param {!number} length - The array to check
     * @returns {returnStatus}
     */
    getPartOfArray (arr, length) {
        if (!(arr instanceof Array)) {
            return {
                status: 'error',
                result: null,
                error: 'No array given'
            };
        }
        if (typeof length !== 'number' || length >= arr.length) {
            // if the given length is bigger or the same size
            // as the array, return the whole array as string
            return {
                status: 'error',
                result: arr,
                error: 'No or too large number given'
            };
        }
        const partOfArray = arr.slice(0, length).join(', ');
        return {
            result: 'success',
            result: `[ ${partOfArray}, ... ]`,
            error: null
        };
    }
}

module.exports = Utils;
