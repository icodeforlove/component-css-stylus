var ccss = require('node-component-css'),
	path = require('path'),
	_ = require('underscore');

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
				var options = _.clone(config);
				options.name = path.basename(stylus.options.filename, path.extname(stylus.options.filename));
				options.data = css;
				return ccss(options);
			});
		};
	};
};