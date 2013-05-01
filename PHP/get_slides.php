<?php

$hut_slides = array("slides/slide1.png",
  		"slides/slide2.png",
			"slides/slide3.png");
$slide_times = array(1000,
				1000,
				1000);
				
$slides=array("slides"=>$hut_slides,
		"times"=>$slide_times);

$Json_slides = json_encode($slides);

echo($Json_slides);
?>
