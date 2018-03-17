/**
 * Check if a given array is sorted ascending
 * @param arr The array to check
 */
export const isArraySortedAscending = (arr: Array<number>): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    // walk through the whole array and return the function
    // if one element is bigger than the element behind it.
    if (arr[i] > arr[i+1]) {
      throw new Error(`${arr[i]} > ${arr[i+1]}`);
    }
  }
  return true;
}

/**
 * Get part of an array
 * @param arr The array to split
 * @param length The length of the splitted array
 */
export const getPartOfArray = (arr: Array<number>, length: number): Array<number> => {
  if (length >= arr.length) {
    // if the given length is bigger or the same size
    // as the array, return the whole array as string
    throw new Error('Too large number given');
  }
  return arr.slice(0, length);
}
