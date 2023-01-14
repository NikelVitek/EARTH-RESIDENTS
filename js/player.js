
class Player {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.left = false;
        this.right = false;
        this.vel = 1;
        this.xMax;
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
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
        if (this.x <= this.w/2) {
            this.left = false;
        }
        else if (this.x >= this.xMax) {
            this.right = false;
        }
    }
}



  