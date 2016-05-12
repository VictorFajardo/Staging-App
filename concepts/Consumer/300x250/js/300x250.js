window.onload = function() {

	var bg1 = document.getElementById("bg1");
	var bg2 = document.getElementById("bg2");
	var bg3 = document.getElementById("bg3");
	var bg4 = document.getElementById("bg4");
	var frame = document.getElementById("frame");
	var stripes = document.getElementById("stripes");
	var t1a = document.getElementById("text1a");
	var t1b = document.getElementById("text1b");
	var t1c = document.getElementById("text1c");
	var t1d = document.getElementById("text1d");
	var t2a = document.getElementById("text2a");
	var t2b = document.getElementById("text2b");
	var t2c = document.getElementById("text2c");
	var t3 = document.getElementById("text3");
	var t4 = document.getElementById("text4");
	var logo = document.getElementById("logo");
	var t5 = document.getElementById("text5");	
	var scroll = document.getElementById("scroll");
	var cta = document.getElementById("cta");
	var clickarea = document.getElementById("click-area");
	var fda = document.getElementById("fda");
	var pi = document.getElementById("prescribing-information");

	cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	clickarea.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	pi.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag2"); }, true);
	fda.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exitOverride('FDA Exit', 'http://www.fda.gov/medwatch'); }, true);

	TweenLite.to(bg1, .5, {opacity: 1, ease: Power1.easeIn});
	TweenLite.to(t1a, .5, {x: 300, y: -42, ease: Back.easeOut.config(1.4)});
	TweenLite.to(t1b, .5, {x: 300, y: -42, delay: .2, ease: Back.easeOut.config(1.4)});
	TweenLite.to(t1c, .5, {x: 300, y: -42, delay: .4, ease: Back.easeOut.config(1.4)});
	TweenLite.to(t1d, .5, {x: 300, y: -42, delay: .6, ease: Back.easeOut.config(1.4)});

	TweenLite.to(t1a, .5, {x: 600, y: -84, delay: 2.1, ease: Back.easeIn.config(1.4)});
	TweenLite.to(t1b, .5, {x: 600, y: -84, delay: 2.3, ease: Back.easeIn.config(1.4)});
	TweenLite.to(t1c, .5, {x: 600, y: -84, delay: 2.5, ease: Back.easeIn.config(1.4)});
	TweenLite.to(t1d, .5, {x: 600, y: -84, delay: 2.7, ease: Back.easeIn.config(1.4)});

	TweenLite.to(bg1, .5, {opacity: 0, delay: 3.2});
	TweenLite.to(bg2, .5, {opacity: 1, delay: 3.2, ease: Power1.easeIn});
	TweenLite.to(t2a, .5, {x: 300, y: -42, delay: 3.2, ease: Back.easeOut.config(1.4)});
	TweenLite.to(t2b, .5, {x: 300, y: -42, delay: 3.4, ease: Back.easeOut.config(1.4)});
	TweenLite.to(t2c, .5, {x: 300, y: -42, delay: 3.6, ease: Back.easeOut.config(1.4)});

	TweenLite.to(t2a, .5, {x: 600, y: -84, delay: 5.1, ease: Back.easeIn.config(1.4)});
	TweenLite.to(t2b, .5, {x: 600, y: -84, delay: 5.3, ease: Back.easeIn.config(1.4)});
	TweenLite.to(t2c, .5, {x: 600, y: -84, delay: 5.5, ease: Back.easeIn.config(1.4)});

	TweenLite.to(t3, .5, {x: 300, y: -42, delay: 6, ease: Back.easeOut.config(1.4)});
	TweenLite.to(clickarea, .5, {height: 146, delay: 6, ease: Power1.easeIn});
	TweenLite.to(scroll, .5, {y: -102, delay: 6, ease: Power1.easeIn});

	TweenLite.to(bg2, .5, {opacity: 0, delay: 6.5});
	TweenLite.to(bg3, .5, {opacity: 1, delay: 6.5, ease: Power1.easeIn});

	TweenLite.to(t3, .5, {x: 600, y: -84, delay: 9.5, ease: Back.easeIn.config(1.4)});

	TweenLite.to(t4, .5, {x: 300, y: -42, delay: 10, ease: Back.easeOut.config(1.4)});

	TweenLite.to(t4, .5, {x: 600, y: -84, delay: 13.5, ease: Back.easeIn.config(1.4)});
	
	TweenLite.to(bg3, .5, {opacity: 0, delay: 14});
	TweenLite.to(bg4, .5, {opacity: 1, delay: 14, ease: Power1.easeIn});
	TweenLite.to(logo, .5, {opacity: 1, y: -20, delay: 14, ease: Power1.easeIn});
	TweenLite.to(t5, .5, {opacity: 1, y: -20, delay: 14.2, ease: Power1.easeIn});
	TweenLite.to(cta, 0, {opacity: 1, scale: .1, zIndex: 1, delay: 14.5});
	TweenLite.to(cta, .5, {scale: 1, delay: 14.5, ease: Back.easeOut.config(1.4)});
}
