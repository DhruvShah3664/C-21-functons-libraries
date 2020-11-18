var fixedr, movingr;
var gameObject1, gameObject2, gameObject3, gameObject4;
var object1, object2;

function setup() {
  createCanvas(800,400);
  fixedr = createSprite(400, 200, 50, 50);
  fixedr.shapeColor = "green";
  movingr = createSprite(200, 200, 60, 60);
  movingr.shapeColor = "green";

gameObject1 = createSprite(100, 200, 70, 70);
gameObject1.shapeColor = "green";
gameObject2 = createSprite(200, 200, 70, 70);
gameObject2.shapeColor = "green";
gameObject3 = createSprite(300, 200, 70, 70);
gameObject3.shapeColor = "green";
gameObject4 = createSprite(400, 200, 70, 70);
gameObject4.shapeColor = "green";

movingr.velocityX = 4;
movingr.velocityY = -4;
fixedr.velocityX = 4;
fixedr.velocityY = -4;
}

function draw() {
  background(255,255,255);  
  
  movingr.x = World.mouseX;
  movingr.y = World.mouseY; 
  
  if(isTouching(movingr, gameObject1)){
    gameObject1.shapeColor = "blue";
    movingr.shapeColor = "blue";
  }
  else{
    gameObject1.shapeColor = "green";
    movingr.shapeColor = "green";
  }
  

bounceOff(movingr, fixedr);
  
drawSprites();
}

function isTouching(object1, object2){

  if(object1.x - object2.x < object2.width / 2 + object1.width / 2 && 
    object2.x -object1.x < object2.width / 2 + object1.width / 2 && 
    object2.y - object1.y < object2.height / 2 +object1.height / 2 &&
    object1.y - object2.y < object2.height / 2 + object1.height / 2){
   
      return true;
  
  }else { 
    
    return false;
  }
}

function bounceOff(object1, object2){

if(object1.x - object2.x < object2.width / 2 + object1.width / 2 && 
  object2.x -object1.x < object2.width / 2 + object1.width / 2){
object1.velocityX = object1.velocityX *(-1);
object2.velocityX = object2.velocityX *(-1);


  }
  
  if(object2.y - object1.y < object2.height / 2 +object1.height / 2 &&
    object1.y - object2.y < object2.height / 2 + object1.height / 2){
      object1.velocityY = object1.velocityY *(-1);
      object2.velocityY = object2.velocityY *(-1);


    }



}














