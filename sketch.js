const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisions = [];
var plinkos =[];
var particles =[];
var divisionHeight = 225;

function setup(){
  var canvas = createCanvas(480, 550);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 540, 480, 10);
  
  //divisions
  for(var k = 0; k < 480; k= k + 96){
    divisions.push(new Division(k, height- divisionHeight/2, 10, divisionHeight));
  }

  //plinkos
  for(var i = 5; i < 480; i = i + 40){
    plinkos.push(new Plinko(i, 40, 10));
  }

  for(var i = 15; i < 480; i = i + 40){
    plinkos.push(new Plinko(i, 90, 10));
  }

  for(var i = 0; i < 480; i = i + 40){
    plinkos.push(new Plinko(i, 140, 10));
  }

  for(var i = 20; i < 480; i = i + 40){
    plinkos.push(new Plinko(i, 190, 10));
  }

  for(var i = 10; i < 480; i = i + 40){
    plinkos.push(new Plinko(i, 240, 10));
  }

}

function draw(){
  background(209, 112, 105);  
  Engine.update(engine);

  //particles
  if(frameCount % 30 === 0){
    particles.push(new Particle(random(225,255), 0, 8));
  }

  ground.display();
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for(var p = 0; p < particles.length; p++){
    particles[p].display();
  }

}