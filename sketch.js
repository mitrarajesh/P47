var PLAY = 1;
var END = 0;
var gameState = PLAY;

var speed = 5
var score = 0;
var highScore = 0;

var bgimg;
var foodimg;

var snake;
var edges;
var fruit;

function preload() {
    bgimg = loadImage("grass.jpg");
    foodimg = loadImage("pear.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    snake = createSprite(20,20,30,30);
    edges = createEdgeSprites();
    fruit = createSprite(200, 200, 30, 30);
    fruit.addImage(foodimg);
    fruit.scale = 0.0065;
}

function draw() {
    background(bgimg);
    snake.shapeColor = "purple";
    textSize(12);
    fill("white");
    text("Score: " + score, windowWidth-150, 25)
    text("High Score: " + highScore, windowWidth-150, 45);
    if (gameState == PLAY){
        if (keyIsDown(LEFT_ARROW)){
            snake.velocityX = -(speed);
            snake.velocityY = 0;
        }
        if (keyIsDown(RIGHT_ARROW)){
            snake.velocityX = speed;
            snake.velocityY = 0;
        }
        if (keyIsDown(UP_ARROW)){
            snake.velocityY = -(speed);
            snake.velocityX = 0;
        }
        if (keyIsDown(DOWN_ARROW)){
            snake.velocityY = speed;
            snake.velocityX = 0;
        }
        if(snake.isTouching(fruit)){
            fruit.x = random(100, width-100);
            fruit.y = random(100, height-100);
            speed += 1;
            score += 1;
        }

        if(snake.collide(edges)){
            gameState = END; 
        }
    }
    if (gameState == END){
        snake.velocityX = 0;
        snake.velocityY = 0;
        speed = 0;
    }
    drawSprites();
}