$(function () {

	$(".header__content-btn").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		},
			{
				duration: 1000,
				easing: "swing"
			});
		return false;
	});

});

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__menu').slideToggle();
	});
});
