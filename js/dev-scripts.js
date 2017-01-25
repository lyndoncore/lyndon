

// Event Handler to make the sidenav sticky function run on scroll
// COMMENTED OUT BECAUSE IT BELONGS INLINE ON DESIGN.HTML
//
function navMove() {
    if (document.body.scrollTop > 262 || document.documentElement.scrollTop > 262) {
        document.getElementById("sidebar").className = "nav__list--fixed";
    } else {
        document.getElementById("sidebar").className = "nav__list";
    }
}


// Highlight the correct item in sidebar nav based on users scroll height
function highlight() {

	// Variables for the window Scrolling
	var distanceToTop = document.body.scrollTop;
	var distanceToTop2 = document.documentElement.scrollTop;

	// An Array of the title's distances to top
	var heading = document.body.getElementsByTagName("h3");
	var distances = [];
	for (i = 0; i < heading.length; i++) {
		distances[i] = heading[i].offsetTop - 200;
	}
	// Value to ensure the In The Works fits in between it's heading and somewhere (aka pageBottom)
	distances.push(99999999);

	// Variables to get each Title's ID
	var navIntro = document.getElementById("navIntro");
	var navToolkit = document.getElementById("navToolkit");
	var navResponsiveness = document.getElementById("navResponsiveness");
	var navCompression = document.getElementById("navCompression");
	var navDesign = document.getElementById("navDesign");
	var navCaching = document.getElementById("navCaching");
	var navCssOptimizations = document.getElementById("navCssOptimizations");
	var navImageOptimizations = document.getElementById("navImageOptimizations");
	var navInTheWorks = document.getElementById("navInTheWorks");

	// An Array of the nav items
	var titles = [
		navIntro, 
		navToolkit, 
		navResponsiveness, 
		navCompression, 
		navDesign, 
		navCaching, 
		navCssOptimizations, 
		navImageOptimizations, 
		navInTheWorks
	];

	// Variable to count how many loops are done, and which nav__item to add the active class to.
	var counter = 0;

	// for each title, check the distance to the top...
	for (i = 0; i < distances.length; i++) {
		// increment counter...
		counter = counter + 1;
		// Test to see if the window is scrolled between one heading and another...
		if ((distanceToTop > distances[i] && distanceToTop < distances[i + 1]) || (distanceToTop2 > distances[i] && distanceToTop2 < distances[i + 1])) {
			// Remove nav__item--active from all nav__items by setting it to nav__item...
			for (i = 0; i < titles.length; i++) {
				titles[i].className = "nav__item";
			}
			// Set the desired nav__item to active
			titles[counter - 1].className = "nav__item--active";
		} 
	}
}

function scrolling(){
	navMove();
	highlight();
}

window.onscroll = scrolling;


// modernizr 3.3.1 (Custom Build) | MIT
// https://modernizr.com/download/?-webp-setclasses
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);

// Prefetch the proper image format based on Modernizr 
// COMMENTED OUT BECAUSE IT BELONGS INLINE ON INDEX.HTML
//
//function prefetch() {
//	var link = document.createElement('link');
//	link.rel = 'prefetch';
//	if (html.classList.contains('webp')) {
//		link.href = 'images/floral-cropped.webp';
//	} else {
//		link.href = 'images/floral-cropped.png';
//	}
//	link.as = 'image';
//	document.head.appendChild(link);
//}

// defer the loading of CSS so it's non-render-blocking 
// COMMENTED OUT BECAUSE IT BELONGS INLINE ON INDEX.HTML
//
//function deferStyles() {
//	var link = document.createElement('link');
//	link.rel = 'next stylesheet';
//	link.href = 'css/main.css.gz';
//	document.head.appendChild(link);
//}

// Prefetch the proper image size based on media queries DPPX
// COMMENTED OUT BECAUSE IT BELONGS INLINE ON INDEX.HTML
//
//function setBg() {
//	var textBgImage = document.getElementsByTagName('h1');
//	function loadBg(src, callback) {
//    	var image = new Image();
//    	image.onload = callback;
//    	image.src = src;
//	}
//	function updateBg() {
//		var c = textBgImage[0].getAttribute('data-bg-img');
//		textBgImage[0].style.background = c;
//		textBgImage[0].style.webkitBackgroundClip = "text";
//		textBgImage[0].style.backgroundClip = "text";
//		textBgImage[0].style.webkitTextFillColor = "transparent";
//		textBgImage[0].style.backgroundSize = "235px";
//	}
//	if (window.matchMedia('(min-resolution: 3dppx),(-webkit-min-device-pixel-ratio: 3)').matches) {
//		if (html.classList.contains('webp')) {
//			loadBg('images/floral-xsm3x.webp', function() {
//    			textBgImage[0].setAttribute('data-bg-img','url("images/floral-xsm3x.webp")');
//    			updateBg();
//			});
//  		} else {
//  			loadBg('images/floral-xsm3x.png', function() {
//    			textBgImage[0].setAttribute('data-bg-img','url("images/floral-xsm3x.png")');
//    			updateBg();
//			});
//  		}
//	} else if (window.matchMedia('(min-resolution: 2dppx),(-webkit-min-device-pixel-ratio: 2)').matches) {
//		if (html.classList.contains('webp')) {
//			loadBg('images/floral-xsm2x.webp', function() {
//    			textBgImage[0].setAttribute('data-bg-img','url("images/floral-xsm2x.webp")');
//    			updateBg();
//			});
//  		} else {
//  			loadBg('images/floral-xsm2x.png', function() {
//    			textBgImage[0].setAttribute('data-bg-img','url("images/floral-xsm2x.png")');
//    			updateBg();
//			});
//  		}
//	} else {
//	}
//}
//function run(){
//	prefetch();
//	setBg();
//}
//window.onload = run;




