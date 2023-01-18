
let enemyImg;
let residents;
let playerImg;
let player;


function preload() {
    enemyImg = loadImage('img/resident.jpg');
    playerImg = loadImage('img/player.jpg');
}
function setup() {
  createCanvas(400, 800);
  residents = new Residents(enemyImg, 4);
  player = new Player(playerImg);
}

function draw() {
  background(0);
 
  residents.update(player);
  residents.draw();

  player.update();
  player.draw();

  if (player.lives === 0) {
    clear();
    background(0);
    textSize(24);
    textAlign(CENTER);
    text("YOU LOST", 200, 400);
    text("Press \'R\' to restart", 200, 440);
    noLoop();
  }

}

function restart(){
    player.setup();
    this.setup();
    loop();
  }

function keyPressed() {
  if (keyCode === RIGHT_ARROW || keyCode == 88) {
    player.moveRight();
  } 
  else if (keyCode === LEFT_ARROW || keyCode == 90) {
    player.moveLeft();
  } 
  else if (keyCode === 32) {
    player.shoot();
  }
  else if (keyCode === 82){
    this.restart();
}


}