

$(document).ready(function() {
    console.log('readyyyy');
	$(".main-img").each(function() {
		$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1.jpg' + ')');
	});
	$(".main-gif").each(function() {
		$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1.gif' + ')');
	});
	
	$(".main-img").add(".main-gif").on('click', function() {
		var displayImage = $(this).parent('div').attr('id');
		var str = $(this).css('background-image');
		str = str.replace(/[0-9]+(?!.*[0-9])/, parseInt(str.match(/[0-9]+(?!.*[0-9])/), 10)+1);
		$(this).css('background-image', str);		
		var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $(this).css('background-image', str);
		  $.ajax({
		    type: 'HEAD',
		    url: bg,
		    success: function(){    
		    	},
				error:function (xhr, ajaxOptions, thrownError){
    				if(xhr.status==404) {
        			$(".main-img").each(function() {
						$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1.jpg' + ')');
					});
					$(".main-gif").each(function() {
						$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1.gif' + ')');
					});
    			}
		    }
		});
	});
});
