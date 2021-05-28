const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygonImg
var engine, world;
function preload(){
polygonImg.loadImage("Images/PolygonImage.png")
}
function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world
polygon= Bodies.circle(50,200,20)
world.add(world,polygon)
ImageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,40,40)
 block1=new Box(100,300,30,40)
 block2=new Box(140,300,30,40)
 block3=new Box(180,300,30,40)
 block4=new Box(220,300,30,40)
 block5=new Box(260,300,30,40)
 block6=new Box(300,300,30,40)
 block7=new Box(340,300,30,40)
// level 2
block8=new Box(140,280,30,40)
block9=new Box(180,280,30,40)
block10=new Box(220,280,30,40)
block11=new Box(260,280,30,40)
block12=new Box(300,280,30,40)
// level 3
block13=new Box(180,250,30,40)
block14=new Box(220,250,30,40)
block15=new Box(260,250,30,40)
//top level 4
block16=new Box(220,220,30,40)
slingshot=new SlingShot(polygon.body,{x:50,y:300})
 
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  
  polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}