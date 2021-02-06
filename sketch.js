var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 200, 80, 20);
  fixedRect.shapeColor="cyan";
  
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="purple";
}


function draw() {
  background(255,255,255);  
  
  //so the rectangle moves with the mouse
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
  && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
  && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2
  && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2){
   
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  }


  else{
    fixedRect.shapeColor="cyan";
    movingRect.shapeColor="purple";
  }
  
console.log(movingRect.x - fixedRect.x)

  drawSprites();
}