/* _optimizely_evaluate=force */
/**
 * Overwrites and curries optimizely.push with alertify based on
 * querystring clearhead-debug=true>=0 || !!getCookie('chdebug');
 */

(function() {

  // activate when clearhead-debug
  if (/clearhead-debug$/.match(location.href)) {
    setCookie('chdebug', 'true', 365);
  } else if (/clearhead-debug=false/.match(location.href)) {
    setCookie('chdebug', 'true', -1); // delete cookie && return
    return;
  } else if (!getCookie('chdebug')){
    return;
  }

  window.clearhead = window.clearhead || {};

  window['optimizely'].push(["disable", "tracking"]);
  window['optimizely'].push(["log"]);

  var alertifyQueue = [];

  (function() {
    var oldLog = window.console.log;
    window.console.log = function(message) {
      alertifyQueue.push(message);
      oldLog.apply(console, arguments);
    };
  })();

  loadCss('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.core.css');
  loadCss('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.default.css');
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.min.js',
    function() {
      debugger;
      alertify.set({
        delay: 100000
      });
      alertifyQueue.forEach(log);
      alertifyQueue.push = log;
    });

  function log() {
    // var args = [].slice.call(arguments, 0);
      debugger;
    var arg = arguments[0];
    (/Optimizely \/ API \/ Tracking/).match(arg) &&
      window.alertify.success(arg);
    (/Optimizely \/ API \/ Called/).match(arg) &&
      window.alertify.error(arg);
  }

  function setCookie(name, value, optDays) {
    'use strict';
    var expires = '';
    if (optDays) {
      var date = new Date();
      date.setTime(date.getTime() + (optDays * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function getCookie(name) {
    'use strict';
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function loadScript(url, callback) {
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
  }

  function loadCss(url) {
    var fn = ($ && $.fn && $.fn.jquery) ? $ : window.jQuery;
    fn('head').append('<link rel="stylesheet" type="text/css" href="' + url + '" />');
  }
})();
/* _optimizely_evaluate=safe */
