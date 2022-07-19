// creating varibles
var ground, backgroundImage;
var bow, bowImage;
var ballonRed, ballonImageRed
var ballonGreen, ballonImageGreen;
var ballonBlue, ballonImageRed;
var ballonPink, ballonImagePink;
var arrow, arrowImage;

function preload(){ 
// loading images
backgroundImage = loadImage("background0.png");
bowImage = loadImage("bow0.png");
ballonImageRed = loadImage("red_balloon0.png");
ballonImageGreen = loadImage("green_balloon0.png");
ballonImageBlue = loadImage("blue_balloon0.png");
ballonImagePink = loadImage("pink_balloon0.png");
arrowImage = loadImage("arrow0.png");
}

function setup() {
// creating the canvas
createCanvas(400, 400);

// creating the ground sprite
ground = createSprite(0,0,400,400);
ground.addImage("ground",backgroundImage);
ground.x = ground.width /2;
ground.scale = 2.3;

// creating the bow sprite
bow = createSprite(380,200,50,50);
bow.addImage("bow",bowImage);

// creating the ballons
for (var i = 60; i < 390; i = i + 60){
ballonRed = createSprite(20,i,1,1);
ballonRed.addImage("ballonRed",ballonImageRed);
ballonRed.scale = 0.1;
}

for (var i = 110; i < 390; i = i + 60){
ballonGreen = createSprite(60,i,1,1);
ballonGreen.addImage("ballonGreen",ballonImageGreen);
ballonGreen.scale = 0.1;
}

for (var i = 130; i < 350; i = i + 60){
ballonBlue = createSprite(100,i,1,1);
ballonBlue.addImage("ballonBlue",ballonImageBlue);
ballonBlue.scale = 0.1;
}
for (var i = 150; i < 280; i = i + 60){
ballonpink = createSprite(140,i,1,1);
ballonpink.addImage("ballonPink",ballonImagePink);
ballonpink.scale = 1;
}
}
function draw() {
// creating the background
background(220);

ground.velocityX = -4;
if (ground.x < 0) {
    ground.x = ground.width/2;
}
// moving the bow with the mouse
bow.y = mouseY;

if (keyDown("space")) {
  createarrow();
  arrow.y = bow.y;
  
}
// drawng the sprites
drawSprites();
}
function createarrow() {
arrow = createSprite(400, 200, 10, 20);
arrow.scale = 0.3;
arrow.velocityX = -4;
arrow.addImage("arrow",arrowImage);
}