"use strict";

const calcAverageHumanAge = (ages) => {
  //1
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  //2
  const adults = humanAges.filter((age) => age >= 18);
  //3
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

//Test Data
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
