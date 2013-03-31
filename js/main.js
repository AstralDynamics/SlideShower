window.onload = (function () {
	img = new Image();
	img.src = "http://www.southpacifichotel.com.hk/images/photo-tour-pics/lu_lu_restaurant.jpg";
	viewport = $("#slide");
	ui = $("#ui");
	viewport.src = img.src;
	console.log(viewport.src);

	$("#wrapper").hover(function(){
    	$("#ui").fadeIn("fast");
	},
	function(){
		$("#ui").fadeOut("fast");
	});
});
