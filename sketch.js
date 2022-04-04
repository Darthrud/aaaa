
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var plane_options ={
		isStatic: true
	  };
	
	var block1_options ={
		isStatic: true
	  };
	  
	var block2_options ={
		isStatic: true
	  };

	  var rotator_options ={
		isStatic: true
	  };

	  var angle1 ={
	   
	  }
	  

	plane = Bodies.rectangle(400,700,800,25,plane_options);
	World.add(world,plane);

	block1 = Bodies.rectangle(150,500,200,10,block1_options)
	World.add(world,block1);

	block2 = Bodies.rectangle(650,500,200,10,block2_options)
	World.add(world,block2);

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options)
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options)
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options)
	World.add(world,rotator3);

	Engine.run(engine);
  
	
}


function draw() {
  
  background("green");
  Engine.update(engine)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipseMode(RADIUS);
  ellipseMode(RADIUS);
  ellipseMode(RADIUS);
  ellipseMode(RADIUS);

  rect(plane.position.x,plane.position.y,800,25);
  rect(block1.position.x,block1.position.y,200,20);
  rect(block2.position.x,block2.position.y,200,20)
  
  Matter.Body.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.psition.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.1;

	Matter.Body.rotate(rotator2,angle2)
	push();
	translate(rotator2.position.x,rotator2.psition.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2 +=0.2;

	Matter.Body.rotate(rotator3,angle3)
	push();
	translate(rotator3.position.x,rotator3.psition.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 +=0.3;

  drawSprites();
 
}