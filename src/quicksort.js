'use strict';

import { Utils } from './utils';

const quickSort = (arr, left, right) => {
    if (!arr instanceof Array || arr.length === 0 || left >= right) {
        return;
    }

    // pick the middle and thus the pivot
    const middle = Math.floor(left + (right - left) / 2);
    const pivot = arr[middle];

    // Divide into two arrays and presort
    let i = left;
    let j = right;
    while (i <= j) {
        /*
         * Find a number on the left side which is greater
         * than the pivot value, and a number from the
         * right side which is less than the pivot value.
         * When the search is complete, we can swap these
         * numbers.
         */
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    // recursively sort the rest of the array
    quickSort(arr, left, j);
    quickSort(arr, i, right);
}

let testArr = [3, 16, 69, 33, 27, 12, 93, 40, 82, 24];
console.log(`Unsorted: ${testArr}`);
quickSort(testArr, 0, testArr.length - 1);
console.log(`Sorted: ${testArr}`);
console.log(`Array is sorted: ${Utils.isArraySortedAscending(testArr)}`)
