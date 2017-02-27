# Read me (for Lyndon)

You're here because you've stepped away from the project and, well, you look a little confused. To refresh your memory, here are some friendly reminders...

#### Table of Contents:

[Pre-deployment testing](#pdt)

# What is it?

###### The "misc" folder:

The folder full of stuff that is related to the project, but has no current place in the development enviorment - hence why it's in our .gitignore.

###### css/embedded.css

This is the css that goes in the head of index.html. It has it's own gulp task to compress and autoprefix it. Use this file over modifying css directly on index.html. 

###### js/embedded.js

This is the JavaScript that goes in the head of index.html. It's manually run through JSHint, and Google Closure Compiler before being placed in the index.html head.

###### js/dev-scripts.js

This is JavaScript file that we use locally to test our scripts. We point to it while developing, and reference it's product, scripts.js when deployed. 


# Deploying to S3

1.  Run all pre-deplyment tests (listed in testing section below).

1.  Make sure that all HTML files have the proper reference to:
  -  images with paths "images/"
  -  css with paths being "css/styles.css.gz"
  -  javascript with paths being "js/scripts.js.gz"

2.  Run all JavaScript through JSHint

2.  Take js/dev-scripts.js to http://closure-compiler.appspot.com/home, compile with "simple", and paste code into js/scripts.js file. 

2.  Run all JavaScript through JSHint (again -- better to be safe).

3.  Run all Gulp tasks (Go look at gulpfile.js if you need a reminder of what tasks to run)

4.  AWS -- Upload everything from "build" folder to S3 Buckets -- HTML comes from the root project folder. 

5.  Set headers in the Amazon Console.
  1.  set scripts.js.gz:
    - Content-type: text/javascript
    - Content-encoding: gzip
    - Cache-control: no-cache
  2.  set styles.css.gz:
    - Content-type: text/css
    - Content-encoding: gzip
    - Cache-control: no-cache
  3.  set all HTML files:
    - Content-encoding: gzip
    - Cache-control: no-cache
  4.  set all Image files:
    - Cache-control: max-age=31536000

6.  Set TTL on HTML, CSS, and JavaScript to 86,400 (one day).

7.  Run all post-deployment tests in the Testing section below.

8.  Invalidate Caches at Edge locations with a CloudFront invalidation.


# Working in Dev enviornment

1.  Make sure that all HTML files have the proper reference to LOCAL and NON-GZIPed files:
  1.  css with paths being "css/styles.css"
  2.  javascript with paths being "js/dev-scripts.js"

# Testing on S3

### <a name="pdt">Pre-deployment testing</a>:

1.  On index.html:
  1.  Do knockout letters look complete? (i.e. no white of the background image showing)
    - Resize window until text wraps. 
    - Check Firefox.
  2.  Is the correct hiDPI version of floral-crop fetched?
  3.  Does the hidpi image class get applied after the hidpi image is loaded? (i.e. no FOUC)
  4.  Does the JS that injects prefetch resource hint inject the proper image?
  5.  Does fetching main.css.gz get defered after page load?

2. Run through Google's Structured Data Testing Tool to validate all microdata

3. Run js through JSHint
	
### Post-deployment testing:
  


