/* _optimizely_evaluate=force */
/**
 * Simple (get|set)Cookie
 */
window.clearhead = window.clearhead || {};
window.clearhead.setCookie = function (name, value, optDays) {
	var expires = '';
	if (optDays) {
		var date = new Date();
		date.setTime(date.getTime() + (optDays * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
};
window.clearhead.getCookie = function (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};
/* _optimizely_evaluate=safe */