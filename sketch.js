
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

dustbinImage = loadImage("Dustbin.png");
paperImage   = loadImage("paper.png");


	engine = Engine.create();
	world = engine.world;

	Dustbin =new dustbin(1200,650);
	Paper   =new paper(200,450,40);
	Ground  =new ground(width/2,670,width,20);
	
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	  }
	});

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Dustbin.display();
  Paper.display();
  Ground.display();
  
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(Paper.body,Paper.body.position,{x:83.7,y:-90});
    
  	}
}





