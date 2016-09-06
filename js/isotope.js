
// Функционал галереи работ -----------------------------------------------------------------------

(function($) {

	$('#portfolio-works').isotope({
		// options
		itemSelector: '.works-item',
		layoutMode: 'fitRows'
	});

	$(document).ready(function() {
		$('#portfolio-works').isotope({ filter: '*'});
	});

	// Фильтр контента галереи работ

    var $filter = $('#portfolio-filter a');

    $filter.click(function() {

        var $type = $(this).attr('data-type');
        if($type=='all') {
            $('#portfolio-works').isotope({ filter: '*'});
        } else {
                $('#portfolio-works').isotope({ filter: function() {
                	return ($(this).attr('data-type') == $type)
            } });
        }

        $filter.removeClass('active');
        $(this).addClass('active');

    });

})(jQuery);