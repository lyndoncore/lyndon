# Read me

You're here because you've stepped away from the project and, well, you look a little confused. To refresh your memory, here are some friendly reminders...

# What is it?

###### The "Crap" folder:

The folder full of stuff that is related to the project, but has no current place in the development enviorment. 

###### css/inline-ignore.css

This is the css that goes in the Head of index.html. It has it's own gulp task to compress and autoprefix it. Use this file over modifying css directly on index.html. 


# Deploying to S3

1.  Make sure that all HTML files have the proper reference to:
  -  images with paths "images/"
  -  css with paths being "css/styles.css.gz"
  -  javascript with paths being "js/scripts.js.gz"

2.  Take js/dev-scripts.js to http://closure-compiler.appspot.com/home, compile with "simple", and paste code into js/scripts.js file. 

3.  Run everything through Gulp. Go look at gulpfile.js if you need a reminder of what tasks to run.

4.  Upload everything from "build" folder to S3 Buckets -- except HTML comes from the root project folder. 

5.  Set content-encoding, content-type, and cache directives in the Amazon Console.
  1.  set scripts.js.gz:
		- 
		-
		-
  2.  set styles.css.gz:
		-
		-
		-
  3.  set all HTML files:
		-
		-
		-

6.  Invalidate Caches at Edge locations with a CloudFront invalidation.


# Working in Dev enviornment

1.  Make sure that all HTML files have the proper reference to LOCAL and NON-GZIPed files:
  1.  css with paths being "css/styles.css"
  2.  javascript with paths being "js/dev-scripts.js"

# Testing

1.  On index.html:
  1.  Do knockout letters look complete? (i.e. no white of the background image showing)
  2.  Is the correct hidpi image fetched?
  3.  Does the hidpi image class get applied after the hidpi image is loaded? (i.e. no FOUC)
  4.  Does the JS that injects prefetch resource hint inject the proper image?
  5.  Does fetching main.css.gz get defered after page load?
	



