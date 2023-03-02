const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return this.speed + 10;
};

Car.prototype.brake = function () {
  return this.speed - 5;
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

console.log(car1, car2);
