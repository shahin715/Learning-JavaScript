// Write a function isPositive(num) that takes a number as an argument. Use if-else statements to print "Positive" if the number is greater than zero. Print "Not Positive" otherwise.

function isPositive(num) {
    if (num > 0) {
        console.log("Positive");
    } else {
        console.log("Not Positive");
    }
}

isPositive(10);  // Output: Positive
isPositive(-5);  // Output: Not Positive
  
// Write a function isEven(num) that takes a number as an argument. Use if-else statements to print "Even" if the number is divisible by 2. Print "Odd" otherwise.

function isEven(num) {
    if (num % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
  
  isEven(4);  // Output: Even
  isEven(7);  // Output: Odd

//   Write a function checkZero(num) that takes a number as an argument. Use if-else statements to print "Zero" if the number is exactly zero. Print "Non-zero" otherwise.

function checkZero(num) {
    if (num === 0) {
      console.log("Zero");
    } else {
      console.log("Non-zero");
    }
  }
  
  checkZero(0);   // Output: Zero
  checkZero(5);   // Output: Non-zero
  