const neighbours = ["Mexico", "Canada"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country. lol");
}

neighbours[1] = "Alaska";

console.log(neighbours);
