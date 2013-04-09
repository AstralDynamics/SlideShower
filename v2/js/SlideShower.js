var SlideShower = (function (exports) {
  
  var images = [];    // array holding image objects
  var imageIndex = 0; // the current image index
  var loaded = false; // have the images been loaded?
  var loadedImages = 0;
  // accept an array of image urls
  var initImages = function(imgSrc) {
    images = imgSrc
  };

  // convert them to image objects
  var loadImages = function() {
    for(var i = 0; i < images.length; i++) {
      var src = images[i];
      images[i] = new Image();
      images[i].src = src;
      images[i].onload = loadedNewImage;
    }
    loaded = true;
  };

  // add them to the DOM
  var displayImages = function () {
    if(loaded === true) {
      for(var i = 0; i < images.length; i++) {
        if(i === 0) {
          $(images[i]).addClass('current');
        }
        $("#slides").append(images[i]);
      }
    }
  };
  
  var loadedNewImage = function () {
    loadedImages++;
    console.log(loadedImages)
    var width = loadedImages / images.length * 100;
    $("#sld-progress").animate({"width": width + "%"});
    if(width >= 100) {
      $(".sld-overlay").fadeOut()
    }
  };

  var createFoundation = function () {
    $("#slideshower").append($("<div id='sld-controls'></div>"));
    $("#sld-controls").append($("<div id='sld-prev' class='sld-arr'>&lt;</div>"));
    $("#sld-controls").append($("<div id='sld-next' class='sld-arr'>&gt;</div>"));
    $("#slideshower").append($("<div id='slides'></div>"));

    $("#sld-next").click(function () {
      nextImage();
      updateSlide();
    });
    $("#sld-prev").click(function () {
      prevImage();
      updateSlide();
    });
  };

  var updateSlide = function () {
    var oldSlide = $(".current");
    var newSlide = $("#slides img").get(imageIndex)
    $(newSlide).fadeIn().addClass("current");
    console.log(newSlide, imageIndex)
    $(oldSlide).fadeOut();
    $(oldSlide).removeClass("current");
  };

  // increment the image index
  var nextImage = function () {
    imageIndex < images.length - 1 ? imageIndex++ : imageIndex = 0;
  };
  // decrement the image index
  var prevImage = function () {
    imageIndex > 0 ? imageIndex-- : imageIndex = images.length - 1;
  };

  // SUPER HELPER METHOD
  var go = function (imgSrc) {
    createFoundation();
    initImages(imgSrc);
    loadImages();
    displayImages();
  };

  return {
    initImages: initImages,
    loadImages: loadImages,
    displayImages: displayImages,
    nextImage: nextImage,
    prevImage: prevImage,
    createFoundation: createFoundation,
    go: go
  };

})(SlideShower);
