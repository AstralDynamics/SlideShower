var SlideShower = (function (exports) {
  
  var images = [];    // array holding image objects
  var times = [];     //array holding slide transition times
  var imageIndex = 0; // the current image index
  var imageNumber = 1; //slide number
  var loaded = false; // have the images been loaded?
  var loadedImages = 0;
  // accept an array of image urls
  var slideIntervalHandle;

  var initImages = function(imgSrc, transTimes) {
    images = imgSrc
    times = transTimes;
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

    //set initial slide transition interval
    slideIntervalHandle = window.setInterval(function () {
      nextImage();
      updateSlide();
    }, times[imageIndex]);
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

  var bindControls = function () {
    $("#sld-next").click(function () {
      nextImage();
      updateSlide();
    });
    $("#sld-prev").click(function () {
      prevImage();
      updateSlide();
    });
    $("#slideshower").mouseenter(function () {
      $("#sld-controls").fadeIn("fast");
    });
    $("#slideshower").mouseleave(function () {
      $("#sld-controls").fadeOut("fast");
    });
    $(document).keyup(function(e) {
      if (e.keyCode == "39") {
        nextImage();
        updateSlide();
      } else if (e.keyCode == "37") {
        prevImage();
        updateSlide();
      }
    });
  };

  var updateSlide = function () {
    var oldSlide = $(".current");
    var newSlide = $("#slides img").get(imageIndex)
    $(newSlide).fadeIn("slow").addClass("current");
    console.log(newSlide, imageIndex)
    $(oldSlide).fadeOut("slow");
    $(oldSlide).removeClass("current");
    imageNumber = imageIndex + 1;
    $("#slide_number").html(imageNumber + "/" + images.length);
    window.clearInterval(slideIntervalHandle);
    slideIntervalHandle = window.setInterval(function () {
      nextImage();
      updateSlide();
    }, times[imageIndex]);
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
    initImages(imgSrc);
    loadImages();
    displayImages();
    bindControls();
  };

  return {
    initImages: initImages,
    loadImages: loadImages,
    displayImages: displayImages,
    nextImage: nextImage,
    prevImage: prevImage,
    bindControls: bindControls,
    go: go
  };

})(SlideShower);
