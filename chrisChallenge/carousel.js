// Carousel function for the image slider 

$(document).ready(function() {

	// Activate carousel
	$('#myCarousel').carousel();

	// Enable controlers
	$('.left').click(function() {
		$('#myCarousel').carousel('prev');
	});
	$('.right').click(function() {
		$('#myCarousel').carousel('next');
	});

})