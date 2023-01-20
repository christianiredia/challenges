const myCountry = {
  name: "Finland",
  population: 6,
  neighbours: ["Norway", "Sweeden", "Russia"],
  capital: "Helsinki",
  describe: function () {
    return `${this.name} has ${this.population} million finnish-speaking people, ${this.neighbours.length} countries and a capital called ${this.capital}`;
  },
  checkIsIsland: function () {
    this.isIland = this.neighbours.length === 0 ? true : false;
  },
};

console.log(myCountry.describe());
