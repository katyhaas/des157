"use strict";

console.log('reading');

// faded
var faded = true;

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

// song choice booleans
var songA = false;
var songB = false;
var songC = false;
var songD = false;

//color
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var color4 = document.querySelector("#color4");

var colorChoice = document.body.style.backgroundColor;
var purple = false;
var blue = false;
var pink = false;
var green = false;


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
var shapeSize = 0;
var amp;
var a, b, c, d;
var pulse;
var song;

//shape variables
var circles = [];
var stars = [];
var lines = [];
var squares = [];



//song
function preload() {
  a = loadSound("https://kylinna.github.io/des157/audio/synthy.mp3");
  b = loadSound("https://kylinna.github.io/des157/audio/actuallykindadope.mp3");
  c = loadSound("https://kylinna.github.io/des157/audio/funkyfresh.mp3");
  d = loadSound("https://kylinna.github.io/des157/audio/echoparkrawk.mp3");
}

//make canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  noStroke();
  rectMode(CENTER);

  amp = new p5.Amplitude();
  amp.setInput(song);



  for (var i = 0; i < 50; i++) {
    circles.push(new patt1());
    stars.push(new patt2());
    lines.push(new patt3());
    squares.push(new patt4());
  }
}

function draw() {
  pulse = amp.getLevel();
  shapeSize = map(pulse, 0, 0.3, 5, 40);

  background(colorChoice);
  colorChoice = ('orange');


  if (songA == true) {
    song = a;
  } else if (songB == true) {
    song = b;
  } else if (songC == true) {
    song = c;
  } else if (songD == true) {
    song = d;
  }

  if (purple == true) {
    colorChoice = "rgb(185, 59, 227)";
  } else if (pink == true) {
    colorChoice = "rgb(231, 60, 126)";
  } else if (blue == true) {
    colorChoice = "rgb(35, 166, 213)";
  } else if (green == true) {
    colorChoice = "rgb(35, 213, 171)";
  }

  if (shape1 == true) {
    for (var i = 0; i < circles.length; i++) {
      circles[i].display();
    }
  } else if (shape2 == true) {
    for (var i = 0; i < squares.length; i++) {
      stars[i].display();
    }
  } else if (shape3 == true) {
    for (var i = 0; i < lines.length; i++) {
      lines[i].display();
    }
  } else if (shape4 == true) {
    for (var i = 0; i < stars.length; i++) {
      squares[i].display();
    }
  }

  if (faded == true) {
    a.stop();
    a.setVolume(2);

    b.stop();
    b.setVolume(2);

    c.stop();
    c.setVolume(2);

    d.stop();
    d.setVolume(2);
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

  songA = true;
  songB = false;
  songC = false;
  songD = false;
});

song1.addEventListener('mouseover', function() {
  a.fade(2, .5);
  a.jump(7.5, 10);
  faded = false;
});

song1.addEventListener('mouseout', function() {
  a.fade(0, .5);
  faded = true;
});
song2.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song1.style.opacity = "0.6";
  song2.style.backgroundColor = "rgb(153, 182, 232)";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.opacity = "0.6";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.opacity = "0.6";

  songA = false;
  songB = true;
  songC = false;
  songD = false;
});

song2.addEventListener('mouseover', function() {
  b.jump(7.5, 10);
  faded = false;
});

song2.addEventListener('mouseout', function() {
  b.fade(0, .5);
  faded = true;
});

song3.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song1.style.opacity = "0.6";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.opacity = "0.6";
  song3.style.backgroundColor = "rgb(153, 182, 232)";
  song4.style.backgroundColor = "rgb(165, 153, 232)";
  song4.style.opacity = "0.6";

  songA = false;
  songB = false;
  songC = true;
  songD = false;
});

song3.addEventListener('mouseover', function() {
  c.jump(7.5);
  faded = false;
});

song3.addEventListener('mouseout', function() {
  c.fade(0, .5);
  faded = true;
});

song4.addEventListener('click', function() {
  song1.style.backgroundColor = "rgb(165, 153, 232)";
  song1.style.opacity = "0.6";
  song2.style.backgroundColor = "rgb(165, 153, 232)";
  song2.style.opacity = "0.6";
  song3.style.backgroundColor = "rgb(165, 153, 232)";
  song3.style.opacity = "0.6";
  song4.style.backgroundColor = "rgb(153, 182, 232)";

  songA = false;
  songB = false;
  songC = false;
  songD = true;
});

song4.addEventListener('mouseover', function() {
  d.jump(7.5, 10);
  faded = false;
});

song4.addEventListener('mouseout', function() {
  d.fade(0, .5);
  faded = true;
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

  var purple = true;
  var pink = false;
  var blue = false;
  var green = false;


});

color2.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color1.style.opacity = "0.6";
  color2.style.backgroundColor = "rgb(153, 182, 232)";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.opacity = "0.6";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.opacity = "0.6";

  var purple = false;
  var pink = true;
  var blue = false;
  var green = false;


});

color3.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color1.style.opacity = "0.6";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.opacity = "0.6";
  color3.style.backgroundColor = "rgb(153, 182, 232)";
  color4.style.backgroundColor = "rgb(165, 153, 232)";
  color4.style.opacity = "0.6";

  var purple = false;
  var pink = false;
  var blue = true;
  var green = false;

});

color4.addEventListener('click', function() {
  color1.style.backgroundColor = "rgb(165, 153, 232)";
  color1.style.opacity = "0.6";
  color2.style.backgroundColor = "rgb(165, 153, 232)";
  color2.style.opacity = "0.6";
  color3.style.backgroundColor = "rgb(165, 153, 232)";
  color3.style.opacity = "0.6";
  color4.style.backgroundColor = "rgb(153, 182, 232)";

  var purple = false;
  var pink = false;
  var blue = false;
  var green = true;
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

  colorChoice = ('orange');
  green = false;
  blue = false;
  pink = false;
  purple = false;


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
  faded = false;
});

// Setup the star shape
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
// circles
function patt1() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 50);

  this.display = function() {
    fill('rgba(255,255,255, 0.5)');
    if (song.isPlaying()) {
      frameRate(6);
      ellipse(this.x + random(-100, 100), this.y + random(-100, 100), this.diameter + shapeSize, this.diameter + shapeSize);
    } else {
      ellipse(this.x, this.y, this.diameter + shapeSize, this.diameter + shapeSize);
    }
  };
}

// stars
function patt2() {
  this.x = random(width);
  this.y = random(height);

  this.display = function() {
    fill('rgba(255,255,255, 0.5)');
    if (song.isPlaying()) {
      frameRate(5);
      star(this.x + random(-100, 100), this.y + (-100, 100), random(10, 30) + shapeSize, random(25, 70) + shapeSize, random(4, 15));
    } else {
      star(this.x, this.y, 30 + shapeSize, 70 + shapeSize, 5);
    }
  };
}

// linez
function patt3() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, height);

  this.display = function() {
    stroke('rgba(255,255,255, 0.5)');
    strokeWeight(2);
    if (song.isPlaying()) {
      frameRate(6);
      line(this.x + random(-150, 150), this.y + random(-300, 300), this.diameter + shapeSize, this.diameter + shapeSize);
    }
    line(this.x, this.y, this.diameter + shapeSize, this.diameter + shapeSize);
  };
}

// squarez
function patt4() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 75);

  this.display = function() {
    fill('rgba(255,255,255, 0.5)');
    if (song.isPlaying()) {
      frameRate(6);
      rect(this.x + random(-100, 100), this.y + random(-100, 100), this.diameter + shapeSize, this.diameter + shapeSize);
    } else {
      rect(this.x, this.y, this.diameter + shapeSize, this.diameter + shapeSize);
    }
  };
}

//sliding menu
var navToggle = document.getElementsByClassName('js-site-nav-btn--toggle')[0];
var navMenu = document.getElementsByClassName('js-site-nav')[0];
var isMouseDown = false;

navToggle.addEventListener('click', function() {
  this.focus();
  navMenu.classList.toggle('js-site-nav--open');
  navMenu.focus();
});

navMenu.addEventListener('mousedown', function() {
  isMouseDown = true;
});

navMenu.addEventListener('mouseup', function() {
  isMouseDown = false;
});

navMenu.addEventListener('mouseleave', function() {
  isMouseDown = false;
});

navMenu.addEventListener('blur', function() {
  if (!isMouseDown) {
    navMenu.classList.remove('js-site-nav--open');
  }
}, true);
