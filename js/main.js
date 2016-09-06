
// Ресайз картинки brief секции под высоту правого блока

(function($) {

	var img_col = $('#welcome-brief .img-col');
	var text_col = $('#welcome-brief .text-col');

	function bg_resize() {
		if(parseInt(window.innerWidth) > 767) {
			$(img_col).css('height', $(text_col).css('height'));
		}
		else {
			$(img_col).css('height', '300px');
		}
	}

	bg_resize();
	$(window).resize( bg_resize );

})(jQuery);



// Базовая проверка валидности емейла в форме обратной связи-----------------------------------------------------------------------


(function($) {

	var email = $('#contact-form input[name="email"]');
	var submit = $('#contact-form input[type="submit"]');

	email.blur( validate );

	submit.click(function() {
		if(!validate()) {
			alert('Please enter valid Email');
			return false;
		} 
	});

	function validate() {
		var text = email.val();
		if(text.indexOf('@') == -1 || text.indexOf('.') == -1) {
			email.css('background-color', '#fa687d');
			submit.addClass('error');
			return false;
		} else {
			email.css('background-color', '#69c791');
			submit.removeClass('error');
			return true;
		}	
	}

})(jQuery);


// Кнопка закрытия слайдеров -----------------------------------------------------------------------

(function($) {

	var btn = $('.close-btn');
	var sliders = $('.project-details');
	var is_visible = true;

	btn.click(function() {
		if(is_visible) {
			sliders.hide(400);
			is_visible = false;

			// Обнуление значений слайдеров при их закрытии с сохранением старого значения
			save_value($('#project-estimate')); 
			save_value($('#time-frame'));

			btn.css('background', 'none');
			$('.close-btn>span').text('Show project estimate option');
			$('.close-btn>span').addClass('closed');

		} else {

			sliders.show(400);
			is_visible = true;

			// Возрат значений слайдеров при их открытии
			load_value($('#project-estimate'));
			load_value($('#time-frame'));

			btn.css('background', '');
			$('.close-btn>span').text('Hide project estimate option to just say hello');
			$('.close-btn>span').removeClass('closed');
		}
	});

	function save_value(element) {
		element.attr('saved-value', element.attr("value"));
		element.attr('value', 0);
	}
	function load_value(element) {
		element.attr('value', element.attr("saved-value"));
		element.attr('saved-value', 0);
	}

})(jQuery);


// "выключение всех <a> на странице" -----------------------------------------------------------------------

$(document).ready(function() {
    $('a[href="#"]').click(function(event){event.preventDefault();});
});