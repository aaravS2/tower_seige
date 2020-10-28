class Rect{
    constructor(x,y,width,height,color){
        this.color=color;
        this.height=height;
        this.width=width;
        var options={
            isStatic:false,
            density:4.0,
    restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options,color);
       
        World.add(world,this.body);
        
        }
        display(){   
            var pos=this.body.position;
            push();
            
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            fill(this.color);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
    }