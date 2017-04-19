$(document).ready(function (){

	$('.appear').click(function() {
		$('div').show();
	});

	$('.disappear').click(function() {
		$('div').hide();
	});

	$('.changestyle').click(function() {
		$('.div1').toggleClass('div2');
	});

	$('.append').click(function (){
		$('.list').append('<li>2</li>');
	});
	
	$('.div1').mouseenter(function() {
		$('.div1').addClass('div3');
	});

	$('.div1').mouseleave(function() {
		$('.div1').removeClass('div3');
	})

	$('.text').mouseenter(function() {
		$('.text').fadeOut();
	});

	$('.text').mouseleave(function() {
		$('.text').fadeIn();
	});

	$('.div1').mouseenter(function() {
		$('.div1').fadeOut();
	});

	$('.fadein').click(function() {
		$('.div1').fadeIn();
	});

	$('.textfont').mouseenter(function() {
		$('.textfont').toggleClass('text text2');
	});

	$('.textfont').mouseleave(function() {
		$('.textfont').toggleClass('text text2');
	});
});