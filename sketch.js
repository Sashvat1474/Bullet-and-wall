var car1,car2,car3,wall1,wall2,wall3,boundry1,boundry2,boundry3;

function setup() {
  createCanvas(800,400);
  car1=createSprite(30,50,40,40);
  car2=createSprite(30,150,40,40);
  car3=createSprite(30,250,40,40);
  wall1=createSprite(700,58,60,60);
  wall2=createSprite(700,158,60,60);
  wall3=createSprite(700,258,60,60);
  boundry1=createSprite(50,95,8000,40);
  boundry2=createSprite(50,195,8000,40);
  boundry3=createSprite(50,295,8000,40);
}

function draw() {
  background(0,0,0);  
  drawSprites();
  boundry1.scale=0.2;
  boundry2.scale=0.2;
  boundry3.scale=0.2;
  boundry1.shapeColor="white";
  boundry2.shapeColor="white";
  boundry3.shapeColor="white";
  car1.shapeColor="blue";
  car2.shapeColor="silver";
  car3.shapeColor="magenta";
  car1.velocityX=3;
  car2.velocityX=3;
  car3.velocityX=3;
  if(car1.isTouching(wall1)){
  wall1.shapeColor=red;
  }
  if(car2.isTouching(wall2)){
  wall2.shapeColor=yellow;
  }
  if(car3.isTouching(wall3)){
  wall3.shapeColor=green;
  }
  
  
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
    }
    else{
    return false;
  }
}