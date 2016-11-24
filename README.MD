## quicksort.js

A JavaScript QuickSort implementation.

### Setup

To use the project in Node.js, first install the npm packages:
```bash
$ npm install
```

Now you'll need to convert it to ES5 (because `import` is [not implemented yet](https://github.com/nodejs/help/issues/53)):
```bash
$ npm run babel
```

Now you could use it like this:
```js
'use strict';

import { quickSort } from './quicksort';

const unsortedArray = [15, 13, 1, 22];
const sortedArray = quickSort().sort(unsortedArray);
// sortedArray = [1, 13, 15, 22]
```

You can also run a few tests:
```bash
$ npm test
```

Have fun!
