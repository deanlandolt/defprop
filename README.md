# defprop

Stupid simple utility for defining memoized properties on objects.

```js
var defprop = require('defprop')

defprop.memoize(SomeClass.prototype, 'foo', function () {
  // ...
})
```
