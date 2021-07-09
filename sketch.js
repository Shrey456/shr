var wall,thickness;
var bullet,speed,weight;


function setup() {

  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  thickness = random(22,83)
bullet = createSprite(100,200,20,10)
wall = createSprite(1200,200,thickness,height/2);
wall(80,80,80);
speed = random(223,321)
weight = random(30,52)

}

function draw() {
  background(255,255,255);
  

  drawSprites();
  
}
