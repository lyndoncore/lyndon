function navMove(){var h=document.documentElement.scrollTop;300<document.body.scrollTop||300<h?document.getElementById("sidebar").className="nav__list--fixed":document.getElementById("sidebar").className="nav__list"}
function navHighlight(){var h=document.body.scrollTop,d=document.documentElement.scrollTop,f=document.body.getElementsByTagName("h3"),g=[];for(i=0;i<f.length;i++)g[i]=f[i].offsetTop-200;g.push(99999999);var f=document.getElementById("navIntro"),l=document.getElementById("navToolkit"),p=document.getElementById("navResponsiveness"),m=document.getElementById("navCompression"),k=document.getElementById("navDesign"),e=document.getElementById("navCaching"),q=document.getElementById("navCssOptimizations"),
n=document.getElementById("navImageOptimizations"),r=document.getElementById("navInTheWorks"),f=[f,l,p,m,k,e,q,n,r];for(i=l=0;i<g.length;i++)if(l+=1,h>g[i]&&h<g[i+1]||d>g[i]&&d<g[i+1]){for(i=0;i<f.length;i++)f[i].className="nav__item";f[l-1].className="nav__item--active"}}
function setHeaderBgs(){function h(f,g){var d=new Image;d.onload=g;d.src=f}function d(){var d=f.getAttribute("data-bg-img");f.style.backgroundImage=d;f.style.backgroundSize="540px 100%";f.style.backgroundPosition="center center";d=g.getAttribute("data-bg-img");g.style.backgroundImage=d;g.style.backgroundSize="540px 300px"}var f=document.getElementById("header"),g=document.getElementById("title-bg");window.matchMedia("(min-resolution: 3dppx),(-webkit-min-device-pixel-ratio: 3)").matches?html.classList.contains("webp")?
window.matchMedia("(max-width: 540px)").matches?h("images/floral-crop-540w-3x.webp",function(){f.setAttribute("data-bg-img",'url("images/floral-crop-540w-3x.webp")');g.setAttribute("data-bg-img",'url("images/floral-crop-540w-3x.webp")');d()}):h("images/floral-crop-3x.webp",function(){f.setAttribute("data-bg-img",'url("images/floral-crop-3x.webp")');g.setAttribute("data-bg-img",'url("images/floral-crop-3x.webp")');d()}):window.matchMedia("(max-width: 540px)").matches?h("images/floral-crop-540w-3x.png",
function(){f.setAttribute("data-bg-img",'url("images/floral-crop-540w-3x.png")');g.setAttribute("data-bg-img",'url("images/floral-crop-540w-3x.png")');d()}):h("images/floral-crop-3x.png",function(){f.setAttribute("data-bg-img",'url("images/floral-crop-3x.png")');g.setAttribute("data-bg-img",'url("images/floral-crop-3x.png")');d()}):window.matchMedia("(min-resolution: 2dppx),(-webkit-min-device-pixel-ratio: 2)").matches&&(html.classList.contains("webp")?window.matchMedia("(max-width: 540px)").matches?
h("images/floral-crop-540w-2x.webp",function(){f.setAttribute("data-bg-img",'url("images/floral-crop-540w-2x.webp")');g.setAttribute("data-bg-img",'url("images/floral-crop-540w-2x.webp")');d()}):h("images/floral-crop-2x.webp",function(){f.setAttribute("data-bg-img",'url("images/floral-crop-2x.webp")');g.setAttribute("data-bg-img",'url("images/floral-crop-2x.webp")');d()}):window.matchMedia("(max-width: 540px)").matches?h("images/floral-crop-540w-2x.png",function(){f.setAttribute("data-bg-img",'url("images/floral-crop-540w-2x.png")');
g.setAttribute("data-bg-img",'url("images/floral-crop-540w-2x.png")');d()}):h("images/floral-crop-2x.png",function(){f.setAttribute("data-bg-img",'url("images/floral-crop-2x.png")');g.setAttribute("data-bg-img",'url("images/floral-crop-2x.png")');d()}))}function scrolling(){navMove();navHighlight()}function load(){navMove();navHighlight();setHeaderBgs()}window.onscroll=scrolling;window.onload=load;
!function(h,d,f){function g(b){var c=n.className,a=e._config.classPrefix||"";if(r&&(c=c.baseVal),e._config.enableJSClass)c=c.replace(new RegExp("(^|\\s)"+a+"no-js(\\s|$)"),"$1"+a+"js$2");e._config.enableClasses&&(c+=" "+a+b.join(" "+a),r?n.className.baseVal=c:n.className=c)}function l(b,c){if("object"==typeof b)for(var a in b)q(b,a)&&l(a,b[a]);else{b=b.toLowerCase();a=b.split(".");var d=e[a[0]];if(2==a.length&&(d=d[a[1]]),"undefined"!=typeof d)return e;c="function"==typeof c?c():c;1==a.length?e[a[0]]=
c:(!e[a[0]]||e[a[0]]instanceof Boolean||(e[a[0]]=new Boolean(e[a[0]])),e[a[0]][a[1]]=c);g([(c&&0!=c?"":"no-")+a.join("-")]);e._trigger(b,c)}return e}var p=[],m=[],k={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(b,c){var a=this;setTimeout(function(){c(a[b])},0)},addTest:function(b,c,a){m.push({name:b,fn:c,options:a})},addAsyncTest:function(b){m.push({name:null,fn:b})}},e=function(){};e.prototype=k;var e=new e,q,n=d.documentElement,r="svg"===
n.nodeName.toLowerCase();!function(){var b={}.hasOwnProperty;q="undefined"===typeof b||"undefined"===typeof b.call?function(c,a){return a in c&&"undefined"===typeof c.constructor.prototype[a]}:function(c,a){return b.call(c,a)}}();k._l={};k.on=function(b,c){this._l[b]||(this._l[b]=[]);this._l[b].push(c);e.hasOwnProperty(b)&&setTimeout(function(){e._trigger(b,e[b])},0)};k._trigger=function(b,c){if(this._l[b]){var a=this._l[b];setTimeout(function(){var b;for(b=0;b<a.length;b++)(0,a[b])(c)},0);delete this._l[b]}};
e._q.push(function(){k.addTest=l});e.addAsyncTest(function(){function b(c,b,a){function e(b){var e=b&&"load"===b.type?1==d.width:!1;l(c,"webp"===c?new Boolean(e):e);a&&a(b)}var d=new Image;d.onerror=e;d.onload=e;d.src=b}var c=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],a=c.shift();b(a.name,a.uri,function(a){if(a&&"load"===a.type)for(a=0;a<c.length;a++)b(c[a].name,c[a].uri)})});(function(){var b,c,a,d,f,g;for(g in m)if(m.hasOwnProperty(g)){if(b=[],c=m[g],c.name&&(b.push(c.name.toLowerCase()),c.options&&c.options.aliases&&c.options.aliases.length))for(a=0;a<c.options.aliases.length;a++)b.push(c.options.aliases[a].toLowerCase());a="function"===
typeof c.fn?c.fn():c.fn;for(d=0;d<b.length;d++)f=b[d],f=f.split("."),1===f.length?e[f[0]]=a:(!e[f[0]]||e[f[0]]instanceof Boolean||(e[f[0]]=new Boolean(e[f[0]])),e[f[0]][f[1]]=a),p.push((a?"":"no-")+f.join("-"))}})();g(p);delete k.addTest;delete k.addAsyncTest;for(d=0;d<e._q.length;d++)e._q[d]();h.Modernizr=e}(window,document);