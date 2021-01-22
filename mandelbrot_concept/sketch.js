let diameter1 = 10
let diameter = 10
let node_diameter = 10
let circleX = 0
let circleY = 0
let complexX = 100, complexY = 0
let _x=0,_y=0,__x=0,__y=0
function setup() {
  // put setup code here
  createCanvas(1500,1500)
}

function draw() {
  // put drawing code here
  background(100)
  translate(width / 2, height / 2);
  draw_numberLine()
  draw_constant()
  draw_complex()
  let newX=_x,newY=_y
  for(let i=0;i<100;i++){

    let prevX = newX
    let prevY = newY
    newX = (prevX * prevX) - (prevY * prevY)
    newY = 2 * (prevX * prevY)
    newX += __x
    newY += __y
    
    fill(color(0,0,255,100))
    ellipse(map(newX,-2,2,-width/2,width/2),map(newY,-2,2,height/2,-height/2),node_diameter,node_diameter)
    //line(map(newX,-2,2,-width/2,width/2),map(newY,-2,2,height/2,-height/2),map(prevX,-2,2,-width/2,width/2),map(prevY,-2,2,height/2,-height/2))
  }
}

function draw_constant(){

  let coordinates = get_mapping(mouseX,mouseY)
  if(dist(circleX, circleY, coordinates.x, coordinates.y)< diameter/2 && mouseIsPressed){

      diameter = 50
      circleX = coordinates.x
      circleY = coordinates.y
      _x = coordinates._x
      _y = coordinates._y
  } 
  fill(color(0,255,0,100))
  ellipse(circleX,circleY,node_diameter,node_diameter)
}

function draw_complex(){

  let coordinates = get_mapping(mouseX,mouseY)
  if(dist(complexX, complexY, coordinates.x, coordinates.y)< diameter1/2 && mouseIsPressed){

      diameter1 = 50
      complexX = coordinates.x
      complexY = coordinates.y
      __x = coordinates._x
      __y = coordinates._y
  } 
  fill(color(255,0,0,100))
  ellipse(complexX,complexY,node_diameter,node_diameter)
}

function mouseReleased(){

  diameter = 10
  diameter1 = 10
}
function get_mapping(X,Y){

  let coordinates = {

    x : 0,
    y : 0,
    _x : 0,
    _y : 0
  }
  coordinates._x = map(X,0,width,-2,2)
  coordinates._y = map(Y,0,height,2,-2)
  coordinates.x = map(coordinates._x,-2,2,-width/2,width/2)
  coordinates.y = map(coordinates._y,-2,2,height/2,-height/2)
  return coordinates
}

function draw_numberLine(){
  noFill()
  line(0,-height/2,0,height/2)
  line(width/2,0,-width/2,0)
  circle(0,0,2 * map(1,-2,2,-width/2,width/2))
}