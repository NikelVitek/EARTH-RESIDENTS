

class Resident {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.img = image;
    }
    draw() {
        image(this.img, this.x,this.y, 60, 60);
    }
}

class Residents{
    constructor(residentImage, rows){
        this.residentImage = residentImage;
        this.rows = rows;
        this.direction = 0;
        this.y = 40;
        this.residents = this.makeResidents();
        this.speed = 0.5;
    }

    update() {
        for (let resident of this.residents) {
            if (this.direction == 0) {
                resident.x+= this.speed;
            } else if (this.direction == 1) {
                resident.x-= this.speed;
            }
        }
   
        if (this.hasChangedDirection()) {
            this.moveResident();
        }
        
    }   

    hasChangedDirection() {
        for (let resident of this.residents) {
            if (resident.x >= width - 40) {
                this.direction = 1;
                return true;
            } else if (resident.x <= 0) {
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

    makeResidents() {
        let residents = [];
        let y = 40;
        for (let i = 0; i < this.rows; i++) {
            for (let x = 40; x < width - 40; x += 40) {
                residents.push(new Resident(x, y, this.residentImage));
            }
            y += 40;
        }
        return residents;
    }

    draw() {
        for (let resident of this.residents) {
            resident.draw();
        }
    }
}