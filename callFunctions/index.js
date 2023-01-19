function percentageOfWorld1(population) {
  const worldPopulation = 7900e6;
  return (population * 100) / worldPopulation;
}

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} people, which is about ${percentage}% of the world.`;
};

const usa = describePopulation("usa", 331.9e6);
const nigeria = describePopulation("nigeria", 213.4e6);
const germany = describePopulation("germany", 83.2e6);

console.log(usa);
console.log(nigeria);
console.log(germany);
