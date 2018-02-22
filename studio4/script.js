"use strict";

console.log('reading');

// variables
var tunes;
var mic;

var play = document.getElementById('play');
var pause = document.getElementById('pause');

// load audio
function preload() {
  tunes = loadSound("https://katyhaas.github.io/des157/studio4/music/song1_Q.mp3");
}

// setup function
function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('container');
  console.log('jamming');
  // loop music
  tunes.loop();
  // start mic
  mic = new p5.AudioIn()
  mic.start();
}

function draw() {
  // get volume of mic
  var micLevel = mic.getLevel();

  // draw the ellipse based on mic level
  ellipse(width / 2, height / 2,
    constrain(micLevel * height * 1.85, 0, height),
    constrain(micLevel * height * 1.85, 0, height),
    55, 55);
  // ellipse attributes
  fill('#46567A');
  stroke('#2B4774');
  strokeWeight(4);
}

// pause + play music
pause.onclick = function(event) {
  tunes.pause();
}
play.onclick = function(event) {
  tunes.play();
}
