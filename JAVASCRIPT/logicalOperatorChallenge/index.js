const dolphinsFirstScore = 96;
const dolphinsSecondScore = 108;
const dolphinsThirdScore = 89;

const koalasFirstScore = 88;
const koalasSecondScore = 91;
const koalasThirdScore = 110;

const dolphinsAverage =
  (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
const koalasAverage =
  (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(
    `Dolphins has the higher average! Dolphins average was ${dolphinsAverage}`
  );
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(
    `Koalas has the higher average! Koalas average was ${koalasAverage}`
  );
} else {
  console.log("Its a DRAW!");
}

// Data Bonus 1 Results: `Koalas has the higher average! Koalas average was ${koalasAverage}`
// Data Bonus 2 Results: "Its a Draw!"
