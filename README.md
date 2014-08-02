# Component CSS for Stylus
-------------------

A [component-css](https://github.com/icodeforlove/component-css) plugin for stylus.

### Installation

You can install through npm as such: `npm install component-css-stylus`

### Usage

You can include component-css-stylus as a normal stylus plugin. Basic example below:

```js
var stylus = require('stylus');
var ccss = require('component-css-stylus');

stylus(css)
  .use(ccss()({prefix: 'app-'}))
  .render(function(err, output){
    console.log(output);
  });
```