let movers = [];
var listOfColors;
var bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let particlenumbers = 200
  listOfColors = [color('#47A6E1'), color('#74d2cd'), color('#60517C'),];
  bgColor = listOfColors[int(random(0, listOfColors.length))];
  for (var i = 0; i < particlenumbers; i++) {
     movers[i] = new Mover();
  }
}

function draw() {
  background(bgColor);
  
  let s = 'K';
  fill(230);
  noStroke();
  text(s, 10, 10, 1000, 1000);1
  
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
}

function mousePressed() {
  background(bgColor);
  redraw();
}