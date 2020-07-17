
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("yellow") 

	dustbin = new Dustbin(1200,650);
	//dustbin1 = new Dustbin(710,590,20,100);
	//dustbin2 = new Dustbin(490,590,20,100);
	paper = new Paper(200,450,40);
    ground= new Ground(width/2,670,width,20);
	     
	

	//Create the Bodies Here.


	Engine.run(engine);
  
	/*var option={
   isStatic:false,
   restitution:0.3,
   friction:0.3,
   density:1.2
	}/*/
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.display();
  paper.display();
  ground.display();
}

function keyPressed () {

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

