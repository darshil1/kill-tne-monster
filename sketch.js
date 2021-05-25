const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
                                  
  box11 = new Box(600, 100, 70, 70);
  box21 = new Box(600, 100, 70, 70);
  box31 = new Box(600, 100, 70, 70);
  box41 = new Box(600, 100, 70, 70);
  box51 = new Box(600, 100, 70, 70);
  box61 = new Box(600, 100, 70, 70);
  box71 = new Box(600, 100, 70, 70);

  box12 = new Box(700, 100, 70, 70);
  box22 = new Box(700, 100, 70, 70);
  box32 = new Box(700, 100, 70, 70);
  box42 = new Box(700, 100, 70, 70);
  box52 = new Box(700, 100, 70, 70);
  box62 = new Box(700, 100, 70, 70);
  
  box13 = new Box (800, 100, 70, 70);
  box23 = new Box (800, 100, 70, 70);
  box33 = new Box (800, 100, 70, 70);
  box43 = new Box (800, 100, 70, 70);
  box53 = new Box (800, 100, 70, 70);
  box63 = new Box (800, 100, 70, 70);
  box73 = new Box (800, 100, 70, 70);
  box83 = new Box (800, 100, 70, 70);

  box14 = new Box(900, 100, 70, 70);
  box24 = new Box(900, 100, 70, 70);
  box34 = new Box(900, 100, 70, 70);
  box44 = new Box(900, 100, 70, 70);
  box54 = new Box(900, 100, 70, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  hero.display();
  rope.display();

  monster.display();

  box11.display();
  box21.display();
  box31.display();
  box41 .display();
  box51.display();
  box61.display();
  box71.display();

  box12.display();
  box22.display();
  box32.display();
  box42.display();
  box52.display();
  box62.display();
  
  box13.display();
  box23.display();
  box33.display();
  box43.display();
  box53.display();
  box63.display();
  box73.display();
  box83.display();
  
  box14.display();
  box24.display();
  box34.display();
  box44.display();
  box54.display();
  
}
function mouseDragged() {

  Matter . Body . setPosition(hero. body, { x: mouseX, y: mouseY });
}  
