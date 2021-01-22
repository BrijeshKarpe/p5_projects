var x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0,
    length = 500,
    angle = 0,
    vel = 0,
    acc = 0,
    gravity = 4.8,
    mass = 0.5;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){
  translate(600,100);
  background(255);
  stroke(0);
  x2 = length * sin(angle);
  y2 = length * cos(angle);
  line(-50,0,50,0);
  line(x1,y1,x2,y2);
  fill(0);
  noStroke();
  ellipse(x2,y2,mass*100,mass*100);
  acc = - ((mass * gravity)/length * sin(angle));
  angle += vel;
  // console.log(angle);
  vel += acc;
  vel *= 0.995;
}

function mouseDragged(){
  angle = Math.asin((mouseX-600)/length);
}
