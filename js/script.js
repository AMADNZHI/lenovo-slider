$(document).ready(function() {

	(function () {
        $('.tab_link').on('click', function(e){
		e.preventDefault();
		var
			$this = $(this),
			item = $this.closest('.tab_item'),
			container = $this.closest('.main'),
			content = container.find('.slideshow_item'),
			ndx = item.index(),
			reqItem = content.eq(ndx),
			activeItem = content.filter('.slideshow_item__active');
			item.addClass('tab_item__active')
				.siblings()
				.removeClass('tab_item__active');
			activeItem.fadeOut(100, function () {
				reqItem.fadeIn(100, function () {
					$(this).addClass('slideshow_item__active')
						.siblings()
						.removeClass('slideshow_item__active');
				});
			});
		});
    })();
});