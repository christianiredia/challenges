function determineCardWinner(card1, card2) {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1ValueIndex = valueOptions.indexOf(card1.value);
  const card2ValueIndex = valueOptions.indexOf(card2.value);
  console.log("card 1:", card1ValueIndex);
  console.log("card 2:", card2ValueIndex);

  if (card1ValueIndex > card2ValueIndex) {
    console.log("Card 1 wins!");
  } else if (card1ValueIndex < card2ValueIndex) {
    console.log("Card 2 wins!");
  } else {
    console.log("It's a tie!");
  }
}

const card1Obj = {
  value: "7",
};
const card2Obj = {
  value: "KING",
};

determineCardWinner(card1Obj, card2Obj);
