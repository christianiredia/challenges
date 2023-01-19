const englishLanguage = true;
const population = 44000000;
const island = true;

if (englishLanguage && population < 50000000 && !island) {
  console.log("This is the perfect country for you?");
} else {
  console.log("Unfortunately this may not be the right country for you :(");
}
