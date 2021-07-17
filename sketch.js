var sky,bird,plane,ground,bullet;

function preload(){
sky1=loadImage("sky.png")
bird1=loadImage("bird.png")
plane1=loadAnimation("0.png","1.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png")
bullet1=loadImage("bullet.png")

}

function setup(){
createCanvas (600,200)

//sky=createSprite(300,100,600,200);
ground=createSprite(300,190,600,20);
ground.addImage("ground",sky1)
ground.scale=1

plane=createSprite(300,100,40,40);
plane.addAnimation("plane",plane1)
plane.scale=0.5

birdGroup=new Group()
bulletGroup=new Group()
}
 
function draw(){
background("blue")
ground.velocityX=-3
if(ground.x<0){
ground.x=ground.width/2
}
if(keyDown("up_arrow")){
    plane.y=plane.y-2  
    
  }  
  if(keyDown("down_arrow")){
    plane.y=plane.y+2  
    
  } 
  if(keyWentDown("space")){
    bullet=createSprite(300,100,10,10)
   bullet.addImage(bullet1)
    bullet.velocityX=-3
    bullet.scale=0.2
    bulletGroup.add(bullet)
  }
  for(var i=0;i<birdGroup.length;i++){
    if(birdGroup.get(i).isTouching(bulletGroup)){
        birdGroup.destroyEach()
        bulletGroup.destroyEach()
     }
  }
 
spawnBird()
drawSprites()


}
function spawnBird(){

if(frameCount%100 ===0){
    bird=createSprite(50,150,10,10);
    bird.y=Math.round(random(50,180))
    bird.addImage("bird",bird1)
    bird.scale=0.2
    bird.velocityX=3;
    bird.lifetime=200
    birdGroup.add(bird)
}



}