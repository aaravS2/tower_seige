const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var rect1,hex,engine,world,rect2,con2,rect3,rect4,rect5,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16,rect17,rect18,rect19,r2,
rt2,game,score;
function setup() {
  createCanvas(1000,800);
  
  engine=Engine.create();
  world=engine.world
  Engine.run(engine)
  hex=new Ball(100,400)
  rect1=new Rect(405,482,35,25,(123,234,234))
  rect2=new Re(500,800,1000,20)
 rect3=new Re(400,500,290,20);
rect4=new Rect(440,482,35,25,"green")
 rect5=new Rect(475,482,35,25,(98,76,54))
 rect6=new Rect(492.5,460,35,25,(250,9,245))
 rect7=new Rect(370,482,35,25,(56,7,98))
 rect8=new Rect(340,482,35,25,(231,6,278))
 rect9=new Rect(305,482,35,25,"red")
 rect10=new Rect(510,482,35,25,"yellow")
 rect11=new Rect(457,460,35,25,"purple")
 rect12=new Rect(457-35,460,35,25,"green")
 rect13=new Rect(457-70,460,35,25,"yellow")
 rect14=new Rect(457-105,460,35,25,"red")
 rect15=new Rect(457-140,460,35,25,"blue")
 rect16=new Rect(492.5-47,435,35,25,"blue")
 rect17=new Rect(492.5-47.2-35,435,35,25,"red")
 rect18=new Rect(492.5-47.2-70,435,35,25,"green")
 rect19=new Rect(492.5-47.2-35,435-25,35,25,"red")
rt2=new Rect(800,190,100,50,"orange")
 r2=new Re(800,200,200,20)
 con2=new Rope(hex.body,{x:100,y:400})
 game="onsling"
 
 score=0

}
 
 


function draw() {
  background(0);
  text(8)
  text("Score"+score,500,100)
  Engine.update(engine)
  rect2.display()
  rect3.display();
  rect4.display()
  rect5.display();
  rect6.display();
  rect7.display();
  rect8.display();
  rect9.display();
  rect10.display();
  rect11.display();
  rect12.display();
  hex.display();
  rect1.display();
  rect13.display();
  rect14.display();
  rect15.display();
  rect16.display();
  rect17.display();
  rect18.display();
  rect19.display();
  r2.display();
rt2.display();

con2.display();
bla()
rect4.score()
  rect5.score()  
  rect6.score();
  rect7.score();
  rect8.score();
  rect9.score();
  rect10.score();
  rect11.score();
  rect12.score();
 
  rect1.score();
  rect13.score();
  rect14.score();
  rect15.score();
  rect16.score();
  rect17.score();
  rect18.score();
  rect19.score();
  rt2.score()
}

function mouseDragged(){

  
    
  

  if(game==="onsling"){

hex.body.position.x=mouseX;
hex.body.position.y=mouseY;
  }
  
}
function bla(){
  if (keyDown("space")){
con2.attach(hex.body)
game="onsling"
  }
}
function mouseReleased(){

    con2.fly();
    game="relesed"
}
