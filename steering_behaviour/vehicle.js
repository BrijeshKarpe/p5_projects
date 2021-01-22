
function vehicle(x,y){
  this.r = 10;
  this.position = createVector(random(width) , random(height));
  this.target = createVector(x,y);
  this.velocity = p5.Vector.random2D();
  this.acceleration = createVector();
  this.maxForce = 0.4;
  this.maxspeed = 10;
}

vehicle.prototype.behaviours = function(){

  var mouse = createVector(mouseX,mouseY);
  var seek = this.seek(this.target);
  var flee = this.flee(mouse);
  seek.mult(1);
  flee.mult(5);
  this.applyforce(seek);
  this.applyforce(flee);

}

vehicle.prototype.applyforce = function(f){

  this.acceleration.add(f);
}

vehicle.prototype.seek = function(targt){

  var desired = p5.Vector.sub(targt,this.position);
  var d = desired.mag();
  var speed = this.maxspeed;

  if(d < 100){

    speed = map(d,0,100,0,this.maxspeed);
  }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired,this.velocity);
    steer.limit(this.maxForce);
  return(steer);
}

vehicle.prototype.flee = function(targt){

  var desired = p5.Vector.sub(targt,this.position);
  var d = desired.mag();
  if(d < 100){

    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired,this.velocity);
    steer.limit(this.maxForce);
    return(steer);
  }else{

    return(createVector(0,0));
  }
}

vehicle.prototype.update = function(){

  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}

vehicle.prototype.draw = function(){


  strokeWeight(this.r);
  if(round(this.position.x) != round(this.target.x) && round(this.position.y) != round(this.target.y)){

    stroke(255,0,0);
  }else{

      stroke(255);
  }

  point(this.position.x,this.position.y);
}
