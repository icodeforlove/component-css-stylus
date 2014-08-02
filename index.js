var ccss = require('component-css'),
	path = require('path');

/**
 * Returns a wrapped stylus function that adds component-css support.
 *
 * - Returns a function for stylus to use
 * - This function uses the `end` event, and runs autoprefixer on
 *   the css, applying any arguments if present
 *   
 * @return {Function} - stylus plugin function
 */

module.exports = function (config) {
	return function() {
		return function(stylus){
			stylus = stylus || this;

			stylus.on('end', function(err, css){
				return ccss(path.basename(stylus.options.filename, path.extname(stylus.options.filename)), css, config);
			});
		};
	};
};