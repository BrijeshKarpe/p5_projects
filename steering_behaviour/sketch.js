var cars = [];
var mouseClicked = false;
var myFont,
    points;
function preload() {
  myFont = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup(){

  createCanvas(window.innerWidth,window.innerHeight);
  textFont(myFont);
  points = myFont.textToPoints("Uranium", 350,height/2,200);
  for(let p of points){

    cars.push(new vehicle(p.x,p.y));
  }
}

function draw(){

  background(51);
  fill('#ED225D');
  for(let car of cars){

    car.behaviours();
    car.update();
    car.draw();
  }

}
