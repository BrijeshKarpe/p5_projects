class Ball{
    
    constructor(x,y,r,board){

        this.position = createVector(x,y)
        this.r = r
        this.velocity = createVector(0,0)
        this.acceleration = createVector(0,0)
        this.once = true
        this.board = board
        this.speed = 10
    }

    draw(){
        
        stroke(255,100)
        fill(255)
        circle(this.position.x,this.position.y,this.r * 2)
        stroke(0)
        
        point(this.position.x,this.position.y)
    }

    check(){

        if(keyIsDown(ENTER) && this.once){
    
            this.start()
            this.once=false
        }
        if(this.position.x + this.r >= width){

            this.position.x = width - this.r
            this.velocity.reflect(createVector(-1,0))
        }
        if(this.position.x -this.r <= 0){

            this.position.x  = this.r
            this.velocity.reflect(createVector(1,0))
        }
        if(this.position.y - this.r <= 0){

            this.position.y = this.r
            this.velocity.reflect(createVector(0,1))
        }
        if(this.position.x >= this.board.position.x && this.position.x <= this.board.position.x + this.board.width && this.position.y + this.r >= this.board.position.y-this.board.height){
            
            if(!this.once)
                this.position.y -= this.r
            this.velocity.reflect(createVector(0,-1))
        }
    }

    update(){

        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
    }

    start(){

        this.acceleration.add(p5.Vector.sub(createVector(random(0,width),0),this.position).limit(this.speed))
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.acceleration.mult(0)
    }  
}