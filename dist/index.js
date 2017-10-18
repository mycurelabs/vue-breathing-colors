module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breathingColors = __webpack_require__(1);

var _breathingColors2 = _interopRequireDefault(_breathingColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreathingColors = {
  install: function install(Vue, options) {
    (0, _breathingColors2.default)(Vue);
  }
};

exports.default = BreathingColors;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var validate = function validate(colors, interval, transition) {
  if (!colors) {
    console.warn('Breathing Colors Warn: Colors is ' + colors + '. Array of colors is required.');
    return;
  }

  if (!interval) {
    console.warn('Breathing Colors Warn: Interval is ' + colors + '. Animation interval is required.');
    return;
  }

  if (typeof interval !== 'number') {
    console.warn('Breathing Colors Warn: Interval expects a number got - ' + (typeof interval === 'undefined' ? 'undefined' : _typeof(interval)) + '.');
    return;
  }

  if (!transition) {
    console.warn('Breathing Colors Warn: Transition object is ' + interval + '. Transition object required,.');
    return;
  }

  if (!transition.duration) {
    console.warn('Breathing Colors Warn: Transition duration is ' + transition.duration + '. Transition duration is required.');
    return;
  }

  if (typeof transition.duration !== 'number') {
    console.warn('Breathing Colors Warn: Transition duration expects a number got - ' + _typeof(transition.duration) + '.');
    return;
  }
};

exports.default = function (Vue) {
  Vue.directive('breathing-colors', {
    inserted: function inserted(el) {
      console.log(el);
    },
    bind: function bind(el, binding, vnode) {
      var name = binding.name,
          value = binding.value,
          oldValue = binding.oldValue,
          expression = binding.expression,
          arg = binding.arg,
          modifiers = binding.modifiers;
      var colors = value.colors,
          interval = value.interval,
          transition = value.transition;
      var hover = modifiers.hover,
          random = modifiers.random;


      validate(colors, interval, transition);

      var count = colors.length;
      colors = new Array(colors)[0].reverse();
      transition = 'background-color ' + (transition.duration || 1000) + 'ms linear ' + (transition.delay ? transition.delay + 'ms' : '');

      el.style.backgroundColor = colors[colors.length - 1];
      el.style['-webkit-transition'] = transition;
      el.style['-moz-transition'] = transition;
      el.style['-o-transition'] = transition;
      el.style.transition = transition;

      var animate = function animate() {
        if (random) {
          var num = Math.round(Math.random() * colors.length);
          el.style.backgroundColor = colors[num];
        } else {
          el.style.backgroundColor = colors[--count];
          if (count === 0) {
            count = colors.length;
          }
        }
      };

      if (hover) {
        el.onmouseover = function () {
          animate();
        };
      } else {
        setInterval(function () {
          animate();
        }, interval);
      }
    }
  });
};

/***/ })
/******/ ]);