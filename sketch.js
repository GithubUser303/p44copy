var bckimg,mntin,mountimg,hillgroup,cloudgrp,cloudimg,clouds
var rand;
var cloudimg2

function preload(){
bckimg  = loadImage("sprites/back.png")
 mountimg = loadImage("sprites/hill.png")
 cloudimg = loadImage("sprites/Cloud.png")
 cloudimg2 = loadImage("sprites/Cloud(2).png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
hillgroup = new Group()
invisibleGround = createSprite(windowWidth-690,windowHeight-94,1355	,10)
invisibleGround.visible = false

rand =Math.round(random(1,100))
}

function draw(){
background(bckimg)
if(invisibleGround.x < 0){
invisibleGround.x = invisibleGround.width/2
}
drawSprites()
hill()
cloud()

}

function hill(){
	if(frameCount % 135 === 0){
	mntin =  createSprite(windowWidth-1,windowHeight-167)
	mntin.addImage("mountimg",mountimg)
	mntin.scale = 0.3	
	mntin.velocityX=-5

	mntin.lifetime = 350
	}
}

function cloud (){
	if(frameCount % 120 === 0){
		clouds =  createSprite(windowWidth-10,windowHeight-560)
		clouds.addImage("cloudimg",cloudimg)
		clouds.scale = 0.25	

		clouds.y = Math.round(random(windowHeight-470,windowHeight-560))
		clouds.velocityX=-5
	
		clouds.lifetime = 350
		}

}

