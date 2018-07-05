$(document).ready(function() {
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$([ 'assets/img/proj-1/img1.gif',
    'assets/img/proj-1/img2.gif',
    'assets/img/proj-1/img3.gif',
    'assets/img/proj-1/img4.gif',
    'assets/img/proj-1/img5.gif',

    'assets/img/proj-2/img1.jpg',
    'assets/img/proj-2/img2.jpg',
    'assets/img/proj-2/img3.jpg',
    'assets/img/proj-2/img4.jpg',
    'assets/img/proj-2/img5.jpg',
    'assets/img/proj-2/img6.jpg',

    'assets/img/proj-3/img1.gif',
    'assets/img/proj-3/img2.gif',
    'assets/img/proj-3/img3.gif',
    'assets/img/proj-3/img4.gif',
    'assets/img/proj-3/img5.gif',

    'assets/img/proj-4/img1.gif',
    'assets/img/proj-4/img2.gif',
    'assets/img/proj-4/img3.gif',

    'assets/img/proj-5/img1.jpg',
    'assets/img/proj-5/img2.jpg',

    'assets/img/proj-6/img1.gif',
    'assets/img/proj-6/img2.gif',
    'assets/img/proj-6/img3.gif',
    'assets/img/proj-6/img4.gif',
    'assets/img/proj-6/img5.gif',
    'assets/img/proj-6/img6.gif',
    'assets/img/proj-6/img7.gif',

    'assets/img/proj-7/img1.jpg',
    'assets/img/proj-7/img2.jpg',
    'assets/img/proj-7/img3.jpg',
    'assets/img/proj-7/img4.jpg',
    'assets/img/proj-7/img5.jpg',
    'assets/img/proj-7/img6.jpg',
    'assets/img/proj-7/img7.jpg',
    'assets/img/proj-7/img8.jpg',

    'assets/img/proj-8/img1.gif',
    'assets/img/proj-8/img2.gif',
    'assets/img/proj-8/img3.gif',
    'assets/img/proj-8/img4.gif',
    'assets/img/proj-8/img5.gif',
    'assets/img/proj-8/img6.gif',
    'assets/img/proj-8/img7.gif',
    'assets/img/proj-8/img8.gif',

    'assets/img/proj-9/img1.jpg',
    'assets/img/proj-9/img2.jpg',
    'assets/img/proj-9/img3.jpg',
    'assets/img/proj-9/img4.jpg',
    'assets/img/proj-9/img5.jpg',
    'assets/img/proj-9/img6.jpg',
    'assets/img/proj-9/img7.jpg',
    'assets/img/proj-9/img8.jpg',
    'assets/img/proj-9/img9.jpg',
    'assets/img/proj-9/img10.jpg',
    'assets/img/proj-9/img11.jpg',
    'assets/img/proj-9/img12.jpg',

    'assets/img/proj-11/img1.gif',
    'assets/img/proj-11/img2.gif',
    'assets/img/proj-11/img3.gif',
    'assets/img/proj-11/img4.gif',
    'assets/img/proj-11/img5.gif',
    'assets/img/proj-11/img6.gif',

    'assets/img/proj-12/img1.jpg',
    'assets/img/proj-12/img2.jpg',

    'assets/img/proj-13/img1.gif',
    'assets/img/proj-13/img2.gif',
    'assets/img/proj-13/img3.gif',
    'assets/img/proj-13/img4.gif',

    'assets/img/proj-15/img1.jpg',
    'assets/img/proj-15/img2.jpg',
    'assets/img/proj-15/img3.jpg',
    'assets/img/proj-15/img4.jpg',
    'assets/img/proj-15/img5.jpg',
    'assets/img/proj-15/img6.jpg',
    'assets/img/proj-15/img7.jpg',
    'assets/img/proj-15/img8.jpg',
    'assets/img/proj-15/img9.jpg',

    'assets/img/proj-16/img1.jpg',
    'assets/img/proj-16/img2.jpg',
    'assets/img/proj-16/img3.jpg',
    'assets/img/proj-16/img4.jpg',
    'assets/img/proj-16/img5.jpg',

    'assets/img/proj-17/img1.jpg',
    'assets/img/proj-17/img2.jpg',
    'assets/img/proj-17/img3.jpg',
    'assets/img/proj-17/img4.jpg',
    'assets/img/proj-17/img5.jpg',
    'assets/img/proj-17/img6.jpg',
    'assets/img/proj-17/img7.jpg',
    'assets/img/proj-17/img8.jpg',
    'assets/img/proj-17/img9.jpg',
    'assets/img/proj-17/img10.jpg']).preload();

});
