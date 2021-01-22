class Brick{

    constructor(x,y,w,h){

        this.position = createVector(x,y)
        this.w = w
        this.h = h
        this.r = 20
        this.ishidden=false
        this.color = {
            r: random(50,255),
            g: random(50,255),
            b: random(50,255),
            a: random(230,255)
        }
    }

    draw(){

        // stroke(170)
        noStroke()
        stroke('white')
            
            point(this.position.x,this.position.y)
        fill(this.color.r,this.color.g,this.color.b,this.color.a)
        rect(this.position.x,this.position.y,this.w,this.h,this.r)
    }
    check_brick(ball){

        if(ball.position.x >= this.position.x && ball.position.x <= this.position.x + this.w && ball.position.y - ball.r <= this.position.y + this.h && ball.position.y - ball.r >= this.position.y && !this.ishidden){
            
            let edgel = false
            let edger = false
            if(ball.position.x + ball.r >= this.position.x && ball.position.x + ball.r <= this.position.x - ball.r ){

                edgel = true    
            }
            if(ball.position.x - ball.r <= this.position.x + this.w && ball.position.x - ball.r >= this.position.x + this.w -ball.r ){

                edger = true
            }
            if(!edgel && !edger){
                
                ball.velocity.reflect(createVector(0,1))    
            }
            if(edgel){

                ball.velocity.reflect(createVector(-1,0))    
            }
            if(edger){

                ball.velocity.reflect(createVector(1,0))    
            }
            return true
        }
        return false
    } 
}