'use strict'

var cssKey = require('css-key')
var toCss = require('to-css')
var prefixAll = require('inline-style-prefix-all')

ngStyle.default = ngStyle

module.exports = ngStyle

function ngStyle (object) {
  var prefixed = prefixAll(object)

  return toCss(cssKeys(prefixed))
}

function cssKeys (object) {
  var out = {}
  for (var key in object) {
    if (typeof object[key] === 'object' &&
        !Array.isArray(object[key])) {
      out[cssKey(key)] = cssKeys(object[key])
    } else {
      out[cssKey(key)] = object[key]
    }
  }
  return out
}
