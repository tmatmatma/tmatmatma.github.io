$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.isFullyInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementTop >= viewportTop && elementBottom <= viewportBottom;
};

// $(document).one('ready', function() {
// 	 if($(window).width() <= 750) {
// 	    $('.header').addClass('slide-right');
//         $('.header').removeClass('slide-left');
//     }
// });

$(document).ready(function() {
	$.each($('.project'), function(ind) {
	   $(this).attr('id', 'proj-' + parseInt(ind + 1));
	});



	 if ($(".header").hasClass('slide-left')) {
        $("#work").html('About');
        $(".header").css({'background' : 'transparent', 'pointer-events':'none'});
        $("#facts").css('display','none');
        $("body").removeClass('info');
      } else {
        $("#work").html('Close ⤬');
        $(".header").css({'background' : 'white', 'pointer-events':'all'});
        $("#facts").css('display','inline');
        $("body").addClass('info');
        
      } 
	        $(window).scroll(function(e) { 
			    //if($(window).scrollTop() >=750  &&   $('.header').hasClass('slide-right') ) {
			       //$(window).scrollTop(750);

			    //}
			          	$(".project").each(function(idx, proj) {
			          		var counter = idx+1;
			          		var getEachProj = $(proj).attr('id', 'proj-'+counter);
			          		var getEachMain = getEachProj.find('.main');
			          		if ( getEachMain.isFullyInViewport() ) {
			          			$('.spacer').removeClass('img-active');
							  	$(this).find('.spacer').addClass('img-active');
			          		} else {
			          			$(this).find('.spacer').removeClass('img-active');
			          	}
				});
			});
//hover-hint
		$('.main').on("mouseover", function () {
			$('.spacer').removeClass('img-active');
			$(this).find('.spacer').addClass('img-active');
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

//window resize
	$(window).resize(function() {
        if($(window).width() >= 750) {
            $('.header').addClass('slide-left');
            $('.header').removeClass('slide-right');
            $("#work").html('About');
            //$("p:contains('About')").append('<br>⇽');

        } else {
            //$("#work").html('Work');
            //$("p:contains('Close ⤬')").append('<br>⇾');
        }
    }).resize(); 
		
//navigator
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
		$(".covers > .main-img").css( "background-image", 'url(' + 'assets/img/proj-3/img2.jpg' + ')' );
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
        $(".header").css({'background' : 'transparent', 'pointer-events':'none'});
        $("#facts").css('display','none');
        $("body").removeClass('info');
      } else {
        $("#work").html('Close ⤬');
        $(".header").css({'background' : 'white', 'pointer-events':'all'});
        $("#facts").css('display','inline');
        $("body").addClass('info');
        
      } 
	});




//open all links in new tab
$(".container a[href^='http://']").attr("target","_blank");
$(".container a[href^='https://']").attr("target","_blank");


});
