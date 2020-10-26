const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[] , plinkos=[] , divisions=[];
var divisionheight=300;
var engine,world,ground;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,790,480,10);
  
 Engine.run(engine);
}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);

  ground.display();

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionheight/2,10,divisionheight));
  }

  for(var j=40;j <= width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j <=width ; j=j+50){
    plinkos.push(new Plinko(J,175));
  }
 
  

  drawSprites();
}