const calcAverage = (number1, number2, number3) => {
  return (number1 + number2 + number3) / 3;
};

//Test Data 1:
const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(66, 54, 49);

//Test Data 2:
const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = (dolphinsAverage, koalasAverage) => {
  if (dolphinsAverage >= koalasAverage * 2) {
    return `Dolphins won! (${dolphinsAverage} vs ${koalasAverage})`;
  } else if (koalasAverage >= dolphinsAverage * 2) {
    return `Koalas won! (${koalasAverage} vs ${dolphinsAverage})`;
  } else {
    return `No one won. :( Dolphins had ${dolphinsAverage} and Koalas had ${koalasAverage.toFixed(
      2
    )}, but the winner needed to win by ATLEAST double!. Sorry`;
  }
};

console.log(checkWinner(dolphinsAverage, koalasAverage));
console.log(checkWinner(avgDolhins, avgKoalas));
