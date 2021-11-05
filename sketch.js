const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,groundImage;
var tower, towerIMage;
var cannon;


function preload() {
 groundImage = loadImage("assets/background.gif")
 towerImage = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(0,height-1,width*2,1,options)
  World.add(world,ground)

  
  tower = Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)
}

function draw() {
  background(189);
  image(groundImage,0,0,width,height)
  Engine.update(engine);
  push()
  imageMode(CENTER)
  image(towerImage,tower.position.x,tower.position.y,160,310)
  pop()
  
   
}
