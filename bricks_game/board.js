class Board{

    constructor(x,y,r){

        this.position=createVector(x,y)
        this.initialPosition=createVector(x,y)
        this.r=r
        this.edgeRight = false
        this.edgeLeft = false
        this.width = 100
        this.height = 10
        this.ball = new Ball(this.position.x+this.width/2,this.position.y-this.height*2,this.height,this)
    }

    draw(){

        stroke(255)
        fill(255)
        this.ball.check()
        this.ball.update()
        rect(this.position.x,this.position.y-this.height,this.width,this.height,this.r)
        this.ball.draw()
    }

    check(){

        if(this.position.x >= width-100){
            
            this.position.x=width-100
            if(this.ball.once){
                this.ball.position.x = this.position.x+this.width/2
            }
        }
        if(this.position.x <= 0){

            this.position.x=0
            if(this.ball.once){
                this.ball.position.x = this.position.x+this.width/2
            }
        }
        if(this.ball.position.y >= height){

            this.reset()
        }
        if(keyIsDown(LEFT_ARROW)){

            this.toLeft()
        }
        if(keyIsDown(RIGHT_ARROW)){
    
            this.toRight()
        }
    }

    toLeft(){

        this.position.sub(createVector(20,0))
        if(this.ball.once){
            this.ball.position.sub(createVector(20,0))
        }
    }
    toRight(){
        
        this.position.add(createVector(20,0))
        if(this.ball.once){
            this.ball.position.add(createVector(20,0))
        }
    }
    reset(){

        this.position = this.initialPosition
        this.width = 100
        this.height = 10
        this.ball = new Ball(this.position.x+this.width/2,this.position.y-this.height*2,this.height,this)
    }
}