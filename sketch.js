var song;

function preload() {
  song = loadSound("flip.mp3");

}

function setup() {
  createCanvas(600, 600);
  song.play();
    
}

function draw() {
  background(0);
}
