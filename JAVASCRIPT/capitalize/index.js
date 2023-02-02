function capitalize(str) {
  const firstLetter = str.slice(0, 1);
  const restOfString = str.slice(1, str.length);
  const uppercaseLetter = firstLetter.toUpperCase();
  return uppercaseLetter + restOfString;
}
