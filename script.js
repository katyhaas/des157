//p5 file

console.log("this is script.js");

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch')
  background(133, 99, 150);
}

function draw() {
  background(133, 99, 150);
  noStroke()

  // **** r e c t a n g l e s **** //

  // #1lightpurple
  if (mouseX > 20 && mouseX < 45 && mouseY > 0 && mouseY < 200) {
    // mouseOver
    fill(79, 59, 89);
  } else {
    fill(161, 120, 181);
  }
  rect(20, 0, 25, 200)

  // #2lightpurple
  if (mouseX > 65 && mouseX < 175 && mouseY > 0 && mouseY < 225) {
    // mouseOver
    fill(79, 59, 89);
  } else {
    fill(161, 120, 181);
  }
  rect(65, 0, 110, 225);

  // #3lightpurple
  if (mouseX > 270 && mouseX < 320 && mouseY > 0 && mouseY < 150) {
    // mouseOver
    fill(79, 59, 89);
  } else {
    fill(161, 120, 181);
  }
  rect(270, 0, 60, 150);

  // #4lightpurple
  if (mouseX > 350 && mouseX < 435 && mouseY > 120 && mouseY < 250) {
    // mouseOver
    fill(79, 59, 89);
  } else {
    fill(161, 120, 181);
  }
  rect(350, 120, 85, 130);

  // #5lightpurple
  if (mouseX > 475 && mouseX < 560 && mouseY > 0 && mouseY < 150) {
    // mouseOver
    fill(79, 59, 89);
  } else {
    fill(161, 120, 181);
  }
  rect(475, 0, 85, 150);

  // #6lightpurple
  if (mouseX > 500 && mouseX < 530 && mouseY > 200 && mouseY < 250) {
    // mouseOver
    fill(79, 59, 89);
  } else {
    fill(161, 120, 181);
  }
  rect(500, 200, 30, 50);

  // #7lightpurple
  if (mouseX > 600 && mouseX < 695 && mouseY > 0 && mouseY < 225) {
    // mouseOver
    fill(79, 59, 89);
  } else {
    fill(161, 120, 181);
  }
  rect(600, 0, 95, 225);


  // #1pink
  if (mouseX > 150 && mouseX < 195 && mouseY > 0 && mouseY < 250) {
    // mouseOver
    fill(141, 105, 182);
  } else {
    fill(165, 105, 182);
  }
  rect(150, 0, 45, 250);

  // #2pink
  if (mouseX > 320 && mouseX < 395 && mouseY > 100 && mouseY < 250) {
    // mouseOver
    fill(141, 105, 182);
  } else {
    fill(165, 105, 182);
  }
  rect(320, 100, 45, 150);

  // #3pink
  if (mouseX > 530 && mouseX < 630 && mouseY > 0 && mouseY < 250) {
    // mouseOver
    fill(141, 105, 182);
  } else {
    fill(165, 105, 182);
  }
  rect(530, 0, 100, 250);


  // #4pink
  if (mouseX > 725 && mouseX < 755 && mouseY > 0 && mouseY < 250) {
    // mouseOver
    fill(141, 105, 182);
  } else {
    fill(165, 105, 182);
  }
  rect(725, 0, 30, 250);

  // **** shadows **** //

  fill(45, 34, 51);

  // vertical

  rect(65, 0, 6, 225);
  rect(326, 0, 4, 100);
  rect(500, 200, 3, 100);
  rect(530, 150, 3, 100);
  rect(630, 0, 3, 250);
  rect(725, 0, 4, 250);

  // horizonatal

  rect(65, 225, 85, 2);
  rect(365, 120, 70, 2);

}
