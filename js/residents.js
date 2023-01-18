class Resident {
    constructor(x, y, image) {

        this.x = x;
        this.y = y;
        this.image = image;
    }

    draw() {
        image(this.image, this.x, this.y, this.image.width/20, this.image.height/20);
    }

}

class Residents {
    constructor(enemyImg, rowsCount) {
        this.residentImage = enemyImg;
        this.rowsCount = rowsCount;
        this.direction = 0;
        this.y = 40;
        this.residents = this.makeResidents();
        this.bullets = [];
        this.timeSinceLastBullet = 0;
        this.speed = 0.2;

    }
    setup(){
        this.residentImage = enemyImg;
        this.rowsCount = rowsCount;
        this.direction = 0;
        this.y = 40;
        this.residents = this.makeResidents();
        this.bullets = [];
    }

    update(player) {
        for (let resident of this.residents) {
            if (this.direction == 0) {
                resident.x+= this.speed;
            } else if (this.direction == 1) {
                resident.x-= this.speed;
            }
        }

        this.updateBullets(player);

        if (this.hasChangedDirection()) {
            this.moveResident();
        }



        if (this.timeSinceLastBullet >= 40) {
            let bottomresidents = this.getBottomLine();

            if (bottomresidents.length) {
                this.residentShoot(bottomresidents);
            }
            
        } 

        this.timeSinceLastBullet++;

        if (this.residents.length == 0) {
            this.nextLevel();
        }
        
    }

    updateBullets(player) {

        for (let i = this.bullets.length - 1; i >= 0; i-- ) {
            
            this.bullets[i].y  += 2;

            if (this.bullets[i].hasHit(player)) {
                player.lives --;

                this.bullets.splice(i ,1 );
            }

        }
    }


    hasChangedDirection() {
        for (let resident of this.residents) {
            if (resident.x >= width - 40) {
                this.direction = 1;
                return true;
            } else if (resident.x <= 20) {
                this.direction = 0;
                return true;
            }
        }
        return false;
    }

    moveResident() {
        for (let resident of this.residents) {
            resident.y += 10;
        }

    }

    getBottomLine() {
        let allXPositions = this.getXPos();

        let residentsAtTheBottom = [];
        for (let residentAtX of allXPositions) {
            let bestYPosition = 0;
            let lowestresident;

            for (let resident of this.residents) {
                if (resident.x == residentAtX) {

                    if (resident.y > bestYPosition) {
                        bestYPosition = resident.y;
                        lowestresident = resident;
                    }

                }
            }
            residentsAtTheBottom.push(lowestresident);
        }

        return residentsAtTheBottom;
    }


    residentShoot(bottomresidents) {
        let shootingresident = random(bottomresidents);


        let bullet = new ResidentBullet(shootingresident.x + 10, shootingresident.y + 10);
    
        this.bullets.push(bullet);
        this.timeSinceLastBullet = 0;
    }

    nextLevel() {
        this.speed += 0.5;
        this.residents = this.makeResidents();
    }



    getXPos() {
        let allXPositions = new Set();
        for (let resident of this.residents) {
            allXPositions.add(resident.x);
        }
        return allXPositions
    }
    
    makeResidents() {
        let residents = [];
        let y = 40;
        for (let i = 0; i < this.rowsCount; i++) {
            for (let x = 40; x < width - 40; x += 30) {
                residents.push(new Resident(x, y, this.residentImage));
            }
            y += 40;
        }
        return residents;
    }

    draw() {
        for (let bullet of this.bullets) {
            rect(bullet.x, bullet.y,  3, 10);
        }
        for (let resident of this.residents) {
            resident.draw();
        }

    }

    checkCollision(x, y) {
        for (let i = this.residents.length - 1; i >= 0; i--) {
            let currentresident = this.residents[i];

            if (dist(x, y, currentresident.x + 11.5, currentresident.y + 8) < 10) {
                this.residents.splice(i, 1);
                return true;
            }
        }
        return false;
    }

}