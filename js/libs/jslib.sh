#!/bin/bash

alias wget='curl -C - -O';

case "$1" in
"jquery")
	curl -C - -O http://code.jquery.com/jquery-1.9.1.min.js
;;

"class")
	curl -C - -O wget http://codecurve.net/files/Class.js
;;

"backbone")
	curl -C - -O http://backbonejs.org/backbone.js
;;

"underscore")
	curl -C - -O http://underscorejs.org/underscore-min.js
;;
esac

