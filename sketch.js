const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;
var polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  bloco1 = new Block(625,155,30,40)
  bloco2 = new Block(655,155,30,40)
  bloco3 = new Block(685,155,30,40)
  bloco4 = new Block(715,155,30,40)
  bloco5 = new Block(745,155,30,40)
  bloco6 = new Block(775,155,30,40)
  bloco7 = new Block(655,115,30,40)
  bloco8 = new Block(685,115,30,40)
  bloco9 = new Block(715,115,30,40)
  bloco10 = new Block(745,115,30,40)
  bloco11 = new Block(685,75,30,40)
  bloco12 = new Block(715,75,30,40)
  bloco13 = new Block(700,35,30,40)
 



 

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new Slingshot(polygon,{x:100,y:200}); 

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  slingshot.display();
  fill("turquoise")
  bloco1.display();
  bloco2.display();
  bloco3.display();
  bloco4.display();
  bloco5.display();
  bloco6.display();
  bloco7.display();
  bloco8.display();
  bloco9.display();
  bloco10.display();
  bloco11.display();
  bloco12.display();
  fill("gold")
  bloco13.display();

 imageMode(CENTER) 
image(polygon_img,polygon.position.x,polygon.position.y,40,40)

}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(polygon,{x:100,y:30})
slingshot.attach(polygon);
  }}