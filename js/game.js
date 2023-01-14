let player;
let resident;
let canvasH = 800;
let canvasW = 400;
let enemyImg;
let playerImg;

function preload(){
    enemyImg = loadImage('img/resident.jpg');
    playerImg = loadImage('img/player.jpg');
}

function setup(){
    createCanvas(400, 800);
    player = new Player(canvasW/2, canvasH-70, playerImg);
    player.xMax = (canvasW-player.w);
    resident = new Residents(enemyImg, 2);
}

function draw(){
    background(0);
    player.show();
    player.update();
    resident.draw();
    resident.update();
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW || keyCode == 88) {
        player.left = false;
        player.right = true;
    }
    else if (keyCode === LEFT_ARROW || keyCode == 90) {
        player.right = false;
        player.left = true;
    }
}
