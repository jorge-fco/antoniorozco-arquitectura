/*
	APP
	Jorge Fco.
	2026
*/
(function($){
	'use strict';

	const APP = {
		init: function(){
			APP.Header();
		},
		Header: function(){
			const Header = document.getElementById("header");
			var $Header = $('.js-header');

			// Check
			if ($('.js-home').length) {
				Header.style.mixBlendMode = "none";
			} else {
				$Header.addClass('is--dark');
				Header.style.mixBlendMode = "difference";

			}
		},
	};

	// Run..
	window.theme = APP;
	window.onload = function() {
		APP.init();
	};

})(jQuery);