const form = document.querySelector("form");
const productInput = document.querySelector("#product");
const qtyInput = document.querySelector("#qty");
const list = document.querySelector("#list");

const formList = (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = `${qtyInput.value} ${productInput.value}`;
  list.appendChild(li);
  qtyInput.value = "";
  productInput.value = "";
};

form.addEventListener("submit", formList);
