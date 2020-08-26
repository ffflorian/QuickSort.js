# quick-sort [![Build Status](https://github.com/ffflorian/quick-sort/workflows/Build/badge.svg)](https://github.com/ffflorian/quick-sort/actions/)

A TypeScript QuickSort implementation.

## Usage

```ts
import * as quickSort from 'quick-sort';

const unsortedArray = [15, 13, 1, 22];
const sortedArray = quickSort.sort(unsortedArray);
// sortedArray === [1, 13, 15, 22]
```

## Tests

```
yarn
yarn test
```
