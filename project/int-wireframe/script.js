"use strict";

console.log('reading');

//nav variables
var start = document.querySelector("#begin");
var songz = document.querySelector("#next1");
var colorz = document.querySelector("#next2");
var patternz = document.querySelector("#next3");

var refresh = document.querySelector("#refresh");

//pg section variables
var sect1 = document.querySelector('#sect1');
var sect2 = document.querySelector('#sect2');
var sect3 = document.querySelector('#sect3');
var sect4 = document.querySelector('#sect4');
var sect5 = document.querySelector('#sect5');

//color button change variables
var song1 = document.querySelector("#song1");
var song2 = document.querySelector("#song2");
var song3 = document.querySelector("#song3");
var song4 = document.querySelector("#song4");

var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var color4 = document.querySelector("#color4");

var pattern1 = document.querySelector("#patt1");
var pattern2 = document.querySelector("#patt2");
var pattern3 = document.querySelector("#patt3");
var pattern4 = document.querySelector("#patt4");

//pg reset
refresh.addEventListener('click', function() {
  sect1.style.display = 'block';
  sect2.style.display = 'none';
  sect3.style.display = 'none';
  sect4.style.display = 'none';
  sect5.style.display = 'none';

  //button colors back to normal
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.backgroundColor = "rgb(165, 153, 232)";

  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.backgroundColor = "rgb(165, 153, 232)";

  pattern1.style.backgroundColor = "rgb(165, 153, 232)";
  pattern2.style.backgroundColor = "rgb(165, 153, 232)";
  pattern3.style.backgroundColor = "rgb(165, 153, 232)";
  pattern4.style.backgroundColor = "rgb(165, 153, 232)";
})

//navigation buttons display
start.addEventListener('click', function() {
  sect1.style.display = 'none';
  sect2.style.display = 'block';
});

songz.addEventListener('click', function() {
  sect2.style.display = 'none';
  sect3.style.display = 'block';
})

colorz.addEventListener('click', function() {
  sect3.style.display = 'none';
  sect4.style.display = 'block';
})

patternz.addEventListener('click', function() {
  sect4.style.display = 'none';
  sect5.style.display = 'block';
})

//single button selected + highlighted

//songs
song1.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(153, 182, 232)";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
});

song2.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.backgroundColor = "rgb(153, 182, 232)";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
});

song3.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.backgroundColor = "rgb(153, 182, 232)";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
});

song4.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.backgroundColor = "rgb(153, 182, 232)";
});


//colors
color1.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(153, 182, 232)";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
});

color2.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.backgroundColor = "rgb(153, 182, 232)";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
});

color3.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.backgroundColor = "rgb(153, 182, 232)";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
});

color4.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.backgroundColor = "rgb(153, 182, 232)";
});


//patterns
pattern1.addEventListener('click', function() {
  pattern1.style.backgroundColor = "rgb(153, 182, 232)";
  pattern2.style.backgroundColor = "rgb(165, 153, 232)";
  pattern3.style.backgroundColor = "rgb(165, 153, 232)";
  pattern4.style.backgroundColor = "rgb(165, 153, 232)";
});

pattern2.addEventListener('click', function() {
  pattern1.style.backgroundColor = "rgb(165, 153, 232)";
  pattern2.style.backgroundColor = "rgb(153, 182, 232)";
  pattern3.style.backgroundColor = "rgb(165, 153, 232)";
  pattern4.style.backgroundColor = "rgb(165, 153, 232)";
});

pattern3.addEventListener('click', function() {
  pattern1.style.backgroundColor = "rgb(165, 153, 232)";
  pattern2.style.backgroundColor = "rgb(165, 153, 232)";
  pattern3.style.backgroundColor = "rgb(153, 182, 232)";
  pattern4.style.backgroundColor = "rgb(165, 153, 232)";
});

pattern4.addEventListener('click', function() {
  pattern1.style.backgroundColor = "rgb(165, 153, 232)";
  pattern2.style.backgroundColor = "rgb(165, 153, 232)";
  pattern3.style.backgroundColor = "rgb(165, 153, 232)";
  pattern4.style.backgroundColor = "rgb(153, 182, 232)";
});
