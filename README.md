# vue-breathing-colors
**Vue Breathing Colors** is a vue directive used to change background color of any component in a "breathing like" manner.

[Demo](http://jofftiquez.github.io/vue-breathing-colors)

## Installation

**NPM**

`npm install vue-breathing-colors --save`

**Yarn**

`yarn add vue-breathing-colors`

**CDN**

`<script scr="https://unpkg.com/vue-breathing-colors@<VERSION>/dist/vue-breathing-colors.js">`

## Usage

```javscript
import Vue from 'vue';
import BreathingColors from 'vue-breathing-colors';

Vue.use(BreathingColors);
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Breathing Colors</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.js"></script>
  <script src="https://unpkg.com/vue-breathing-colors@<VERSION>/dist/vue-breathing-colors.js"></script>
</head>
<body>
  <div id="app"></div>
  <script>
    Vue.use(BreathingColors.default);
    var vm = new Vue({
      el: '#app'
    });
  </script>
</body>
</html>
```

## Sample

**Auto**

The colors will change from array index `0` to array index `n` and back to `0` again.

*html*
```html
<div v-breathing-colors="sample"></div>
```

*js*
```javascript
export default {
  data() {
    return {
      sample: {
        colors: ['red', 'green', 'blue'],
        interval: 3000,
        transition: {
          duration: 1000
        }
      }
    }
  }
}
```

## API

The main data needed by the directive is an object with 3 required fields `colors:Array`, `intervale:Number`, `transition:[Object, duration:Number]`.

| Object | Type | Decription |
| ------ | ---- | ---------- |
| `colors` | Array | Array of string colors. E.g. `#fff`, `#000000`, `red`, `rgb()`, `rgba()`.
| `interval` | Number (millis) | Interval indicates how often the color should change. |
| `transition.duration` | Number (millis) | The duration of transition timing. |

## Modifiers

There 2 modifiers for this version, the `hover` and `random`.

| Modifier | Usage | Description |
| -------- | ----- | ----------- |
| `random` | `v-breathing-colors.random` | Using the random modifier will... you know, change the colors in random. |
| `hover` | `v-breathing-colors.hover` | Unlike the auto, hover will disrespect the inverval from the data object. The color will change in the auto order `0`,`1`,`2`,`3`,etc.. but only when the `onmouseover` event was triggered. |

## Tips

1. Modifiers can be combibed like `v-breathing-colors.random.hover`.
2. For best result, always keep in mind that the `interval` should always be greater of at least `200%` than the `transition.duration`. Say, the `transition.duration` is 1000, the minimum `interval` should be at least 2000.

## More coming soon

More modifiers will be added for future versions. 

Made with :heart: by Jofferson Ramirez Tiquez