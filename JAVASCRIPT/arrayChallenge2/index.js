"use strict";

const checkDogs = (dogsJulia, dogsKate) => {
  //1
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  //2
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  //3
  dogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy and is ${dog} years old.`);
    }
  });
};

//Test Data 1:
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log(`--------------------------------------`);
//Test Data 2:
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
