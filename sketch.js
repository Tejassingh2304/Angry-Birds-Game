const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine, myworld, ground;
var ball;
var box1;
var box2,box3,box4,box5;
var ground1;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var bgImage;

function preload(){
    bgImage=loadImage("sprites/bg.png");

}
function setup(){
    var canvas = createCanvas(1200,400);
    myengine=Engine.create();
    myworld=myengine.world;
    ground1= new Ground(600,height,1200,10);
    box1= new Box(700,320,70,70);
    box2= new Box(920,320,70,70);

    
    pig1= new Pig(810,350);
    log1= new Log(810,260,300,PI/2);

    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);

    
    pig2= new Pig(810,220);
    log2= new Log(810,180,300,PI/2);

    box5= new Box(810,160,70,70);
    log3= new Log(760,120,150,PI/7);
    log4= new Log(870,120,150,-PI/7);

    bird1=new Bird(100,100);
    

}

function draw(){
    background(bgImage);
    Engine.update(myengine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();

}