class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:2.0,
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,12,options)
        this.radius=17
        this.x=x
        this.y=y
        World.add(world,this.body)
    }
    display(){
        fill(0,255,178)
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,12,12)
    }

}