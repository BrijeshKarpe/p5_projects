let board
let bricks = []
let density = 12
let depth = 8
let brick_height = 20
function setup(){

    createCanvas(1536,750)
    board = new Board(width/2,height,0)
    for(let i=0;i<depth;i++){
        for(let j=0;j<density;j++){
            bricks.push(new Brick(width/density * j,brick_height*i,width/density,brick_height))
        }
    }
}

function draw(){
    
    background(0)
    for(let brick of bricks){
        
        if(brick.check_brick(board.ball)){
            brick.ishidden = true
        }
        if(!brick.ishidden){
            brick.draw()
        }
    }
    board.check()
    board.draw()
    
}