// Test Data 1 values:
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

// Test Data 2 values:

const markMass = 95;
const howTallIsMark = 1.88;
const johnMass = 85;
const howTallIsJohn = 1.76;

let BmiMark = markMass / howTallIsMark ** 2;
let BmiJohn = johnMass / howTallIsJohn ** 2;

let isMarkBmiHigher = BmiMark > BmiJohn;

console.log(isMarkBmiHigher);
