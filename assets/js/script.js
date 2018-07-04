$(document).one('ready', function() {
	 if($(window).width() <= 900) {
	    $('.header').addClass('slide-right');
        $('.header').removeClass('slide-left');
    }
});

$(document).ready(function() {
	        $(window).scroll(function(e) {   
			    if($(window).scrollTop() >=1000  &&   $('.header').hasClass('slide-right') ) {
			       $(window).scrollTop(1000);
			    }
			});

//footnotes	
	$('sup.footnote-sup').each(function(i,n) {
		var footnoteNum = i + 1
	 	$(n).html(footnoteNum);
	});

	$( ".footnote-sup" ).click(function() {
	    $(this).parent().next('.footnote').toggleClass("show");
	    if ($(this).parent().next('.footnote').hasClass("show")) {
	    	$(this).css('color','black');
	    } else {
	    	$(this).css('color','blue');
	    }
	});

//conf vid load
	$("img[src='assets/img/proj-17/img10.jpg']").on('click', function() {
		console.log('help');
	});	

	$('#proj-17 > .main-img').on('click', function() {
		var endConfImg = $('#proj-17 > .main-img').css('background-image');
		 if (endConfImg.indexOf("img10.jpg") >=0) {
		 	$('#proj-17').prepend('<div class="single-mov" id="vid"><video style="width: 100%; height: auto; margin:0;" class="kewlvid" autoplay="" playsinline="" loop="" muted="" src="assets/img/proj-17/human-signage480p.mov"></video></div>');
 		 	$('.main-img').remove();
 		 }
	});
//window resize
	$(window).resize(function() {
        if($(window).width() >= 900) {
            $('.header').addClass('slide-left');
            $('.header').removeClass('slide-right');
            $("#work").html('About');
            $("p:contains('About')").append('<br>⇽');

        } else {
            $("#work").html('Work');
            $("p:contains('Work')").append('<br>⇾');
        }
    }).resize(); 
		
//fool's navigator
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

//yahoo
	$("#yahoo").on('click', function() {
		$("#proj-2 > .main-img").css( "background-image", 'url(' + 'assets/img/proj-2/img2.jpg' + ')' );
	});

//nav card
	$( "#card" ).on('click', function() {
    $(this).closest('.header').toggleClass('slide-left slide-right');

    $("#work").addClass("initiate-treat");
     setTimeout(function() {
          $('.initiate-treat').removeClass();
        }, 1000);
 
     if ($(".header").hasClass('slide-left')) {
        $("#work").html('About');
        $("p:contains('About')").append('<br>⇽');
        $(".header").css({'background' : 'transparent', 'pointer-events':'none'});
        $("#facts").css('display','none');
      } else {
        $("#work").html('Work');
        $("p:contains('Work')").append('<br>⇾');
        $(".header").css('background', 'white');
        $("#facts").css('display','inline');
        //$('#projects').css('position','fixed');
      } 
	});


//open all links in new tab
$(".container a[href^='http://']").attr("target","_blank");
$(".container a[href^='https://']").attr("target","_blank");


});
