var ball1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function Preload() {

}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-35, width,10);

	ball1 = new Ball(200,543,50,50);

	box1 = new Box(890,552,200,20);
	box2 = new Box2(1000,505,20,100);
	box3 = new Box2(780,505,20,100); 

	Engine.run(engine);
  
}

function draw() {
  
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  ground.display();


  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject,{x:85,y:-85});  
	
  }
}



