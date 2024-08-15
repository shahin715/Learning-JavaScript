// Write a function isPositive(num) that takes a number as an argument. Use an if statement to print "Positive" if the number is greater than zero. If the number is zero or negative, do not print anything.

function isPositive(num) {
    if (num > 0) {
      console.log("Positive");
    }
  }
  
  isPositive(5);  // Output: Positive
  isPositive(-3); // No output
  
//   Write a function checkEven(num) that takes a number as an argument. Use an if statement to print "Even" if the number is divisible by 2. If the number is not divisible by 2, do not print anything.

function checkEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
        
    }
}
checkEven(4);  // Output: Even
checkEven(7);  // No output

//Write a function checkAge(age) that takes an age as an argument. Use an if statement to print "Adult" if the age is 18 or older. If the age is less than 18, do not print anything.

function checkAge(age) {
    if (age >= 18) {
      console.log("Adult");
    }
  }
  
  checkAge(20);  // Output: Adult
  checkAge(15);  // No output
  
  //Write a function isPositiveInteger(num) that takes a number as an argument. Use an if statement to print "Positive Integer" if the number is greater than zero and is an integer. If the number is zero, negative, or not an integer, do not print anything.

  function isPositiveInteger(num) {
    if (Number.isInteger(num) && num > 0) {
      console.log("Positive Integer");
    }
  }
  
  isPositiveInteger(7);   // Output: Positive Integer
  isPositiveInteger(3.5); // No output
  isPositiveInteger(-1);  // No output
  