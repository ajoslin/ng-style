'use strict'

const toCss = require('style-css')
const prefixAll = require('inline-style-prefix-all')

export default function ngStyle (object: Object): string {
  return toCss(prefixAll(object))
}
