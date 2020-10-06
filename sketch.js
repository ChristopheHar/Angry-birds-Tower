const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2, box3, box4, box5;
var pig1, log1, bird, log2, pig2,log3,log4;
function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,330,50,50);
    box2 = new Box(750,330,50,50);
    ground = new Ground(500,350,1000,20);
    pig1 = new Pig(825, 330);
    log1 = new Log(825, 260, 200, PI/2);
    bird = new Bird(200,300);
    box3 = new Box(900,240,50,50);
    box4 = new Box(750,240,50,50);
    pig2 = new Pig(825,240);
    log2 = new Log(825, 200, 200, PI/2);
    box5 = new Box(825,180,50,50);
    log3 = new Log(775,160,100,PI/7);
    log4 = new Log(875,160,100,-PI/7);
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}