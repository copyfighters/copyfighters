$(document).ready(function(){
	if ($('#main-title-strings').length > 0) {
		// Initialise typed text only if we are on the homepage.
		var typed = new Typed('#main-title-container', {
			onComplete: function(self) {
				// Fade in navigation and fade out cursor
				$('.typed-cursor').fadeOut();
				$('.header-nav').css('visibility','visible').hide().fadeIn(500);
			},
			stringsElement: '#main-title-strings',
			typeSpeed: 40
		});
	}

	// Initialise countdown.
	$('.countdown').countdown('2018/02/01', function(event) {
		$(this).html(event.strftime('<span>%D</span> Days <span>%H</span> Hours <span>%M</span> Minutes <span>%S</span> Seconds'));
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
		'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcopyfighters.eu&quote=' + encodeURIComponent(text + ' #copyfighters')
	);
	$('.' + id + ' .share > .twitter').prop('href',
		'https://twitter.com/home?status='+ encodeURIComponent(text + ' #copyfighters https://copyfighters.eu')
	);
}

$('.position').click(function() {
	if($(this).children('.position-text').is(':visible')) {
		$(this).children('.position-text').hide();
		$(this).removeClass('col-sm-12').addClass('col-sm-4');
		$('.position').show();
	} else {
		$('.position').hide();
		$(this).show().removeClass('col-sm-4').addClass('col-sm-12');
		$(this).children().show();
	}
});

$('#issue-1-message-select').change(function() {
	updateLinks($(this), 'issue-1');
});

$('#issue-2-message-select').change(function() {
	updateLinks($(this), 'issue-2');
});

$('#issue-3-message-select').change(function() {
	updateLinks($(this), 'issue-3');
});

$('.issue1-intro .show-details').click(function() {
	var $description = $('.issue1-description');
	if ($description.is(':visible')) {
		$description.hide();
		$('.issue2-intro').show(400);
		$('.issue3-intro').show(400);
		$('.issue1-intro .show-details').text('Why is this problematic? ↓');
	}
	else {
		$('.issue2-intro').hide(400);
		$('.issue3-intro').hide(400, function () {
			$description.show(400);
			$('.issue1-intro .show-details').text('← Back');
		});
		$('.issue2-description').hide();
		$('.issue3-description').hide();
	}
});

$('.issue2-intro .show-details').click(function() {
	var $description = $('.issue2-description');
	if ($description.is(':visible')) {
		$description.hide();
		$('.issue1-intro').show(400);
		$('.issue3-intro').show(400);
		$('.issue2-intro .show-details').text('Why is this problematic? ↓');
	}
	else {
		$('.issue1-intro').hide(400);
		$('.issue3-intro').hide(400, function () {
			$description.show(400);
			$('.issue2-intro .show-details').text('← Back');
		});
		$('.issue1-description').hide();
		$('.issue3-description').hide();
	}
});

$('.issue3-intro .show-details').click(function() {
	var $description = $('.issue3-description');
	if ($description.is(':visible')) {
		$description.hide();
		$('.issue1-intro').show(400);
		$('.issue2-intro').show(400);
		$('.issue3-intro .show-details').text('Why is this problematic? ↓');
	}
	else {
		$('.issue1-intro').hide(400);
		$('.issue2-intro').hide(400, function () {
			$description.show(400);
			$('.issue3-intro .show-details').text('← Back');
		});
		$('.issue1-description').hide();
		$('.issue2-description').hide();
	}
});

$('.email_form > input').focusin(function() {
	$('.email_form > button').show();
});

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
