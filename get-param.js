/* _optimizely_evaluate=force */
/**
 * Get querystring param by name
 * ```
 * 	  window.location.search; // ?foo=bar
 *    clearhead.getParam('foo'); // bar
 * ```
 */
window.clearhead = window.clearhead || {};
window.clearhead.getParam = function (name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
		results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
/* _optimizely_evaluate=safe */