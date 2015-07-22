'use strict';

// FUNCTIONS //

var exp = Math.exp;


// CDF //

/**
* FUNCTION: cdf( x, mu, b )
*	Evaluates the cumulative distribution function (CDF) for a Laplace distribution with location parameter `mu` and scale parameter `b` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} mu - location parameter
* @param {Number} b - scale parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, mu, b ) {
	var z = ( x - mu ) / b;
	if ( x < mu ) {
		return 0.5 * exp( z );
	} else {
		return 1 - 0.5 * exp( -z );
	}
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
