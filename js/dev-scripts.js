// modernizr 3.3.1 (Custom Build) | MIT -- https://modernizr.com/download/?-webp-setclasses
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);

// Get the scrollTop value for each browser
function getScrollTop() {

    var scrollTop;

    if (typeof(window.pageYOffset) == 'number') {
        scrollTop = window.pageYOffset;
    } else {
        if (document.body && document.body.scrollTop) {
            scrollTop = document.body.scrollTop;
        } else if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        }
    }

    return scrollTop;
}

// Event Handler to make the sidenav sticky function run on scroll
function navMove() {
	var sidebar = document.getElementById("sidebar");
    if (getScrollTop() > 298) {
        sidebar.className = "nav__list--fixed";
    } else {
        sidebar.className = "nav__list";
    }
}


// Highlight the correct item in sidebar nav based on users scroll height
function navHighlight() {

	// An Array of the title's distances to top
	var heading = document.body.getElementsByTagName("h2");
	var distances = [];
	for (var i = 0; i < heading.length; i++) {
		distances[i] = heading[i].offsetTop - 200;
	}
	// Value to ensure the In The Works fits in between it's heading and somewhere (aka pageBottom)
	distances.push(99999999);

	// Variables to get each Title's ID
	var navIntro = document.getElementById("navIntro");
	var navToolkit = document.getElementById("navToolkit");
	var navResponsiveness = document.getElementById("navResponsiveness");
	var navResilience = document.getElementById("navResilience");
	var navCompression = document.getElementById("navCompression");
	var navDesign = document.getElementById("navDesign");
	var navCaching = document.getElementById("navCaching");
	var navCssOptimizations = document.getElementById("navCssOptimizations");
	var navImageOptimizations = document.getElementById("navImageOptimizations");
	var navArtDirection = document.getElementById("navArtDirection");
	var navInTheWorks = document.getElementById("navInTheWorks");

	// An Array of the nav items
	var titles = [
		navIntro, 
		navToolkit, 
		navResponsiveness,
		navResilience, 
		navCompression, 
		navDesign, 
		navCaching, 
		navCssOptimizations, 
		navImageOptimizations, 
		navArtDirection,
		navInTheWorks
	];

	// Variable to count how many loops are done, and which nav__item to add the active class to.
	var counter = 0;

	// for each title, check the distance to the top...
	for (var j = 0; j < distances.length; j++) {
		// increment counter...
		counter = counter + 1;
		// Test to see if the window is scrolled between one heading and another...
		if (getScrollTop() > distances[j] && getScrollTop() < distances[j + 1]) {
			// Remove nav__item--active from all nav__items by setting it to nav__item...
			for (var k = 0; k < titles.length; k++) {
				titles[k].className = "nav__child";
			}
			// Set the desired nav__item to active
			titles[counter - 1].className = "nav__child--current";
		} 
	}
}


// Stop the sidebar nav from scrolling into the footer
function navStop() {

	var docHeight = document.body.clientHeight;
	var stopper = 160;
	var sidebar = document.getElementById("sidebar");
	var sidebarTopMargin = 67;
	var sidebarHeight = document.getElementById('sidebar').clientHeight;

	if ((docHeight - stopper) < (getScrollTop() + sidebarTopMargin + sidebarHeight)) {
		sidebar.className = "nav__list--bottom";
	}
}

// In the header, load the right background images
function setHeaderBGs() {

	// Two backgrounds we are changing
	var headerBg = document.getElementById('header');
	var titleBg = document.getElementById('header__titleBg');
	
	// Callback function to switch the background once the image has loaded
	function loadBG(src, callback) {
    	var image = new Image();
    	image.onload = callback;
    	image.src = src;
	}

	// Check for User's pixel density, webp support, and viewport width, and set placeholder data attribute with bg image. 
	if (window.matchMedia('(min-resolution: 3dppx),(-webkit-min-device-pixel-ratio: 3)').matches) {
		if (html.classList.contains('webp')) {
			if (window.matchMedia('(max-width: 540px)').matches) {
				loadBG('images/floral-crop-540w-3x.webp', function() {
					headerBg.className = "header--webp-3x";
					titleBg.className = "header__titleBg--webp-3x";
				});
			} else {
				// ommitted 3x version of floral-crop because of really large file size (change 2x to 3x for support)
				loadBG('images/floral-crop-2x.webp', function() {
					headerBg.className = "header--webp-3x-noRS";
					titleBg.className = "header__titleBg--webp-3x-noRS";
				});
			}
  		} else {
			if (window.matchMedia('(max-width: 540px)').matches) {
				loadBG('images/floral-crop-540w-3x.png', function() {
					headerBg.className = "header--png-3x";
					titleBg.className = "header__titleBg--png-3x";
				});
			} else {
				// ommitted 3x version of floral-crop because of really large file size (change 2x to 3x for support)
				loadBG('images/floral-crop-2x.png', function() {
					headerBg.className = "header--png-3x-noRS";
					titleBg.className = "header__titleBg--png-3x-noRS";
				});
			}
  		}
	} else if (window.matchMedia('(min-resolution: 2dppx),(-webkit-min-device-pixel-ratio: 2)').matches) {
		if (html.classList.contains('webp')) {
			if (window.matchMedia('(max-width: 540px)').matches) {
				loadBG('images/floral-crop-540w-2x.webp', function() {
					headerBg.className = "header--webp-2x";
					titleBg.className = "header__titleBg--webp-2x";
				});
			} else {
				loadBG('images/floral-crop-2x.webp', function() {
					headerBg.className = "header--webp-2x-noRS";
					titleBg.className = "header__titleBg--webp-2x-noRS";
				});
			}
  		} else {
			if (window.matchMedia('(max-width: 540px)').matches) {
				loadBG('images/floral-crop-540w-2x.png', function() {
					headerBg.className = "header--png-2x";
					titleBg.className = "header__titleBg--png-2x";
				});
			} else {
				loadBG('images/floral-crop-2x.png', function() {
					headerBg.className = "header--png-2x-noRS";
					titleBg.className = "header__titleBg--png-2x-noRS";
				});
			}
  		}
  	} else {
  		if (window.matchMedia('(max-width: 540px)').matches) {
				headerBg.className = "header";
				titleBg.className = "header__titleBg";
		} else {
				headerBg.className = "header--noRS";
				titleBg.className = "header__titleBg--noRS";
		}
  	}
}


// Get the Page's name from the data-attribute on the body class.
var page = document.body.dataset.pageName;

// controller to run the appropriate functions on each page
var controller = {

	// Using rAF to throttle calls
	scroll : function() {
		if (page === 'design') {
			requestAnimationFrame(navMove);
			requestAnimationFrame(navHighlight);
			requestAnimationFrame(navStop);
		} else if (page === 'resume') {
			requestAnimationFrame(navMove);
			requestAnimationFrame(navStop);
		}
	},

	load : function() {
		if (page === 'design') {
			navMove();
			navHighlight();
			setHeaderBGs();
			navStop();
		} else if (page === 'resume') {
			navMove();
			setHeaderBGs();
			navStop();
		}
	}
};

// Run the controller's functions on these events
window.addEventListener('scroll', controller.scroll, false);
window.onload = controller.load;

// Service Worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('service-worker.js')
		.then(function() {
			console.log('CLIENT: service worker registration complete.');
		}) 
		.catch(function() {
			console.log('CLIENT: service worker registration failure.');
		});
	} else {
  console.log('CLIENT: service worker is not supported.');
}


