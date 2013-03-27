window.onload = (function () {
	img = new Image();
	img.src = "http://www.southpacifichotel.com.hk/images/photo-tour-pics/lu_lu_restaurant.jpg";
	viewport = $("#main-viewer")[0];
	ctx = viewport.getContext("2d");
	ui = $("#ui");
	ctx.drawImage(img, 0, 0, viewport.width, viewport.height);

	$("#main-viewer").mouseover(function () {
		console.log("in");
		ui.fadeIn();
	});

	$("#main-viewer").mouseout(function () {
		console.log("out");
		ui.fadeOut();
	});
});