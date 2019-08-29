# quick-sort [![Build Status](https://action-badges.now.sh/ffflorian/quick-sort)](https://github.com/ffflorian/quick-sort/actions/) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/quick-sort)](https://dependabot.com)

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
