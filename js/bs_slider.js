

// Слайдеры формы обратной связи -----------------------------------------------------------------------

(function($) {

	$('#project-estimate').slider({
		formatter: function(value) {
			return value + '$';
		}
	});

	$('#time-frame').slider({
		formatter: function(value) {
			return value + ' weeks';
		}
	});

})(jQuery);