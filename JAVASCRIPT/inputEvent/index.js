const h1 = document.querySelector("h1");
const input = document.querySelector("input");

const updateHeading = () => {
  h1.textContent = `Welcome, ${input.value}`;
  if (input.value.length === 0) {
    h1.textContent = "Enter Your Username";
  }
};

input.addEventListener("input", updateHeading);
