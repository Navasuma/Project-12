 var bomb,coin,energyDrink,path,power,Runner,boundary_1;
 var bombImg,coinImg,energyDrinkImg,pathImg,powerImg, RunnerImg,boundary_2;

function preload(){
  //pre-load image
  bomb=loadImage("bomb.png");
  coinImg=loadImage("coin.png");
energyDrink=loadImage("energyDrink.png");
  pathImg=loadImage("path.png");
  power=loadImage("power.png");
  Runner=loadImage("Runner-1.png","Runner-2.png")
 }
 function setup(){
  createCanvas(400,400);
  //create sprites here
 path=createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY=5;
 path.y=path.height/30;

 Runner=createSprite(180,340,50,170);
 Runner.addAnimation("running",RunnerImg);

 coin=createSprite(200,200,80,90);
 coin.addImage(coinImg);
 coin.scale=0.3
 coin=createSprite(100,200,80,90);
 coin.addImage(coinImg);
 coin.scale=0.3
 coin=createSprite(300,200,80,90);
 coin.addImage(coinImg);
 coin.scale=0.3;

 left_boundary=createSprite(200,100,100,400);
 right_boundary=createSprite(390,300,80,600);
left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
 background(0);
 
 path.velocityY=5;
 Runner.x=World.mouseX;
 if(path.y>400) {
 path.y=height/2 ;
 
}
 
}

Runner.collide(left_boundary);
Runner.collide(right_boundary);
edges=createEdgeSprites();
Runner.collide (edges[3]);

drawSprites();


