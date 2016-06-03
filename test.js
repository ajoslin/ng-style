'use strict'

var test = require('tape')
var ngStyle = require('./')

test(function (t) {
  t.equal(
    ngStyle({
      h1: {
        display: 'flex',
        background: 'red'
      }
    }),
    'h1{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;background:red;}'
  )
  t.end()
})
