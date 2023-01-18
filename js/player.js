class Player {
    constructor(playerImg) {
        this.image = playerImg;
        this.x = width / 2;
        this.y = height -30;

        this.left = false;
        this.right = false;
        this.bullets = [];
        this.lives = 3;
        this.score = 0;
    }

    setup(){
        
        this.left = false;
        this.right = false;
        this.bullets = [];
        this.lives = 3;
        this.score = 0;
    }

    update() {
        if (this.right) {
            this.x += 1;
        } else if (this.left) {
            this.x -= 1;
        }

        this.minMax();

        this.updateBullets();
    }

    updateBullets() {
        
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            this.bullets[i].update();

            if (this.ResidentHit(this.bullets[i])) {
                this.bullets.splice(i, 1);
                this.score += 10;
                break;
            } else if (this.bullets[i].isOffScreen()) {
                this.bullets.splice(i, 1);
                break;

            }
        }
    }


    ResidentHit(bullet) {
        return residents.checkCollision(bullet.x, bullet.y);
    }


    minMax() {

        if (this.x <= 25) {
            this.x = 25;
        } else if(this.x > width - 25) {
            this.x = width - 25;
        }
    }

    draw() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.image.width / 20, this.image.height/20);

        this.drawBullets();

        this.drawLives();

        this.drawScore();
    }


    drawBullets() {
        for (let bullet of this.bullets) {
            bullet.draw();
        }
    }


    drawLives() {
        fill(255);
        textSize(15);
        text("LIVES", 250, 25);
        for (let i = 0; i < this.lives; i++) {
            image(this.image, 315 + i * 30, 20, this.image.width / 35, this.image.height/45);
        }
    }

    drawScore() {

        text("SCORE", 50, 25);

        push();
        fill(100, 255, 100);
        text(this.score, 110, 25);
        pop();
    }

    moveLeft() {
        this.right = false;
        this.left = true;
    }
    moveRight() {
        this.left = false;
        this.right = true;
    }

    shoot() {
        this.bullets.push(new PlayerBullet(this.x-2, this.y-30));
    }

}