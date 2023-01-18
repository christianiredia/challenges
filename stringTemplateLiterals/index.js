let country = "United States of America";
let continent = "North America";
let population = 3319000000;

let isIsland = false;
let language = "English";

const description =
  country +
  "is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;

// description variable in a template literal:

const descriptionRevised = `${country} is in ${continent} and its ${population} people speak ${language}`;

console.log(descriptionRevised);
