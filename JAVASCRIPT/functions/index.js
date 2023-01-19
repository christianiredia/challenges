function describeCountry(country, population, capitalCity) {
  const countryFact = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return countryFact;
}

const usa = describeCountry("United States", 331, "Washington Dc");
const nigeria = describeCountry("Nigeria", 213, "Abuja");
const germany = describeCountry("Germany", 83, "Berlin");

console.log(usa);
console.log(nigeria);
console.log(germany);
