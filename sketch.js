
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone1;
function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
	
}

function setup() {
  createCanvas(1600, 800);
  mangoGroup=new Group ();
 // mangoGroup.add(mango1,mango2,mango3,mango4,mango5,mango6)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	stone1=new Stone(200,200);
	var rope={
		bodyA:stone1.body,
		pointB:{x:150,y:500},
		stiffness:0.04,
		length:20
	}
  c=Constraint.create(rope);
  World.add(world,c)

  mango1=new Mango(1300,300,30,30,PI/2);
  mango2=new Mango(1300,400,40,40,PI/3) ;
  mango3=new Mango(1250,350,60,60,PI/3);
  mango4=new Mango(1350,400,30,30,PI/5);
  mango5=new Mango(1440,450,40,40,PI/3);
  mango6=new Mango(1230,460,30,30,PI/3);

}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  image(tree,1100,250,400,500)
  image(boy,100,450,200,300)
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  
  drawSprites();
 
}
function mouseDragged(){



}
function mouseDragged(){

  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
  stone1.fly();

}







function keyPressed(){
if(keyCode===32){
  Matter.Body.setPosition(stone1.body,{x:235,y:420});
  stone1.body.setPosition({x:200,y:200})

  

}


}

function detectCollison(){

  detectCollison(stone1,mango1)
  detectCollison(stone1,mango2)
  detectCollison(stone1,mango3)
  detectCollison(stone1,mango4)
  detectCollison(stone1,mango5)
  detectCollison(stone1,mango6)
  
  

}
if(detectCollison(mangoGroup)){
  isStatic :false
}








