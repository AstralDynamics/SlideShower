var SlideShower = (function (exports) {
  
  var images = [];    // array holding image objects
  var imageIndex = 0; // the current image index
  var loaded = false; // have the images been loaded?

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
    }
    loaded = true;
  };

  // add them to the DOM
  var displayImages = function () {
    if(loaded === true) {
      for(var i = 0; i < images.length; i++) {
        $("#slideshower").append(images[i]);
      }
    }
  };
  
  var  = function () {
    $("#slides")
  };

  // increment the image index
  var nextImage = function () {
    imageIndex = imageIndex++ % images.length;
  };
  // decrement the image index
  var prevImage = function () {
    imageIndex = imageIndex++ % images.length;
  };

  // SUPER HELPER METHOD
  var go = function (imgSrc) {
    initImages(imgSrc);
    loadImages();
    displayImages();
  };

  return {
    initImages: initImages,
    loadImages: loadImages,
    nextImage: nextImage,
    prevImage: prevImage,
    go: go
  };

})(SlideShower);