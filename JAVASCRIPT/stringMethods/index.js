//Starter Code:

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

//My code solution below:
let btn = document.querySelector("button");
let textArea = document.querySelector("textarea");

btn.style.padding = "1rem";

btn.addEventListener("click", function () {
  const text = textArea.value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
