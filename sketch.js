
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;


function setup() {
	createCanvas(600, 715);


	engine = Engine.create();
	world = engine.world;

	var ball_options =
	{
		restitution: 1,
		frictionAir: 0.02
	};

	var ground_options = 
	{
		isStatic: true
	};


	ground = Bodies.rectangle(200,720,1200,20,ground_options);
    World.add(world,ground);

	objeto1 = Bodies.rectangle(300,200,200,100,ball_options);
	World.add(world,objeto1);

	objeto2 = Bodies.rectangle(500,400,100,100,ball_options);
	World.add(world,objeto2);

    ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);

  

	 
	rectMode(CENTER);
	ellipseMode(RADIUS);
	//Crie os Corpos Aqui.


	
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,40);
  rect(ground.position.x,ground.position.y,1200,20);
  

  rect(objeto1.position.x,objeto1.position.y,200,100);
  rect(objeto2.position.x,objeto2.position.y,100,100);
 
  

  
  
}
 



