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


  msg.innerHTML = "So, " + name + " hasn't been seen very much since they graduated, but did you hear how they now have " + number + " cats in their apartment? It's amazing that they're able to feed all of them with their " + major + " career. Rumor has it that the walls are filled with " + adj + " photos and paintings of various breeds of cats, and that they even have several cat-shaped " + furniture + ". Honestly, " + animalUnit + ".";
  return false;
}

function resetForm() {
  msg.innerHTML = "";
  document.f.reset();
}