/*
	🪚 APP
	JavaScript

	Jorge Fco.™
	©2026
*/
(function($){
	'use strict';

	const APP = {
		init: function(){
			APP.Header();

			// Check
			if($('.js-home').length){
				// Cover
				gsap.to($('.home__cover__thumb img'), 2,{
					delay: 1,
					scale: 1,
					ease: 'power3.inOut'
				});

				gsap.to($('.home__cover__overlay'), 1,{
					delay: 1,
					autoAlpha: 0,
					ease: 'power3.inOut'
				});

				gsap.to($('.home__cover__title h1'), 1,{
					delay: 0,
					y: 0,
					autoAlpha: 1,
					ease: 'power3.inOut'
				});

				gsap.to($('.home__cover__title p'), 1,{
					delay: 0,
					y: 0,
					autoAlpha: 1,
					ease: 'power3.inOut'
				});

				gsap.to($('.home__cover__title a'), 1,{
					delay: 0.5,
					autoAlpha: 1,
					ease: 'power3.inOut'
				});
			}
			// Check
			if($('.js-project').length){

			}
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
		Project: function(){

		}
	};

	// Run..
	window.theme = APP;
	window.onload = function() {
		APP.init();
	};

})(jQuery);