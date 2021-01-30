const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




var engine,world;






function preload(){
    
}

function setup(){
var canvas = createCanvas(400,625);  
engine = Engine.create();
world = engine.world; 
    
}

function draw(){
background(0);
Engine.update(engine);





}   

