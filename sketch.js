
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var paperObj;
var world;


function preload(){
	



}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(width/2, 670, width, 20);
	dustbinObj=new dustbin(900,650);
	paperObj= new Paper(50, height - 90, 40);

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(270);

  
  groundObject.display();
  dustbinObj.display();
  paperObj.display();
  
  
}
function keyPressed()
{

  if (keyCode === UP_ARROW)
  {

     Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 400, y: -300});

  } 
}
