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

$('.area-2 .btn').click(function() {
	$('.area-2 div:nth-child(2)').toggle();
});

$('.area-3 .btn').click(function() {
	$('.area-3 div:nth-child(2)').toggle();
});

$('.area-4 .btn').click(function() {
	$('.area-4 div:nth-child(2)').toggle();
});

$('.email_form').submit(function(event) {
	event.preventDefault();
	$.ajax({
		type: 'POST',
		url: $(this).attr('action'),
		data: $(this).serialize(),
		dataType: 'json'
	}).done(function(jqXHR, textStatus) {
		//console.log('win: ' + textStatus);

		// todo: show success
	})
	.fail(function(jqXHR, textStatus, errorThrown) {
		//console.log('error: ' + textStatus + ' ' + errorThrown);
		
		// todo: show error
	});
});
