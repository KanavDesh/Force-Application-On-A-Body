const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ball;

var ground;
var left;
var right;
var top_wall;

var rightButton, upButton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  rightButton = createImg('right.png')
  rightButton.position(220, 30);
  rightButton.size(50, 50)
  rightButton.mouseClicked(hForce);

  upButton = createImg('up.png')
  upButton.position(160, 30);
  upButton.size(50, 50)
  upButton.mouseClicked(vForce);

  var ball_options={
    restitution: 0.8
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);
  console.log(ball)
  
  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  push();
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10, 10);
  pop();
}

function hForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.05, y: 0});
}

function vForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0., y: -0.1});
}

