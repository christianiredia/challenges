"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },

  { weight: 8, curFood: 200, owners: ["Matilda"] },

  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },

  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28))
);

//2
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? "much" : "little"
  }!`
);

//3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

console.log("Owners of dogs that eat too MUCH: ", ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

console.log("Owners of dogs that eat too LITTLE: ", ownersEatTooLittle);

//4
console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little!`);

//5
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

//6
const checkEatingOkay = (dog) => {
  dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
};

console.log(dogs.some(checkEatingOkay));

//7
console.log(dogs.filter(checkEatingOkay));

//8
const dogsSort = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSort);
