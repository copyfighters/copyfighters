$(document).ready(function(){
	var typed = new Typed('#subtitle', {
		stringsElement: '#subtitle-strings',
		typeSpeed: 30
	});
})

$('#learnmore-link').click(function() {
	$(window).scrollTo('#facts', 250);
	return false;
})