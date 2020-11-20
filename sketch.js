let score = 0;

let playerX;
let playerDirection = 0;
let playerSpeed = 10;

let ballSpeed = 6;
let ballSize = 40;
let ballDirY = 1;
let ballDirX = 0;
let ballPosX;
let ballPosY; 


let R,G,B;

function setup() {
    createCanvas(800, 1100);
    rectMode(CENTER);
    noStroke();
    playerX = width / 2;
    ballPosY = height/6;
    ballPosX = random(50, width-50);

    R = 0;
    G = 0;
    B = 0;

  
}

function draw() {
    background(R,G,B);
    playerX += playerDirection;
    ballPosY+= ballDirY*ballSpeed;
    ballPosX+= ballDirX*ballSpeed;

    
    rect(playerX, height - 10, 120, 20);
    ellipse(ballPosX,ballPosY,ballSize, ballSize);

    playerBorder();
    collision();
    ballBorder();
    newGame();
    updateScore();
   

}

function keyPressed() {
    // left right
    switch (key) {
        case 'a':

            playerDirection += playerSpeed * -1;
            break;

        case 'd':
            playerDirection += playerSpeed;
            break;
        default:
            playerDirection = playerDirection;
            break;
    }

    // new game

    if (key == 'n'){
        ballDirY = 1;
        ballDirX = 0;
        ballPosY = height/6;
        ballPosX = random(50, width-50);
        ballSpeed=5;
        score=0;
    }


}

function keyReleased() {
    switch (key) {
        case 'a':
            playerDirection = 0;
            break;

        case 'd':
            playerDirection = 0;
            break;
        default:
            playerDirection = playerDirection;
            break;
    }
}

function playerBorder() {
    if (playerX <= 0 + 120 / 2 || playerX >= width - 120 / 2) {
        playerDirection = 0;
    }

    if (playerX >= width-120/2) {
        playerX = width-120/2; 
    }else if (playerX<=0+120/2) {
        playerX =0+120/2;
    }
}

function ballBorder(){

// right border
    if (ballPosX >= width-ballSize/2) {
        ballDirY*-1;
        ballDirX*=-1;
    }
    // left border
    if (ballPosX<=0+ballSize/2) {
        ballDirX*=-1;
        ballDirY*-1;
        // top boder
    } 
    if(ballPosY<= 0 + ballSize/2){
        ballDirY*=-1;
        ballDirX*=1;
    }



}

function collision(){
    if (playerX < ballPosX + ballSize &&
        playerX + ballSize > ballPosX &&
        height < ballPosY + ballSize &&
        height + 10 > ballPosY){

            ballDirY *=-1;
            ballDirX += random(-1.5,1.5);

            ballSpeed+=0.5;
            score++;

            R = (random(50,200));
            G = (random(50,200));
            B = (random(50,200));

    }
    
}


function updateScore(){
textSize(40);
fill(255);
text("Score: " + score, 20, 50);



}

function newGame(){

    if(ballPosY>=height+100){
    textSize(50);
    fill(255);
    text('-press "n" to restart',width/4,height/2);

}
}