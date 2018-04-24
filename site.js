// JavaScript Document

$(document).ready(function () {
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
	
	$(".sub_heading").fadeIn(1000);
	$(".main_heading").fadeIn(2000);
	$(".btn-default").animate({
		height:"55px",
		width:"200px",
	});
	$(".btn-danger").animate({
		height:"55px",
		width:"155px",
	});
	
	$("#breakfast").hover(function(){
		$("#example1").fadeIn(1000);
	},function(){
		$("#example1").fadeOut(1000);
	});
	
	$("#snack").hover(function(){
		$("#example2").fadeIn(1000);
	},function(){
		$("#example2").fadeOut(1000);
	});
	
	
	$("#lunch").hover(function(){
		$("#example3").fadeIn(1000);
	},function(){
		$("#example3").fadeOut(1000);
	});
	
	
	$("#snack_2").hover(function(){
		$("#example4").fadeIn(1000);
	},function(){
		$("#example4").fadeOut(1000);
	});
	
	$("#dinner").hover(function(){
		$("#example5").fadeIn(1000);
	},function(){
		$("#example5").fadeOut(1000);
	});

});

function booked() {
    alert("You booked a class!");
}