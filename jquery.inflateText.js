(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 *  InflateText.js -- 95% derived from FitText.js (http://fittextjs.com)
 *
 *  Options
 *  - scale       {Number}  Scaling factor for the final font-size (defaults to 1)
 *  - minFontSize {Number}
 *  - maxFontSize {Number}
 *
 *  @author RJ Zaworski <rj@rjzaworski.com
 *  Released under the WTFPL license
 *  http://sam.zoy.org/wtfpl/
 */

var TEST_SIZE = 96; // An arbitrary size to scale to when testing new font width

var defaults = {
  'scale'       : 1,
  'minFontSize' : Number.NEGATIVE_INFINITY,
  'maxFontSize' : Number.POSITIVE_INFINITY
};

function _extend (obj) {
  [].slice.call(arguments, 1).forEach(function (source) {
    if (source) {
      for (k in source) {
        obj[k] = source[k];
      }
    }
  });
  return obj;
}

function _debounce (callback, interval) {

  var handle;

  return function () {

    var args = [].slice.call(arguments, 0);

    if (handle) {
      clearTimeout(handle);
    }

    handle = setTimeout(function() {
      callback.apply(this, args);
      handle = null;
    }, interval);
  }
}

function _scalingFactor (el) {

  var scalingFactor,
      maskEl = document.createElement('div'),
      testEl = el.cloneNode(true);

  _extend(maskEl.style, {
    height: '1px',
    overflow: 'hidden'
  });

  _extend(testEl.style, {
    display: 'inline',
    fontSize: TEST_SIZE + 'px'
  });

  maskEl.appendChild(testEl);
  document.body.appendChild(maskEl);

  scalingFactor = TEST_SIZE / testEl.offsetWidth;

  document.body.removeChild(maskEl);

  return scalingFactor;
}

module.exports = function (el, options) {

  var maxSize, minSize;

  var settings = {};

  if (!options) options = {};

  _extend(settings, defaults, options);

  minSize = parseFloat(settings.minFontSize),
  maxSize = parseFloat(settings.maxFontSize);

  // Remix: resize items based on object width divided by the scaling factor
  var resizer = function () {

    var scaledSize = settings.scale * el.offsetWidth * _scalingFactor(el);

    // scale font down to fix IE bug
    el.style.fontSize = '12pt';

    // update width
    el.style.fontSize = Math.max(Math.min((scaledSize), maxSize), minSize) + 'px';
  };

  // Call once to set.
  resizer();

  // Call on resize. Opera debounces their resize by default.
  window.addEventListener('resize', _debounce(resizer, 100));
};


},{}],2:[function(require,module,exports){
var inflateText = require('./inflateText');

window.jQuery.fn.inflateText = function (options) {
  this.each(function () {
    var el = this;
    inflateText(el, options);
  });
};


},{"./inflateText":1}]},{},[2])