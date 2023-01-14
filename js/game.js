let player;
let playerW = 40;
let playerH = 50;
let canvasH = 800;
let canvasW = 400;

function setup(){
    createCanvas(400, 800);
    player = new Player(canvasW/2, canvasH-playerW, playerW, playerH, canvasW);
    player.xMax = (canvasW-playerW/2);
}

function draw(){
    background(0);
    player.show();
    player.update();
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
  