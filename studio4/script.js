"use strict";

console.log('reading');

//variables
var sound;

// Called directly before setup(), the preload() function is used to handle asynchronous loading of external files. If a preload function is defined, setup() will wait until any load calls within have finished.
function preload() {
  sound = loadSound("https://katyhaas.github.io/des157/studio4/music/song1_Q.mp3"); // Creative Common license
}

function setup() {
  var canvas = createCanvas(600, 400);
  background("green");
  sound.play();
}

function draw() {
}

function mousePressed() {
  if ( sound.isPlaying() ) { // .isPlaying() returns a boolean
    sound.pause(); // .play() will resume from .pause() position
    background(255,0,0);
  } else {
    sound.play();
    background(0,255,0);
  }
}
