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

$('.position').click(function() {
	if($(this).children('.position-text').is(':visible')) {
		$(this).children('.position-text').hide();
		$(this).removeClass('col-md-12').addClass('col-md-4');
		$('.position').show();
	} else {
		$('.position').hide();
		$(this).show().removeClass('col-md-4').addClass('col-md-12');
		$(this).children().show();
	}
});

$('.issue1-intro .show-details').click(function() {
	$('.issue2-intro').hide(400);
	$('.issue3-intro').hide(400, function () {
		$('.issue1-description').show(400);
		$('.issue1-intro .show-details').hide();
		$('.issue1-intro .hide-details').show();
	});
});

$('.issue1-intro .hide-details').click(function() {
	$('.issue1-description').hide();
	$('.issue2-intro').show(400);
	$('.issue3-intro').show(400);
	$('.issue1-intro .show-details').show();
	$('.issue1-intro .hide-details').hide();
});

$('.issue2-intro .show-details').click(function() {
	$('.issue1-intro').hide(400);
	$('.issue3-intro').hide(400, function () {
		$('.issue2-description').show(400);
		$('.issue2-intro .show-details').hide();
		$('.issue2-intro .hide-details').show();
	});
});

$('.issue2-intro .hide-details').click(function() {
	$('.issue2-description').hide();
	$('.issue1-intro').show(400);
	$('.issue3-intro').show(400);
	$('.issue2-intro .show-details').show();
	$('.issue2-intro .hide-details').hide();
});

$('.issue3-intro .show-details').click(function() {
	$('.issue1-intro').hide(400);
	$('.issue2-intro').hide(400, function () {
		$('.issue3-description').show(400);
		$('.issue3-intro .show-details').hide();
		$('.issue3-intro .hide-details').show();
	});
});

$('.issue3-intro .hide-details').click(function() {
	$('.issue3-description').hide();
	$('.issue1-intro').show(400);
	$('.issue2-intro').show(400);
	$('.issue3-intro .show-details').show();
	$('.issue3-intro .hide-details').hide();
});
