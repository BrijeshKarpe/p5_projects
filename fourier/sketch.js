let time = 0,
    r,
    wave = [],
    slider;
var vec = [];

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);

}

function draw(){
  background(0);
  translate(300,300);
  let newX=0,
      newY=0;
for(let j = 0;j < 5;j++){
    let prevX = newX;
    let prevY = newY;
    let n = j * 2 + 1;
    r = 100 * (4/ (n * PI)) ;
    newX += r * Math.cos(n * time);
    newY += r * Math.sin(n * time);
    noFill();
    stroke(255,100);
    ellipse(prevX,prevY,2*r);
    fill(255,50);
    ellipse(newX,newY,10);
    stroke(255);
    line(prevX,prevY,newX,newY);

}
  vec.unshift(createVector(newX,newY));
  wave.unshift(newY);

  stroke(255,255,0);
  line(newX,newY,400,wave[0]);
  translate(400,0);
  noFill();
  stroke(255,0,0);
  beginShape();
  for(let i=0;i<wave.length;i++){
      vertex(i,wave[i]);
      if(i>900){

        wave.splice(i,1);
      }
  }
  endShape();
  translate(-400,0);
  beginShape();
  for(let k =0; k<vec.length;k++){
    noFill();
    stroke(0,0,255);
    vertex(vec[k].x,vec[k].y);
    if(k>312){

      vec.splice(k,1);
    }
  }
  endShape();
  time -= 0.02;
}
