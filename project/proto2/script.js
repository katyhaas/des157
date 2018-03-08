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

//songs
var song1 = document.querySelector("#song1");
var song2 = document.querySelector("#song2");
var song3 = document.querySelector("#song3");
var song4 = document.querySelector("#song4");


//color
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var color4 = document.querySelector("#color4");

//patterns
var pattern1 = document.querySelector("#patt1");
var pattern2 = document.querySelector("#patt2");
var pattern3 = document.querySelector("#patt3");
var pattern4 = document.querySelector("#patt4");

var shape1 = false;
var shape2 = false;
var shape3 = false;
var shape4 = false;


// animate patterns
var shSize = 0;
var amp;
var pulse;
var song;

//shape variables
var circles = [];
var triangles = [];
var lines = [];
var squares = [];



//song
function preload() {
  song = loadSound("https://katyhaas.github.io/des157/studio4/music/song1_Q.mp3");
}

//make canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('#dddddd');
  stroke('#2B4774');
  strokeWeight(1);

  amp = new p5.Amplitude();
  amp.setInput(song);

  for (var i = 0; i < 20; i++) {
    circles.push(new patt1());
    triangles.push(new patt4());
    lines.push(new patt3());
    squares.push(new patt2());
    }
}

function draw() {
  pulse = amp.getLevel();
  shSize = map(pulse, 0, 0.3, 10, 100);

  if (shape1 == true) {
    for (var i = 0; i < circles.length; i++) {
      circles[i].display();
    }
  } else if (shape2 == true) {
    for (var i = 0; i < squares.length; i++) {
      triangles[i].display();
    }
  } else if (shape3 == true) {
    for (var i = 0; i < lines.length; i++) {
      lines[i].display();
    }
  } else if (shape4 == true) {
    for (var i = 0; i < triangles.length; i++) {
      squares[i].display();
    }
  }
}

//single button selected + highlighted

//songs
song1.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(153, 182, 232)";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.opacity = "0.6";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.opacity = "0.6";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.opacity = "0.6";
});

song2.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song1.style.opacity = "0.6";
  song2.style.backgroundColor = "rgb(153, 182, 232)";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.opacity = "0.6";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.opacity = "0.6";
});

song3.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song1.style.opacity = "0.6";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.opacity = "0.6";
  song3.style.backgroundColor = "rgb(153, 182, 232)";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.opacity = "0.6";
});

song4.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song1.style.opacity = "0.6";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.opacity = "0.6";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.opacity = "0.6";
  song4.style.backgroundColor = "rgb(153, 182, 232)";
});


//colors
color1.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(153, 182, 232)";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.opacity = "0.6";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.opacity = "0.6";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.opacity = "0.6";

});

color2.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color1.style.opacity = "0.6";
  color2.style.backgroundColor = "rgb(153, 182, 232)";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.opacity = "0.6";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.opacity = "0.6";

});

color3.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color1.style.opacity = "0.6";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.opacity = "0.6";
  color3.style.backgroundColor = "rgb(153, 182, 232)";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.opacity = "0.6";

});

color4.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color1.style.opacity = "0.6";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.opacity = "0.6";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.opacity = "0.6";
  color4.style.backgroundColor = "rgb(153, 182, 232)";

});


//patterns
pattern1.addEventListener('click', function() {
  pattern1.style.backgroundColor = "rgb(153, 182, 232)";
  pattern2.style.backgroundColor = "rgb(165, 153, 232)";
  pattern2.style.opacity = "0.6";
  pattern3.style.backgroundColor = "rgb(165, 153, 232)";
  pattern3.style.opacity = "0.6";
  pattern4.style.backgroundColor = "rgb(165, 153, 232)";
  pattern4.style.opacity = "0.6";

  shape1 = true;
  shape2 = false;
  shape3 = false;
  shape4 = false;
});

pattern2.addEventListener('click', function() {
  pattern1.style.backgroundColor = "rgb(165, 153, 232)";
  pattern1.style.opacity = "0.6";
  pattern2.style.backgroundColor = "rgb(153, 182, 232)";
  pattern3.style.backgroundColor = "rgb(165, 153, 232)";
  pattern3.style.opacity = "0.6";
  pattern4.style.backgroundColor = "rgb(165, 153, 232)";
  pattern4.style.opacity = "0.6";

  shape1 = false;
  shape2 = true;
  shape3 = false;
  shape4 = false;
});

pattern3.addEventListener('click', function() {
  pattern1.style.backgroundColor = "rgb(165, 153, 232)";
  pattern1.style.opacity = "0.6";
  pattern2.style.backgroundColor = "rgb(165, 153, 232)";
  pattern2.style.opacity = "0.6";
  pattern3.style.backgroundColor = "rgb(153, 182, 232)";
  pattern4.style.backgroundColor = "rgb(165, 153, 232)";
  pattern4.style.opacity = "0.6";

  shape1 = false;
  shape2 = false;
  shape3 = true;
  shape4 = false;

});

pattern4.addEventListener('click', function() {
  pattern1.style.backgroundColor = "rgb(165, 153, 232)";
  pattern1.style.opacity = "0.6";
  pattern2.style.backgroundColor = "rgb(165, 153, 232)";
  pattern2.style.opacity = "0.6";
  pattern3.style.backgroundColor = "rgb(165, 153, 232)";
  pattern3.style.opacity = "0.6";
  pattern4.style.backgroundColor = "rgb(153, 182, 232)";

  shape1 = false;
  shape2 = false;
  shape3 = false;
  shape4 = true;
});



//pg reset
refresh.addEventListener('click', function() {
  sect1.style.display = 'block';
  sect2.style.display = 'none';
  sect3.style.display = 'none';
  sect4.style.display = 'none';
  sect5.style.display = 'none';

  //button colors back to normal
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song1.style.opacity = "1";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.opacity = "1";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.opacity = "1";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.opacity = "1";

  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color1.style.opacity = "1";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.opacity = "1";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.opacity = "1";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.opacity = "1";


  pattern1.style.backgroundColor = "rgb(165, 153, 232)";
  pattern1.style.opacity = "1";
  pattern2.style.backgroundColor = "rgb(165, 153, 232)";
  pattern2.style.opacity = "1";
  pattern3.style.backgroundColor = "rgb(165, 153, 232)";
  pattern3.style.opacity = "1";
  pattern4.style.backgroundColor = "rgb(165, 153, 232)";
  pattern4.style.opacity = "1";

  shape1 = false;
  shape2 = false;
  shape3 = false;
  shape4 = false;

  clear();
  song.stop();
});

//navigation buttons display
start.addEventListener('click', function() {
  sect1.style.display = 'none';
  sect2.style.display = 'block';
});

songz.addEventListener('click', function() {
  sect2.style.display = 'none';
  sect3.style.display = 'block';
});

colorz.addEventListener('click', function() {
  sect3.style.display = 'none';
  sect4.style.display = 'block';
});

patternz.addEventListener('click', function() {
  sect4.style.display = 'none';
  sect5.style.display = 'block';

  song.play();
});



// circles
function patt1() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 30);

  this.display = function() {
    fill('rgba(238,119,82)');
    stroke('#2B4774');
    strokeWeight(1);
    ellipse(this.x, this.y, this.diameter + shSize, this.diameter + shSize);
  };
}

// other option
function patt2() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 30);

  this.display = function() {
    fill('rgba(255,255,255)');
    rect(this.x, this.y, this.diameter + shSize, this.diameter + shSize);
  };
}

// linez
function patt3() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(6, height);

  this.display = function() {
    stroke('rgb(255,255,255)');
    strokeWeight(1);
    line(this.x, this.y, this.diameter + shSize, this.diameter + shSize);
  };
}

// squarez
function patt4() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 30);

  this.display = function() {
    fill('rgba(255,255,255)');
    rect(this.x, this.y, this.diameter + shSize, this.diameter + shSize);
  };
}
