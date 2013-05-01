var SlideShower = (function (exports) {
  
  var started = false;
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

  // increment the image index
  var nextImage = function () {
    imageIndex < images.length - 1 ? imageIndex++ : imageIndex = 0;
  };
  // decrement the image index
  var prevImage = function () {
    imageIndex > 0 ? imageIndex-- : imageIndex = images.length - 1;
  };

  //changes to next slide and updates
  var nextSlide = function () {
      nextImage();
      updateSlide();
  };

  //changes to previous slide and updates
  var prevSlide = function () {
    prevImage();
    updateSlide();
  }

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

  var bindControls = function () {
    $("#sld-next").click(function () {
      nextSlide();
    });
    $("#sld-prev").click(function () {
      prevSlide
    });
    $("#slideshower").mouseenter(function () {
      $("#sld-controls").fadeIn("fast");
    });
    $("#slideshower").mouseleave(function () {
      $("#sld-controls").fadeOut("fast");
    });
    $(document).keyup(function(e) {
      if (e.keyCode == "39") {
        nextSlide();
      } else if (e.keyCode == "37") {
        prevSlide();
      } else if (e.keyCode == "13") {
        started = true;
        if(times[imageIndex] != -1) {
          slideIntervalHandle = window.setInterval(nextSlide, times[imageIndex]);
        }
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
    if (started && times[imageIndex] != -1) {
      window.clearInterval(slideIntervalHandle);
      slideIntervalHandle = window.setInterval(nextSlide, times[imageIndex]);
    }
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
