var song;
var spiderman;
var slider;

function preload() {
  song = loadSound("flip.mp3");
  spiderman = loadImage("dance.gif")

 }

function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, 1, 0.5, 0.01);
  song.play()
}


function draw() {
  background(spiderman);
  song.setVolume(slider.value());
}
