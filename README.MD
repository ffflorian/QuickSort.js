## QuickSort.js

A JavaScript QuickSort implementation.

### ES6 usage

```js
'use strict';

import QuickSort from './QuickSort';

const unsortedArray = [15, 13, 1, 22];
const sortedArray = QuickSort().sort(unsortedArray);
// sortedArray === [1, 13, 15, 22]
```

### Setup for Node.js

To use the project in Node.js, first install the npm packages:
```bash
$ npm install
```

Next you'll need to convert it to ES5 (because `import` is [not implemented yet](https://github.com/nodejs/help/issues/53)):
```bash
$ npm run babel
```

Now you could use it like this:
```js
'use strict';

const QuickSort = require('./QuickSort');

const unsortedArray = [15, 13, 1, 22];
const sortedArray = QuickSort().sort(unsortedArray);
// sortedArray === [1, 13, 15, 22]
```

You can also run a few tests:
```bash
$ npm test
```

Have fun!
