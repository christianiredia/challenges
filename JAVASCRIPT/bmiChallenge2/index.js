// Test Data 1 values:
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than John's (${markBMI})!`);
}

// Test Data 2 values:

const markMass = 95;
const howTallIsMark = 1.88;
const johnMass = 85;
const howTallIsJohn = 1.76;

const bmiMark = markMass / howTallIsMark ** 2;
const bmiJohn = johnMass / howTallIsJohn ** 2;

const isMarkBmiHigher = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than John's (${bmiMark})!`);
}
