# QuickSort.js [![Build Status](https://action-badges.now.sh/ffflorian/QuickSort.js)](https://github.com/ffflorian/QuickSort.js/actions/) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/QuickSort.js)](https://dependabot.com)

A TypeScript QuickSort implementation.

## Usage

```ts
import * as quickSort from 'quicksort';

const unsortedArray = [15, 13, 1, 22];
const sortedArray = quickSort.sort(unsortedArray);
// sortedArray === [1, 13, 15, 22]
```

## Tests

```
yarn
yarn test
```
