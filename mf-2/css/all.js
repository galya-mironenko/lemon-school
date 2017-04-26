$('.accordion__content').mCustomScrollbar();
		$('.accordion__link').on('click', function() {
			if ($(this).hasClass('active')) {
				return
			}
			$('.accordion__link.active').next().slideUp();
			$('.accordion__link.active').removeClass('active');
			$(this).next().slideDown();
			$(this).addClass('active');
		});