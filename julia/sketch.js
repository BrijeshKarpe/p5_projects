let list = []
let size = 5000
let x=1
let i=0,j=0
//-0.835,-0.2321
//-0.6180339887,0
//-0.4,0.6
//0.285,0
//0.285,0.01
//-0.70176,-0.3842
//0.45,0.1428
//-0.8,+0.1566
//-0.7269,0.1889
//0,-0.8
//-0.8,0
//0.1889,-0.7269
//0.1,-0.6180339887
//-0.74548,0.126669
//-0.75,0.1
let CONSTANT = create_object(-0.75,0.1)
function setup() {
  createCanvas(size,size) 
  noLoop()
}
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
function draw() {
  translate(width / 2, height / 2)
  
  if(x==1){
    julia()
    x=0
  }  
  draw_set()
  //draw_numberLine()
}
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function draw_set(){

  list.forEach(element => {
    
    let coords = get_coordinates(element.number)
    stroke((element.count%255)*7,(element.count%255)*2,0)
    point(coords.x,coords.y)
  })
}

function julia(){  
  console.log(j)
  let itt=0
  while(itt < 1000000){
    let number = get_random_object()
    if(number){
      let result = check(number)
      result.number = number
      list.push(result)
      
      itt++
    }else{
      redraw()
      return
    }
  }  
  julia()
}

function create_object(a,b){

  let object = {

    x : a,
    y : b
  }
  return object
}

function check(z){

  //let z = create_object(0,0)
  let counter = 1
  let result = {

    isBound : false,
    count : 0,
    number : create_object(0,0)
  }
  while(true){

    z = addition(multiply(z,z),CONSTANT)
    if(abs(Math.sqrt(Math.pow(z.x,2)+Math.pow(z.y,2))) > 2){
      
      
      result.isBound = false
      result.count = counter
      
      break
    }
    if(counter >= 5100){
      
      result.isBound = true
      result.count = counter
      
      break
    }
    counter++

  }
  return result
}

function multiply(a,b){

  return create_object(((a.x * b.x) - (a.y * b.y)),((a.x * b.y) + (a.y * b.x)))
}

function addition(a,b){

  return create_object((a.x + b.x),(a.y + b.y))
}

function draw_numberLine(){
  noFill()
  stroke('grey')
  line(0,-height/2,0,height/2)
  line(width/2,0,-width/2,0)
}


function get_random_object(){
  if(j < size){
    let coords = get_mapping(i,j)
    if(i == size - 1){

      j++
    }
    i = ((i + 1) % size)
    return coords
  }
}

function get_mapping(X,Y){

  let coordinates = {

    x : 0,
    y : 0,
  }
  coordinates.x = map(X,0,width,-2,2)//-+
  coordinates.y = map(Y,0,height,2,-2)//+-
  return coordinates
}

function get_coordinates(object){

  let coordinates = {

    x : 0,
    y : 0
  }
  coordinates.x = map(object.x,-2,2,-width/2,width/2)
  coordinates.y = map(object.y,-2,2,height/2,-height/2)
  return coordinates
}
