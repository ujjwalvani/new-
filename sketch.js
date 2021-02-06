var canvas;
var music;
var box1,box2,box3,box4,ball

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(1000,800);

    //create 4 different surfaces
    box1 = createSprite(600,750,100,10);
    box1.shapeColor = "green";
    box1.velocityX = 20,720;
    box2 = createSprite(450,750,100,10);
    box2.velocityX = 20,720;
    box2.shapeColor = "red";
    box3 = createSprite(300,750,100,10);
    box3.velocityX = 20,720;
    box3.shapeColor = "orrange";
    box4 = createSprite(800,750,100,10);
    box4.velocityX = 20,720;
    box4.shapeColor = "black";
    ball = createSprite(800,650,20,10);
    ball.shapeColor = "blue";
    
    
    
  


    //create box sprite and give velocity
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    
    
    if(box1.isTouching(ball)){
        ball1.shapeColor = rbg(255,188,0);
        ball1.velocityX = 0;
        music.stop();
        }
        
        if(box2.isTouching(ball)){
         ball.shapeColor = rbg(305,288,0);
         ball.velocityX = 0;
         music.stop();
         }
         
         if(box3.isTouching(ball)){
             ball.shapeColor = rbg(455,388,0);
             ball.velocityX = 0;
             music.stop();
             }
             
             if(box4.isTouching(ball)){
                 ball.shapeColor = rbg(555,88,0);
                 ball.velocityX = 0;
                 music.stop();
                 }
                 
    drawSprites();
}
