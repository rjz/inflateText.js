var inflateText = require('./inflateText');

window.jQuery.fn.inflateText = function (options) {
  this.each(function () {
    var el = this;
    inflateText(el, options);
  });
};

