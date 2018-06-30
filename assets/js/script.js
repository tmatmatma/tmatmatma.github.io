

$( document ).ready(function() {

					// function increment_last(v) {
					//     return v.replace(/[0-9]+(?!.*[0-9])/, function(match) {
					//         return parseInt(match, 10)+1;
					        
					//     });
					// }
					// console.log(increment_last);



    console.log('radd');
	$(".main-img").each(function() {
			$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1.jpg' + ')');
	

	});




	$(".main-img").on('click', function() {
		var displayImage = $(this).parent('div').attr('id');
		var str = $(this).css('background-image');
		str = str.replace(/[0-9]+(?!.*[0-9])/, parseInt(str.match(/[0-9]+(?!.*[0-9])/), 10)+1);
		console.log(str);
		//$(this).css('background-image', str);

			$.get(str)
			.success(function(d){
			    $(this).css('background-image', str);
			})
			.error(function(d){
			    $(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img1.jpg' + ')');
			});

	});


	
	//$(this).css('background-image', str);




    //$(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');



	  
 


    	// $(".main-img").on('click', function() {
    	// 	var lastNumber = this.match(/\d+$/);
    	// 	console.log(lastNumber);
    	// 	//count++;
    	// 	var displayImage = $(this).parent('div').attr('id');

    	// 	$(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');
    		 

			// $.get('assets/img/' + displayImage + '/img' + count + '.jpg')
			// .success(function(d){
			//     console.log('yay');
			// })
			// .error(function(d){
			//     count = 1;
			//     $(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img1.jpg' + ')');
			// });

    		//if (count < 5) {
          

    // } else {
    // 	count = 0;
    // }



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