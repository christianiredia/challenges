const johnBmi = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const markBmi = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(markBmi.calcBMI());
console.log(johnBmi.calcBMI());

const higherBmi = () => {
  if (markBmi.calcBMI() > johnBmi.calcBMI()) {
    return `Mark's BMI (${markBmi.calcBMI()}) is higher than John's ${johnBmi.calcBMI()}.`;
  } else {
    return `John's BMI (${johnBmi.calcBMI()}) is higher than Mark's ${markBmi.calcBMI()}.`;
  }
};

console.log(higherBmi());
