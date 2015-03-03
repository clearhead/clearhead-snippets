/* _optimizely_evaluate=force */
window.clearhead = window.clearhead || {};
/**
 * Simple (get|set)Cookie
 */
window.clearhead.setCookie = function (name, value, optDays) {
  'use strict';
  var expires = '';
  if (optDays) {
    var date = new Date();
    date.setTime(date.getTime() + (optDays * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
};
window.clearhead.getCookie = function (name) {
  'use strict';
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
/* _optimizely_evaluate=safe */
;/* _optimizely_evaluate=force */
/**
 * Get querystring param by name
 * ```
 *    window.location.search; // ?foo=bar
 *    clearhead.getParam('foo'); // bar
 * ```
 */
window.clearhead = window.clearhead || {};
window.clearhead.getParam = function (name) {
  'use strict';
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(location.search);
  return results === null ?
    '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
/* _optimizely_evaluate=safe */
;/* _optimizely_evaluate=force */
/**
 * Async Load script w/ callback.
 * Works in IE9+
 * ```
 *    clearhead.loadScript(
 *      '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
 *      function (){ alert(typeof window.$) }
 *    );
 * ```
 */
window.clearhead = window.clearhead || {};
window.clearhead.loadScript = function (url, callback) {
  'use strict';
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = url;
  if (typeof callback === 'function') {
    ga.onload = callback;
  }
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
};
/* _optimizely_evaluate=safe */
