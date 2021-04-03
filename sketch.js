var Umbrella_img, Batman,lightning,light_img;

function preload(){
    Umbrella_img = loadImage("Capture.PNG");
    light_img = loadImage("light.PNG");
}

function setup(){
   
    Batman=createSprite(200,310,5,5);
    Batman.addImage(Umbrella_img);

    lightning=createSprite(200,50,5,5);
    lightning=addImage(light_img);

    
}

function draw(){
    background(0);
    drawSprites();
}