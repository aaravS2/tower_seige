class Re{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        density:1.0,
restitution:4.3
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.x=x
    this.y=y;
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
    
    display(){ 

       
        fill(0,255,0);
        
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        
    }
}