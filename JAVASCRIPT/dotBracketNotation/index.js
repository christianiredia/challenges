const country = {
  name: "Finland",
  population: 6,
  neighbours: ["Norway", "Sweeden", "Russia"],
  capital: "Helsinki",
};

console.log(
  `${country.name} has ${country.population} million finnish-speaking people, ${country.neighbours.length} neighbouring countries and a capital called ${country.capital}.`
);

country.population += 2;
console.log(country.population);

country["population"] -= 2;
console.log(country.population);
