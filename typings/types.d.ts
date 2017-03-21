/**
 * @class QuickSort
 */
export declare class QuickSort {
   /**
    * @class QuickSort
    */
   constructor();

   /**
    * Recursive quick sort
    * @param {!Array<number>} arr - The array to sort
    * @param {!number} left - The left side of the partly sorted array
    * @param {!number} right - The right side of the partly sorted array
    * @private
    * @returns {void}
    */
   private static _sort(arr: number[], left: number, right: number): void;

   /**
    * Sort an array with QuickSort.
    * @param {Array<number>} arr - The array to sort
    * @returns {Array<number>} The sorted array
    */
   sort(arr: number[]): number[];

}

/** @class Utils */
declare class Utils {
   /** @class Utils */
   constructor();

   /**
    * Check if a given array is sorted ascending
    * @param {!Array<number>} arr - The array to check
    * @returns {returnStatus}
    */
   isArraySortedAscending(arr: number[]): returnStatus;

   /**
    * Get part of an array
    * @param {!Array<number>} arr - The array to check
    * @param {!number} length - The array to check
    * @returns {returnStatus}
    */
   getPartOfArray(arr: number[], length: number): returnStatus;

}

/**
 * @typedef {Object} returnStatus
 * @param {!string} status
 * @param {!(boolean|string|Array<number>)} result
 * @param {string} error
 */
type returnStatus = Object;

