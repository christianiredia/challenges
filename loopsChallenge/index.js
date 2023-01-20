const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = (value) =>
  value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;

for (let i = 0; i < bills.length; i++) {
  const tipValue = calcTip(bills[i]);
  const totalValue = tipValue + bills[i];
  tips.push(tipValue);
  total.push(totalValue);
}
console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Total: " + total);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
};

console.log("The average amount is: " + calcAverage(total));
