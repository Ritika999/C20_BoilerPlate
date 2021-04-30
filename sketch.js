var fixedRect, movingRect;

function setup() {
  createCanvas(400,400);

  fixedRect = createSprite(200, 200, 60, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(270,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  drawSprites();
}
