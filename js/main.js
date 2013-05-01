SlideShower.initImages([
  "http://i.animecrazy.net/Xros_Wars_lol.png",
  "http://www.animeout.com/wp-content/uploads/2012/12/cowboy_bebop_desktop_1024x768_wallpaper-276818.jpg",
  "http://images6.alphacoders.com/311/311018.jpg",
  "http://cdn.myanimelist.net/images/characters/11/73929.jpg"
  ],
  [1000, 3000, 2000, 1500]);

SlideShower.loadImages();

$(document).ready(function () {    
    SlideShower.bindControls();
    SlideShower.displayImages();
});
