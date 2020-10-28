class Rope{
    constructor(bodyA,pointB){
        var options={
            pointB:pointB,
            bodyA:bodyA,
            stiffness:0.04
        }
       this.rope=constraint.create(options)
        World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA=body;
            }
            
    fly(){
        this.rope.bodyA=null;
    }
   
        display(){
            if(this.rope.bodyA){
                var ba=this.rope.bodyA.position;
            var pb=this.rope.pointB
           
            stroke(200,5,255)   
 strokeWeight(4)
line(ba.x,ba.y,pb.x,pb.y);
            }

        }
    }
