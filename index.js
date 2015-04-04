exports.value = function (target, key, value) {
  Object.defineProperty(target, key, { value: value })
  return value
}

exports.memoize = function (target, key, getter) {
  Object.defineProperty(target, key, {
    get: function () {
      var value = getter.call(this)
      return exports.value(this, key, value)
    },
    configurable: true
  })
}
