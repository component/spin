/**
 * Module dependencies.
 */

var Spinner = require('spinner')
  , debug = require('debug')('spin')
  , css = require('css')
  , removed = require('removed');

/**
 * Add a spinner to `el`,
 * and adjust size and position
 * based on `el`'s box.
 *
 * Options:
 *
 *    - `delay` milliseconds defaulting to 300
 *    - `size` size defaults to 1/5th the parent dimensions
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Spinner}
 * @api public
 */

module.exports = function(el, options){
  if (!el) throw new Error('element required');

  var appended = false;
  var spin = new Spinner(el);
  options = options || {};
  var ms = options.delay || 300;

  // update size and position
  spin.update = function(){
    debug('update');
    var w = el.offsetWidth;
    var h = el.offsetHeight;

    // size
    var s = options.size || w / 5;
    spin.size(s);
    debug('show %dpx (%dms)', s, ms);

    // position
    css(spin.el, {
      position: 'absolute',
      top: h / 2 - s / 2,
      left: w / 2 - s / 2
    });
  }

  spin.update();

  // remove
  spin.remove = function(){
    debug('remove');
    if (appended) el.removeChild(spin.el);
    spin.stop();
    clearTimeout(timer);
  };

  // append
  var timer = setTimeout(function(){
    debug('append');
    appended = true;
    el.appendChild(spin.el);
  }, ms);

  removed(spin.el, function() {
    appended = false;
  });

  return spin;
};