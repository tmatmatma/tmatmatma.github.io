

$( document ).ready(function() {



    console.log('okay');
	$(".main-img").each(function() {
			$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1.jpg' + ')');
	});



	count = 0;
    	$(".main-img").on('click', function() {
    		
    		count++;
    		var displayImage = $(this).parent('div').attr('id');

    		$(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');
    		 

			$.get('assets/img/' + displayImage + '/img' + count + '.jpg')
			.success(function(d){
			    console.log('yay');
			})
			.error(function(d){
			    count = 0;
			    $(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img1.jpg' + ')');
			});

    		//if (count < 5) {
          

    // } else {
    // 	count = 0;
    // }
});


	//currentCount = 
//     count = 1;

//     	$(".main-img").on('click', function() {
//     		 count++;
//     		 var displayImage = $(this).parent('div').attr('id');



//     		//if (count < 5) {
//             $(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');

//     // } else {
//     // 	count = 0;
//     // }
// });

// $.get('http://img.youtube.com/vi/' + videoId + '/0.jpg')
// .success(function(d){
//     // video not removed: set thumbnail
//     div.css("background-image","url('http://img.youtube.com/vi/" + videoId + "/0.jpg')");   
// })
// .error(function(d){
//     // video removed: set your own thumbnail
// });


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