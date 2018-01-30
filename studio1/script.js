console.log("reading");
"use strict";

var results = document.getElementById("results");
var msg = document.getElementById("msg");

document.f.onsubmit = processForm;
document.f.onreset = resetForm;
bottomReset.onclick = resetForm;

function processForm() {

  var name = document.f.name.value;
  var number = document.f.number.value;
  var major = document.f.major.value;
  var adj = document.f.adj.value;
  var furniture = document.f.furniture.value;
  var animalUnit = document.f.animalUnit.value;
  var emotion = document.f.emotion.value;
  var adjTwo = document.f.adjTwo.value;
  var food = document.f.food.value;




  msg.innerHTML = "So, <b>" + name + "</b> hasn't been out very much in public since they graduated. I found out that after several years, they now have <b>" + number + "</b> cats in their apartment! It's amazing that they're able to feed all of them with their <b>" + major + "</b> career. Rumor has it that the walls are filled with <b>" + adj + "</b> photos and paintings of various breeds of cats, and that they even have several cat-shaped <b>" + furniture + "</b>. I wonder where you can purchase such niche pieces like that. Quite frankly, I’m very <b>" + emotion + "</b> when looking at this situation. I’m sure all their feline friends are very <b>" + adjTwo + "</b> and taken care of well. They must be getting first-class meals of <b>" + food + "</b>. Sometimes, I wonder what their opinion on dogs is? Honestly, I really like <b>" + animalUnit + "</b>, so to each their own I suppose. <b>" + name + "</b> is definitely living their best life out there, and I'm eternally jealous.";

  return false;
}

function resetForm() {
  msg.innerHTML = "";
  document.f.reset();
}
