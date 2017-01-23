// JavaScript Document

window.onload = function (){
	
	
	document.getElementById("next").addEventListener("click", doNext);
	document.getElementById("pre").addEventListener("click", doPre);
	document.getElementById("leaf1").addEventListener("click", init);

}

function doNext(){
	
		document.getElementById('pre').className = "displayPre";

		TweenMax.to("#leaf", 3.5,{left:40, ease: Power0.easeNone});
		TweenMax.to("#darkSpot", .25,{opacity:0, delay:1});
		TweenMax.to(".txt2", 2.5,{opacity:1});
	}

function doPre(){
		TweenMax.to("#leaf", 4.5,{left:822});
		TweenMax.to("#lightSpot", .5,{opacity:0, delay:1.7});
		TweenMax.to(".txt1", .5,{opacity:0});
		TweenMax.to(".txt2", .5,{opacity:0});
		TweenMax.to(".txt3", .5,{opacity:1});
		TweenMax.to(".txt4", .5,{opacity:1});
		document.getElementById('pre').className = "pre";
		document.getElementById("next").removeEventListener("click", doNext);
	}

function init(){
	console.log("init");
	//TweenMax.to("#redBG", 5.5,{});
	
	TweenMax.to("#leaf1", 5.5,{scaleX:25, scaleY:25, onComplete:fadeOut});
	
	}
	
	function fadeOut(){
		//console.log("fadeOut")
		TweenMax.to("#leaf1", .5,{opacity:0});
		TweenMax.to("#redBG", .5,{opacity:0});
		document.getElementById("leaf1").style.zIndex = '10';
		document.getElementById("redBG").style.zIndex = '10';
		
		}
	