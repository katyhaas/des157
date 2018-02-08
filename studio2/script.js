"use strict";

console.log('reading');

//variables
var hover1 = document.getElementById('hover1');
var hover2 = document.getElementById('hover2');
var hover3 = document.getElementById('hover3');

var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');



//pin changes on mouseover
hover1.addEventListener("mouseout", function() {
  hover1.src = "images/pin.png";
  hover2.src = "images/sunglasses.png";

});
hover1.addEventListener("mouseover", function() {
  hover1.src = "images/pin2.png";
});

//sunglasses changes on mouseover
hover2.addEventListener("mouseout", function() {
  hover2.src = "images/sunglasses.png";
});
hover2.addEventListener("mouseover", function() {
  hover2.src = "images/sunglasses2.png";
});

//gloss changes on mouseover
hover3.addEventListener("mouseout", function() {
  hover3.src = "images/gloss.png";
});
hover3.addEventListener("mouseover", function() {
  hover3.src = "images/gloss2.png";
});

//windows
//pin description
hover1.addEventListener('click', function() {
  box1.style.display = "block";
});
close1.addEventListener('click', function() {
  box1.style.display = "none";
});

//glasses description
hover2.addEventListener('click', function() {
  box2.style.display = "block";
});
close2.addEventListener('click', function() {
  box2.style.display = "none";
});

//gloss description
hover3.addEventListener('click', function() {
  box3.style.display = "block";
});
close3.addEventListener('click', function() {
  box3.style.display = "none";
});
