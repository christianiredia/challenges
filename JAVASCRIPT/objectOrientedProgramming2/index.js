class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is slowed down to ${this.speed} km/h`);
  }

  get speedUS() {
    this.speed / 1.6;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUs);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
