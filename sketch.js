var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1200,400);

  speed=random(10,20);
  weight=random(400,1500);
  thickness=random(22,83);

//creating car
bullet=createSprite(50,200,50,50);
  bullet.velocityX= speed;
  bullet.shapeColor=color(255);
//creating walls
wall=createSprite(1000,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
}

function draw() {
  background("lightblue");  
//hint3 to be writen here:
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor=color(225,0,0);
  }
  if (damage<10)
wall.shapeColor=color(0,255,0);
}
drawSprites();
}
//hint2 to be writen here:
function hasCollided(bullet,wall)
{
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }