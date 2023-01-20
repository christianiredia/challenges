const percentages2 = [];
const population = [15e6, 23e6, 355e6, 89e6];

function percentageOfWorld1(population) {
  const worldPopulation = 7900e6;
  return (population * 100) / worldPopulation;
}

for (let i = 0; i < population.length; i++) {
  const populationPercentage = percentageOfWorld1(population[i]);
  percentages2.push(populationPercentage);
}

console.log(percentages2);
