gradecam-promise
================

Provides a Promise/A+ complient Promise and implementation along with associated utility functions.
The purpose of this file is to abstract away from the rest of our code exactly which promise implementation
we are currently using.

Usage is as follows:

```javascript
var p = require(‘gradecam-promise’);

p.when(something).then(...);

function func() {
  return new p.Promise(function(resolve, reject) {
    // do something
    if (condition) {
      resolve();
    } else {
      reject(new Error(‘failed condition.’));
    }
  });
}
```
