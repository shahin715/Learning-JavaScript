// Create an array called fruits containing the strings 'apple', 'banana', and 'orange'. Use the push method to add 'grape' and 'pear' to the end of this array.

let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape', 'pear');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'pear']


// You have an empty array called numbers. Use the push method to add the numbers 1, 2, 3, 4, and 5 to this array in one go.
let numbers = [];
numbers.push(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]


// Given an array of numbers, use push to add the number 100 to the array only if the array length is less than 5.
let nums = [1, 2, 3];
if (nums.length < 5) {
  nums.push(100);
}
console.log(numbers); // Output: [1, 2, 3, 100]


//Create an array called students. Use push to add an object with properties name and age representing a student to this array. The object should have the name 'John' and the age 20.
let students = [];
students.push({ name: 'John', age: 20 });
console.log(students); // Output: [{ name: 'John', age: 20 }]

