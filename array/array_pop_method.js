// You have an array of numbers: let numbers = [5, 10, 15, 20, 25];. Use the pop() method to remove the last element of the array and then log the updated array.

let number = [5, 10, 15, 20, 25];
number.pop();
console.log(number);// Output: [5, 10, 15, 20]

// Create an array called animals with the elements ['cat', 'dog', 'elephant']. Use the pop() method to remove the last element and store it in a variable named lastAnimal. Print the value of lastAnimal and the updated animals array.

let animals = ['cat', 'dog', 'elephant'];
let lastAnimal = animals.pop();
console.log(lastAnimal); // Output: 'elephant'
console.log(animals);   // Output: ['cat', 'dog']


//Given an array let fruits = ['apple', 'banana', 'orange', 'grape'];, use a loop to remove and log each element from the array until it is empty.

let fruits = ['apple', 'banana', 'orange', 'grape'];
while (fruits.length > 0) {
    console.log(fruits.pop());
}
// Output will be:
// 'grape'
// 'orange'
// 'banana'
// 'apple'


//Simulate a stack data structure using an array. Start with an array let stack = [1, 2, 3]. Use the pop() method to remove elements and log each one, until the stack is empty. Then log the final state of the stack.

let stack = [1, 2, 3];
while (stack.length > 0) {
    console.log(stack.pop());
}
console.log(stack); // Output: []

// You have an array let nums = [10, 20, 30, 40, 50]. Use the pop() method twice, then log the length of the array after each pop() operation.

let nums = [10, 20, 30, 40, 50];
console.log(nums.length);
nums.pop();
console.log(nums.length);
nums.pop();
console.log(nums.length);// Output: 3

// let nums = [10, 20, 30, 40, 50];
// console.log(nums.length);
// nums.pop();
// console.log(nums.length);
// nums.pop();
// console.log(nums.length);// Output: 3
