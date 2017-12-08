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
});

// Adapt the Facebook and Twitter share links to the newly chosen message.
function updateLinks($selectElement)
{
	var text = $selectElement.text();
	$('.share-specific .share-facebook').prop('href',
		'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcopyfighters.eu&quote=' + encodeURIComponent(text)
	);
	$('.share-specific .share-twitter').prop('href',
		'https://twitter.com/home?status='+ encodeURIComponent(text + ' https://copyfighters.eu')
	);
}

// Add click handler to go to previous statement button.
$('.statements .statement-prev').click(function() {
	var $statement1 = $('.statements .statement1'),
			$statement2 = $('.statements .statement2'),
			$statement3 = $('.statements .statement3');
	if ($statement1.is(':visible')) {
		$statement1.hide();
		$statement2.hide();
		$statement3.show();
		updateLinks($statement3);
	}
	else if ($statement2.is(':visible')) {
		$statement1.show();
		$statement2.hide();
		$statement3.hide();
		updateLinks($statement1);
	}
	else if ($statement3.is(':visible')) {
		$statement1.hide();
		$statement2.show();
		$statement3.hide();
		updateLinks($statement2);
	}
});

// Add click handler to go to next statement button.
$('.statements .statement-next').click(function() {
	var $statement1 = $('.statements .statement1'),
			$statement2 = $('.statements .statement2'),
			$statement3 = $('.statements .statement3');
	if ($statement1.is(':visible')) {
		$statement1.hide();
		$statement2.show();
		$statement3.hide();
		updateLinks($statement2);
	}
	else if ($statement2.is(':visible')) {
		$statement1.hide();
		$statement2.hide();
		$statement3.show();
		updateLinks($statement3);
	}
	else if ($statement3.is(':visible')) {
		$statement1.show();
		$statement2.hide();
		$statement3.hide();
		updateLinks($statement1);
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
	}
	else {
		$description.show();
	}
	$('.issue2-description').hide();
	$('.issue3-description').hide();
});

$('.issue2-intro .show-details').click(function() {
	var $description = $('.issue2-description');
	if ($description.is(':visible')) {
		$description.hide();
	}
	else {
		$description.show();
	}
	$('.issue1-description').hide();
	$('.issue3-description').hide();
});

$('.issue3-intro .show-details').click(function() {
	var $description = $('.issue3-description');
	if ($description.is(':visible')) {
		$description.hide();
	}
	else {
		$description.show();
	}
	$('.issue1-description').hide();
	$('.issue2-description').hide();
});

$('.email_form > input').focusin(function() {
	$('.email_form > button').show();
});

$('#email_reload').click(function() {
	$('.email_form').children().hide();
	$('.email_form').css('flex-wrap', 'nowrap');
	$('#id_email').val('').show();
	$('.email_form > button').show();
});

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
