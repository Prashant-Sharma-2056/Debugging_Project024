const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1s, object2;

function preload(){

}

function setup(){
	var canvas = createCanvas(1000,700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	var Options={
		isStatic:true
	}

	var options_ball={
		density:1.2, 
		isStatic:false,
		restitution:0.3,
		friction: 0.5
	}

	box1=createSprite(width/2.5,610,20,100);
	box1.shapeColor="red";

	box2=createSprite(width/1.65,610,20,100);
	box2.shapeColor="red";

	box3=createSprite(width/2, height-50,200,20);
	box3.shapeColor="red";

	balls=createSprite(width/5, 610, 50, 50);
	balls.shapeColor="blue";

	engine = Engine.create();
	world = engine.world;

	box1s=Bodies.rectangle(width/2.6,610,20,100, Options);
	World.add(world,box1s);

	box2s=Bodies.rectangle(width/1.6, 610, 20,100, Options);
	World.add(world,box2s);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box3s=Bodies.rectangle(width/2,630,200,20, Options);
	 World.add(world,box3s);

	 balls=Bodies.circle(width/10, 610, 50, options_ball);
	 World.add(world, balls);


	Engine.run(engine);
}

function draw(){
	background(220);
	Engine.update(engine);

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		// Matter.Body.applyForce(balls.body, balls.body.position, {x=10, y=10});
	   
	 }
   }