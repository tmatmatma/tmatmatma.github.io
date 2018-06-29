

$( document ).ready(function() {



    console.log('ready');
	$(".main-img").each(function() {
			$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1' + '.jpg' + ')');
	});




    count = 1;

    	$(".main-img").on('click', function() {
    		count++;


    		//if (count < 5) {
    		
    		    var displayImage = $(this).parent('div').attr('id');
        $(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');

        	$.get('assets/img/' + displayImage + '/img' + count + '.jpg')
			.success(function(d){
			    // video not removed: set thumbnail
			    console.log('yay');
			})
			.error(function(d){
			    // video removed: set your own thumbnail
			    console.log('error');
			});
   //      	$('<img/>').attr('src', 'assets/img/' + displayImage + '/img' + count + '.jpg').off('load', function() {
   // 					//$(this).remove(); // prevent memory leaks as @benweet suggested
   // 					//$('body').css('background-image', 'url(http://picture.de/image.png)');
   // 					//$(".main-img").addClass('has-image');
   // 					console.log('help');
			// });

    // } else {
    // 	count = 0;
    // }
});




});










// var url = "assets/img/" + parentId;
// var fileextension = ".png";

// $.ajax({
//     //This will retrieve the contents of the folder if the folder is configured as 'browsable'
//     url: dir,
//     success: function (data) {
//         //List all .png file names in the page
//         $(data).find("a:contains(" + fileextension + ")").each(function () {
//             var filename = this.href.replace(window.location.host, "").replace("http://", "");
//             $("body").append("<img src='" + dir + filename + "'>");
//         });
//     }
// });