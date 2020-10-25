
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;
var invisibleGround;
var time=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  monkey=createSprite(100,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.16

  ground=createSprite(100,405,700,10)  
  ground.velocityX=-2;
  ground.x=ground.width/2;
  
  invisibleground=createSprite(200,410,700,10)
  
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("pink");
if(ground.x<0){
  ground.x=ground.width/2;
}
if(keyDown("space")&& monkey.y >=329){
  monkey.velocityY=-2;  
}
  console.log(frameRate)
  

 
 
  
  stroke("white");
  fill("black");
  textSize(20);
  time=Math.ceil(frameCount/frameRate());
  text("SURVIVALTIME: "+time,20,20)
  
monkey.collide(invisibleground);
drawSprites();
food();
  
obstacles();
  
}

function food(){
if(frameCount%80===0){
  banana=createSprite(200,440,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  banana.y=Math.round(random(260,300));
  banana.lifetime=200;
  banana.depth=monkey.depth
  monkey.depth=monkey.depth+1;
  FoodGroup.add(banana);
}

}

function obstacles(){
 if(frameCount%100===0){
   
   obstacle=createSprite(200,360,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX=-2
   obstacle.scale=0.2
   obstacle.lifetime=80;
   
 } 
  
}



