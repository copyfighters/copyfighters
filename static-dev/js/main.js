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

	// Initialise sharers.
	setSelectOptionRandomly('issue-1');
	setSelectOptionRandomly('issue-2');
	setSelectOptionRandomly('issue-3');
});

function randomNumberFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set the selected option of a dropdown field randomly.
function setSelectOptionRandomly(id)
{
	var selectElement = $('#' + id + '-message-select');
	var numberOptions = selectElement.children('option').length;
	var optionNumber = randomNumberFromInterval(1, numberOptions);
	selectElement.prop('selectedIndex', optionNumber - 1);
	updateLinks(selectElement, id);
}

// Adapt the Facebook and Twitter share links to the newly chosen message.
function updateLinks(selectElement, id)
{
	var selectedIndex = selectElement.prop('selectedIndex');
	var text = selectElement.find('option[value="' + (selectedIndex + 1) + '"]')
		.text();
	$('.' + id + ' .share > .facebook').prop('href',
		'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcopyfighters.eu&quote='
		+ encodeURIComponent(text + ' #copyfighters')
	);
	$('.' + id + ' .share > .twitter').prop('href',
		'https://twitter.com/home?status='
		+ encodeURIComponent(text + ' #copyfighters https://copyfighters.eu')
	);
}

$('#issue-1-message-select').change(function() {
	updateLinks($(this), 'issue-1');
});

$('#issue-2-message-select').change(function() {
	updateLinks($(this), 'issue-2');
});

$('#issue-3-message-select').change(function() {
	updateLinks($(this), 'issue-3');
});

$('#learnmore-link').click(function() {
	$(window).scrollTo('#facts', 250);
	return false;
});

$('.area-2 .btn.show-details').click(function() {
	$('.area-2 div:nth-child(2)').toggle();
	$('.area-2 div:nth-child(3)').toggle();
	var label = $(this).text();
	$(this).text(label == 'View details ↓' ? 'Hide details ↓' : 'View details ↓');
});

$('.area-3 .btn.show-details').click(function() {
	$('.area-3 div:nth-child(2)').toggle();
	$('.area-3 div:nth-child(3)').toggle();
	var label = $(this).text();
	$(this).text(label == 'View details ↓' ? 'Hide details ↓' : 'View details ↓');
});

$('.area-4 .btn.show-details').click(function() {
	$('.area-4 div:nth-child(2)').toggle();
	$('.area-4 div:nth-child(3)').toggle();
	var label = $(this).text();
	$(this).text(label == 'View details ↓' ? 'Hide details ↓' : 'View details ↓');
});

$('.email_form > input').focusin(function() {
	$('.email_form > button').show();
})

$('#email_reload').click(function() {
	$('.email_form').children().hide();
	$('.email_form').css('flex-wrap', 'nowrap');
	$('#id_email').val('').show();
	$('.email_form > button').show();
})

$('#share_fb').click(function() {
	var fbpopup = window.open('https://www.facebook.com/sharer/sharer.php?u=https://copyfighters.eu', 'pop', 'width=600, height=400, scrollbars=no');
	return false;
});

$('#share_twitter').click(function() {
	var twitterpopup = window.open('https://twitter.com/share?url=https://copyfighters.eu', 'pop', 'width=600, height=400, scrollbars=no');
	return false;
})

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
		$('.email_form').children().hide();
		$('.email_form').css('flex-wrap', 'wrap');
		$('.form_status', $form).text(data.status).show();
		$('#email_reload').show();
		$('#email_share').show();
	})
	.fail(function(data, textStatus, errorThrown) {
		//console.log('error: ' + textStatus + ' ' + errorThrown);
		$('.email_form').children().hide();
		$('.email_form').css('flex-wrap', 'wrap');
		$('.form_status', $form).text(data.status).show();
		$('#email_reload').show();
		$('#email_share').show();
	});
});
