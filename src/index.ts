/**
 * Recursive quick sort
 * @param arr The array to sort
 * @param left The left side of the partly sorted array
 * @param right The right side of the partly sorted array
 */
const _sort = (arr: number[], left: number, right: number): void => {
  if (arr.length === 0 || left >= right) {
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
  _sort(arr, left, j);
  _sort(arr, i, right);
};

/**
 * Sort an array with QuickSort.
 * @param arr The array to sort
 * @returns The sorted array
 */
export const sort = (arr: number[]): number[] => {
  const arrayCopy = arr.slice(0);
  _sort(arrayCopy, 0, arr.length - 1);
  return arrayCopy;
};
