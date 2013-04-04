window.onload = (function () {
    imageIndex = 0;
    images = ["http://www.southpacifichotel.com.hk/images/photo-tour-pics/lu_lu_restaurant.jpg",
        "http://i.dailymail.co.uk/i/pix/2012/11/15/article-0-1609D0FF000005DC-373_964x641.jpg"];

    var update = function () {
        imageIndex = imageIndex % images.length;
        document.getElementById("slide").src = images[imageIndex];
    }

    update();

    ui = $("#ui");

    $("#wrapper").hover(function(){
        $("#ui").fadeIn("fast");
    },
    function(){
        $("#ui").fadeOut("fast");
    });

    document.getElementById("forward").onclick = function () {
        imageIndex ++;
        update();
    };

    document.getElementById("back").onclick = function () {
        imageIndex --;
        update();
    };
});
