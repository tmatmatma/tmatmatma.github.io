

$( document ).ready(function() {


    console.log('ready');
	$(".main-img").each(function() {
			$(this).css('background-image', 'url(' + 'assets/img/' + $(this).parent('div').attr('id') + '/img1' + '.jpg' + ')');
	});




    count = 0;

    	$(".main-img").on('click', function() {



    		if (count < 5) {
    		
    		    var displayImage = $(this).parent('div').attr('id');




        count++;
        $(this).css('background-image', 'url(' + 'assets/img/' + displayImage + '/img' + count + '.jpg' + ')');
    } else {
    	count = 0;
    }
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