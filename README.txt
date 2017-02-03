Read me
=======

You're here because you've stepped away from the project and look a little confused. To refresh your memory, here are some friendly reminders...

WHAT IS IT?
===========

=== The "Crap" folder:

The folder full of stuff that is related to the project, but has no current place in the development enviorment. 

=== css/inline-ignore.css

This is the css that goes in the Head of index.html. It has it's own gulp task to compress and autoprefix it. Use this file over modifying css directly on index.html. 

===


========================= Deploying to S3 =========================

1) Make sure that all HTML files have the proper reference to:
	- images with paths "images/"
	- css with paths being "css/styles.css.gz"
	- javascript with paths being "js/scripts.js.gz"

2) Take js/dev-scripts.js to http://closure-compiler.appspot.com/home, compile with "simple", and paste code into js/scripts.js file. 

3) Run everything through Gulp:
	- run "css" task 
	- run "gzip-scripts" task
	- run "images" task (if nessecary)

4) Upload everything from "build" folder to S3 Buckets
	- add scripts.js.gz
	- add styles.css.gz
	- add HTML from dev root folder

5) Set content-encoding, content-type, and cache directives in the Amazon Console.
	- set scripts.js.gz:
		- 
		-
		-
	- set styles.css.gz:
		-
		-
		-
	- set all HTML files:
		-
		-
		-

6) Invalidate Caches at Edge locations


========================= Working in Dev enviormnet =========================

1) Make sure that all HTML files have the proper reference to LOCAL and NON-GZIPed files:
	- css with paths being "css/styles.css"
	- javascript with paths being "js/dev-scripts.js"

========================= Things to Test =========================

1) On index.html:
	- Do knockout letters look complete? (i.e. no white of the background image showing)
	- Is the correct hidpi image fetched?
	- Does the hidpi image class get applied after the hidpi image is loaded? (i.e. no FOUC)
	- Does the JS that injects prefetch resource hint inject the proper image?
	- Does fetching main.css.gz get defered after page load?
	



