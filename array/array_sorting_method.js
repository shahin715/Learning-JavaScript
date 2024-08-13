// Create an array words with the elements ['banana', 'apple', 'cherry']. Use the sort method to sort the array in alphabetical order. Print the sorted array.
  
let words = ['banana', 'apple', 'cherry'];
words.sort();
console.log(words); // Output: ['apple', 'banana', 'cherry']

//Given an array numbers with the elements [7, 2, 9, 4, 1], use the sort method to sort the array in descending numerical order. Print the sorted array.
let numbers = [7, 2, 9, 4, 1];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 7, 4, 2, 1]

//Create an array people with the following objects: { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }. Use the sort method to sort the array by the age property in ascending order. Print the sorted array.

let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log(people); // Output: [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]

//   Given an array words with the elements ['cat', 'elephant', 'dog', 'hippopotamus'], use the sort method to sort the array by the length of the strings, from shortest to longest. Print the sorted array.
  
let pets = ['cat', 'elephant', 'dog', 'hippopotamus'];
pets.sort((a, b) => a.length - b.length);
console.log(pets); // Output: ['cat', 'dog', 'elephant', 'hippopotamus']
