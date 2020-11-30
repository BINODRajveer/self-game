var Ninja;
var police;
var ground;
var power;
var groundImage;
var PLAY = 1;
var END =0;
var gameState= PLAY

function preload(){
  groundImage=loadImage("ground2.png")
}

function setup() {
  createCanvas(600,200);
 Ninja = createSprite(200, 170, 30, 50);

 police = createSprite(100,170,30,60);
 ground = createSprite(200,180,400,20) 
 ground.addImage("ground",groundImage); 

}

function draw() {
  background("red");
  if (keyDown("space")){
    ground.velocityX= -4;
    if (ground.x < 0){ 
      ground.x = ground.width/2; }

    Ninja.velocityX=3
    police.velocityX=3
      }
      if(Ninja.x===600 || police.x===600 ){
        Ninja.x=10;
        police.x=10
      }
  spawnPower();
  drawSprites();

}
function spawnPower(){
  if (frameCount%280===0){
    power = createSprite(600,30,30,30)  
    power.velocityX= -2;
  }

}
