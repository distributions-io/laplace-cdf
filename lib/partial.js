'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( mu, b )
*	Partially applies location parameter `mu` and scale parameter `b` and returns a function for evaluating the cumulative distribution function (CDF) for a Laplace distribution.
*
* @param {Number} mu - location parameter
* @param {Number} b - scale parameter
* @returns {Function} CDF
*/
function partial( mu, b ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Laplace distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
