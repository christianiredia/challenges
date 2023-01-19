function percentageOfWorld1(population) {
  const worldPopulation = 7900e6;
  return (population * 100) / worldPopulation;
}

const usa = percentageOfWorld1(331.9e6);
const nigeria = percentageOfWorld1(213.4e6);
const germany = percentageOfWorld1(83.2e6);

console.log(usa);
console.log(nigeria);
console.log(germany);

const percentageOfWorld2 = (population) => {
  const worldPopulation = 7900e6;
  return (population * 100) / worldPopulation;
};

const europe = percentageOfWorld2(746.4e6);
const brazil = percentageOfWorld2(214.3e6);
const mexico = percentageOfWorld2(126.7e6);

console.log(europe);
console.log(brazil);
console.log(mexico);
