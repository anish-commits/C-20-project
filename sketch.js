var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400); 
  speed = random(10,60);
  weight = random(1000,8000);
  car = createSprite(40, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1300,200,40,height/2);
  wall.shapeColor = "white";
}

function draw() {
  background("black");  
  console.log(weight);
  if(wall.x-car.x<wall.width/2 + car.width/2){
    car.velocityX = 0
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<180&&deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }
  
  
}
drawSprites();
}