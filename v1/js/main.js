$(document).ready(function() {
    var ui = $("#ui");
    var imageIndex = 0;
    var images = ["http://www.southpacifichotel.com.hk/images/photo-tour-pics/lu_lu_restaurant.jpg",
        "http://i.dailymail.co.uk/i/pix/2012/11/15/article-0-1609D0FF000005DC-373_964x641.jpg"];

    var update = function () {
        imageIndex = imageIndex % images.length;
        $("#slide").attr("src", images[imageIndex]);
    }

    $("#wrapper").hover(function(){
        $("#ui").fadeIn("fast");
    },
    function(){
        $("#ui").fadeOut("fast");
    });

    $("#forward").click(function () {
        imageIndex ++;
        update();
    });

    $("#back").click(function () {
        imageIndex --;
        update();
    });

    update();
});
