## QuickSort.js

[![Greenkeeper badge](https://badges.greenkeeper.io/ffflorian/QuickSort.js.svg)](https://greenkeeper.io/)

A JavaScript QuickSort implementation.

### Usage

```js
'use strict';

const QuickSort = require('./QuickSort');

const unsortedArray = [15, 13, 1, 22];
const sortedArray = new QuickSort().sort(unsortedArray);
// sortedArray === [1, 13, 15, 22]
```

### Tests

```bash
$ npm test
```
