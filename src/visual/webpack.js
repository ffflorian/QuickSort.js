'use strict';

const quickSort = require('../../dist/quicksort').quickSort;
const utils = require('../../dist/utils').utils;

const unsortedArray = [5, 3];
const sortedArray = quickSort().sort(unsortedArray);
console.log(utils.isArraySortedAscending(sortedArray).result);
