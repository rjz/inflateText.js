inflateText.js
==============

InflateText remixes Dave Rupert's [FitText.js](http://fittextjs.com/) by altering the `resizer` function to determine the maximum font-size that will allow an element to fit in the available horizontal space.

Usage
-----

Invoke inflateText as any other jQuery plugin:

	$('h1').inflateText();

You may optionally provide a scaling factor using the `scale` argument or set caps on the font size:

	$('h1').inflateText({
		maxFontSize: 96, //(px)
		minFontSize: 32, //(px)
		scale: 0.8
	});

###A cautionary note:

Unless a minimum font size is specified, InflateText will *always* attempt to fit the target text into a single line. Mix long headlines and mobile resolutions only at your own risk!

Author
------
RJ Zaworski <rj@rjzaworski.com>

License
-------
inflateText.js is released under the WTFPL License. You can read the license [here](http://sam.zoy.org/wtfpl/).