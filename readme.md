# ng-style [![Build Status](https://travis-ci.org/ajoslin/ng-style.svg?branch=master)](https://travis-ci.org/ajoslin/ng-style)

> Write inline styles for Angular

Takes a style object, prefixes it, and converts it to a CSS string.

Great for use with the angular inline `styles` array.

## Install

```
$ npm install --save ng-style
```


## Usage

#### my-component.ts

```ts
import {Component} from '@angular/core'
import styles from './styles'

@Component({
  selector: 'my-component',
  template: '<h1>Hello!</h1>'
  styles: [styles]
})
class MyComponent {}
```

#### styles.ts

```ts
import ngStyles from 'ng-styles'
import Color from 'color'

export default ngStyles({
  h1: {
    fontSize: '20px',
    color: 'black',
    transition: 'color 250ms' // will be prefixed
  },
  'h1:hover': {
    color: Color('red').alpha(0.5).rgbaString()
  },
})
```

See [to-css](https://github.com/joakimbeng/to-css) for documentation on how to javascript styles in css.

## API

#### `ngStyle(input, [options])` -> `output`

##### input

*Required*
Type: `string`

Lorem ipsum.

##### options

###### foo

Type: `boolean`
Default: `false`

Lorem ipsum.


## License

MIT © [Andrew Joslin](http://ajoslin.com)
