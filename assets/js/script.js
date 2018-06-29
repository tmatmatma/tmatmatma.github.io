
// var images = new Array();

// var parentId = $('.main-img').parent('div').attr('id');

$( document ).ready(function() {


					$("div").error(function(){
					        alert('ERROR!');
					});
    // console.log( "ready!" );
    console.log('ready');
	//var displayImage = $('.main-img').parent('div').attr('id');

	$(".main-img").each(function() {
		// var i;
		// for (var i = 1; i <= 20; i++) {
			$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1' + '.jpg' + ')');

		// }
	});


    // $(".main-img").css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1.jpg' + ')');

    var count=0



    // count = 1;




  //   $.ajax({
  // url: 'assets/img/' + displayImage + '/img' + count + '.jpg',
  // success: function(data){

    	$(".main-img").on('click', function() {



    		if (count < 5) {
    		
    		    var displayImage = $(this).parent('div').attr('id');

// $.ajax({
//     url:'assets/img/' + displayImage + '/img' + count + '.jpg',
//     type:'HEAD',
//     error: function()
//     {
//         count = 1;
//     },
//     success: function()
//     {
//         count++;
//         $(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');
//     }
// });



    		     $(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');
    	

    		    } else {
    		   	count = 1;
    		   }


    		   //  var numofImgs =  $.ajax({
    					// 			url:'assets/img/'+displayImage+'_title.jpg',
   						// 			type:'HEAD',
								 //    error: function()
								 //    { 
								 //      //file doesn't exist
								 //    },
								 //    success: function()
								 //    {
								 //        count++;
								 //    }
									// });


// $.ajax({
//     url:'assets/img/' + displayImage + '/img' + count + '.jpg',
//     type:'HEAD',
//     error: function()
//     { 
//       alert('EMPTY FOLDER');
//     },
//     success: function()
//     {
//         count++;
//     		$(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');
//     }
// });








	// console.log("help");
	// console.log( $(this).parent('div').attr('id') );	
		//if(count===10){count=1}

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