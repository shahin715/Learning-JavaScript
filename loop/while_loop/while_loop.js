// Print Numbers from 1 to 5

let number = 1;
while (number <= 5) {
  console.log(number);
  number++;
}

//Sum of Numbers from 1 to 10
let startingNumber = 1;
let totalSum = 0;
while (startingNumber <= 10) {
  totalSum += startingNumber;
  startingNumber++;
}
console.log(totalSum);

//Print Even Numbers from 2 to 20

let evenNumber = 2;
while (evenNumber <= 20) {
  console.log(evenNumber);
  evenNumber += 2;
}

//Print the First 5 Multiples of 3

let multipleCount = 1;
let currentMultiple = 3;
while (multipleCount <= 5) {
  console.log(currentMultiple);
  currentMultiple += 3;
  multipleCount++;
}

//Print Characters of a String

const text = "Shahin";
let charIndex = 0;
while (charIndex < text.length) {
  console.log(text[charIndex]);
  charIndex++;
}

//Sum of All Odd Numbers from 1 to 20

let oddNumber = 1; 
let totalOddSum = 0; 

while (oddNumber <= 20) { 
  totalOddSum += oddNumber; 
  oddNumber += 2; 
}

console.log(totalOddSum); // Print the total sum sumOfTotalOddNumber

