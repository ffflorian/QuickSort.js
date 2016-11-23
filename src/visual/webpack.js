'use strict';

const quickSort = require('../../dist/quicksort').quickSort;
const utils = require('../../dist/utils').utils;

const unsortedArray = [5, 3, 1, 2, 8];
const sortedArray = quickSort().sort(unsortedArray);

var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
unsortedArray.forEach(function (obj, i, arr) {
    console.log(obj)
    ctx.beginPath();
    ctx.moveTo(0 + (10 * i), 100 - (obj * 10));
    ctx.lineTo(10 + (10 * i), 100 - (obj * 10));
    ctx.lineTo(10 + (10 * i), 100);
    ctx.lineTo(0 + (10 * i), 100);
    ctx.lineTo(0 + (10 * i), 100 - (obj * 10));
    ctx.stroke();
});
