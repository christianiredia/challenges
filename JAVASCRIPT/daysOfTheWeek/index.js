const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  } else {
    return week[num - 1];
  }
}
