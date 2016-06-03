'use strict'

var test = require('tape')
var ngStyle = require('./')

test(function (t) {
  t.equal(
    ngStyle({
      h1: {
        display: 'flex',
        borderRadius: '5px',
        background: 'red',
        transition: '250ms'
      }
    }),
    'h1{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;border-radius:5px;background:red;transition:250ms;-webkit-transition:250ms;}'
  )
  t.end()
})
