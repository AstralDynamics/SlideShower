SlideShower.initImages([
  "http://www.deshow.net/d/file/cartoon/2008-12/bob-ross-landscape-painting-281-2.jpg",
  "http://images.fanpop.com/images/image_uploads/JAPAN-LANDSCAPE-japan-419352_1200_900.jpg",
  "http://2.bp.blogspot.com/-Lmea8pj1LN8/TdZcdhsX-YI/AAAAAAAAAC8/S9E7uwgSTIk/s1600/Stunning_Mountain_Landscape.jpg",
  "http://www.wallsave.com/wallpapers/1920x1200/landscapes/242405/landscapes-landscape-free-242405.jpg",
  "http://wallpaperspoint.net/wp-content/walls/7_landscape_wallpaper_04/imagenes-de-paisajes-landscapes-photography_10.jpg"
  ]);
SlideShower.loadImages();

$(document).ready(function () {    
    SlideShower.bindControls();
    SlideShower.displayImages();
});