
class Player {
    constructor(x, y, playerImg){
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 50;
        this.img = playerImg;
        this.left = false;
        this.right = false;
        this.vel = 1;
        this.xMax;
    }

    show() {
        image(this.img, this.x, this.y, this.w, this.h);
    }

    update() {
        if (this.right) {
            this.x += this.vel;
        } 
        else if (this.left) {
            this.x -= this.vel;
        }
        this.minMax();
    }
    minMax() {
        if (this.x <= 0) {
            this.left = false;
            this.x = 0;
        }
        else if (this.x >= this.xMax) {
            this.right = false;
            this.x = this.xMax;
        }
    }
}



  