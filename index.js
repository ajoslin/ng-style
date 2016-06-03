'use strict'

const toCss = require('style-css')
const prefixAll = require('inline-style-prefix-all')

module.exports = function ngStyle (object) {
  return toCss(prefixAll(object))
}
