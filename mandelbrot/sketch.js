let list = []
let size = 500
//let counts = []
const bindingFactor=5100
let x=1
let i=0,j=0
let MAX=0;
let done=false
function setup() {
  
  createCanvas(size,size,P2D) 
  noLoop()
  //frameRate(1)
}
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
function draw() {
  translate(width / 2, height / 2);
  //console.log(get_mapping(mouseX,mouseY))
  if(x==1){
    mandelbrot()
    x=0
  }  
  if(done){
    draw_set()
    draw_numberLine()
    done=false
  }
  //draw_numberLine()
}
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
function draw_set(){

  list.forEach(element => {
    
    let coords = get_coordinates(element.number)
    //stroke(((element.count % 255)*7),((element.count % 255)*2),0)
    if(!element.isBound){
      
      stroke((element.count/MAX)*55000,(element.count/MAX)*13000,0)
      //console.log('hsl('+(element.count/MAX)*1000 +',100%,50%)')
      
    }else{

      stroke(0)
    }
    point(coords.x,coords.y)
  })
}

function mandelbrot(){  
  console.log(j)
  let itt=0
  while(itt < 1000000){
    let number = get_random_object()
    if(number){
      let result = check(number)
      result.number = number
      if(result.count > MAX){

        MAX = result.count;
      }
      list.push(result)
      itt++
    }else{
      done=true
      redraw()
      return
    }
  }  
  mandelbrot()
}

function create_object(a,b){

  let object = {

    x : a,
    y : b
  }
  return object
}

function check(constant){

  let z = create_object(0,0)
  let counter = 1
  let result = {

    isBound : false,
    count : 0,
    number : create_object(0,0)
  }
  while(true){

    z = addition(multiply(z,z),constant)
    if(abs(Math.sqrt(Math.pow(z.x,2)+Math.pow(z.y,2))) > 2){
      
      
      result.isBound = false
      result.count = counter
      
      break
    }
    if(counter >= bindingFactor){
      
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
  stroke(color(200,200,200,10))
  let x1 = get_coordinates(create_object(-2,0))
  let x2 = get_coordinates(create_object(2,0))
  let y1 = get_coordinates(create_object(0,-2))
  let y2 = get_coordinates(create_object(0,2))
  line(x1.x,x1.y,x2.x,x2.y)
  line(y1.x,y1.y,y2.x,y2.y)
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
