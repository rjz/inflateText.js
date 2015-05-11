all: umd shim

umd:
	browserify -e src/inflateText.js --standalone=inflateText -o inflateText.js

shim:
	browserify -e src/jquery-shim.js -o jquery.inflateText.js

