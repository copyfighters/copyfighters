$(document).ready(function(){
	// Initialise typed text.
	var typed = new Typed('#subtitle', {
		stringsElement: '#subtitle-strings',
		typeSpeed: 30
	});

	// Initialise countdown.
	$('.time-left-numbers').countdown('2017/10/10', function(event) {
    $(this).html(event.strftime(
			'<td>%D</td><td>%H</td><td>%M</td><td>%S</td>'));
  });
});

$('#learnmore-link').click(function() {
	$(window).scrollTo('#facts', 250);
	return false;
});

$('.area-2 .btn.show-details').click(function() {
	$('.area-2 div:nth-child(2)').toggle();
	var label = $(this).text();
	$(this).text(label == 'View details ↓' ? 'Hide details ↓' : 'View details ↓');
});

$('.area-3 .btn.show-details').click(function() {
	$('.area-3 div:nth-child(2)').toggle();
	var label = $(this).text();
	$(this).text(label == 'View details ↓' ? 'Hide details ↓' : 'View details ↓');
});

$('.area-4 .btn.show-details').click(function() {
	$('.area-4 div:nth-child(2)').toggle();
	var label = $(this).text();
	$(this).text(label == 'View details ↓' ? 'Hide details ↓' : 'View details ↓');
});

$('.email_form').submit(function(event) {
	event.preventDefault();
	$form = $(this);
	$.ajax({
		type: 'POST',
		url: $(this).attr('action'),
		data: $(this).serialize(),
		dataType: 'json'
	}).done(function(data, textStatus) {
		//console.log('win: ' + textStatus);
		$('.form_status', $form).text(data.status);
	})
	.fail(function(data, textStatus, errorThrown) {
		//console.log('error: ' + textStatus + ' ' + errorThrown);
		$('.form_status', $form).text(data.status);
	});
});
