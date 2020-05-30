$(document).ready(function() {
	$('.slider').each(function( index ) {
	$(this).append('<div class="slideroverlay"></div>')
	});




	$( ".btn-simple" ).each(function(index) {

		$(this).addClass('off');

    	$(this).find('.clickarea').on("mousedown", function(){
    		$(this).parent().toggleClass('pressed');
    	});
    	$(this).find('.clickarea').on("mouseup", function(){
    		$(this).parent().toggleClass('pressed');
		});

    		


    	
	});

    	
});
