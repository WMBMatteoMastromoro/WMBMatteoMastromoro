class Mover{
  constructor(x,y) {
    this.position = createVector(random(width),random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
    
    this.x = x;
    this.y = y;
    this.history = [];
  }

  update() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    
    this.x = this.position.x;
    this.y = this.position.y;
    let v = createVector(this.x, this.y);
    this.history.push(v);
    // console.log(this.history.length);

    if (this.history.length > 10) {
      this.history.splice(0, 1);
    }
  
  }
  
  display() {
    noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, 4, 4);
    
    stroke(255);
    strokeWeight(1)
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      noFill();
      vertex(pos.x, pos.y);
      endShape();
    }
  }
}