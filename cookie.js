
// NOTE: 2015-03-19 moved to https://github.com/clearhead/optimizely-snippets

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
window.clearhead.deleteCookie = function(name) {
  var expires = '; expires=' + (new Date(0)).toUTCString();
  document.cookie = name + '=; ' + expires + '; path=/';
};
/* _optimizely_evaluate=safe */
