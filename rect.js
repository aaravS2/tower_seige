class Rect{
    constructor(x,y,width,height,color){
        this.color=color;
        this.height=height;
        this.width=width;
        var options={
            isStatic:false,
            density:4.0,
    restitution:0.8,
    fricition:10.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options,color);
       this.Visiblity=255
        World.add(world,this.body);
        
        }
      
        display(){   
           // push()
            if (this.body.speed<3) {
                
            
            var pos=this.body.position;
            push();
            
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            fill(this.color);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
            }
            else {

                World.remove(world, this.body);
                push();
                this.Visiblity=this.Visiblity-5;
                tint(255,this.Visiblity);
                rect( 0, 0, this.width, this.height);
                pop();
            }
           // pop()
        }
        score(){
if(this.Visiblity<0&&this.Visiblity>-50){
score=score+1
            }
        }
    }
   