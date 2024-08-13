// Create an array called colors with the elements 'red', 'green', and 'blue'. Use the shift method to remove the first element from this array and store it in a variable called firstColor.

let colors= ["red","green","blue"];
let firstColor = colors.shift();
console.log(firstColor); // Output: 'red'
console.log(colors);    // Output: ['green', 'blue']


//Given an array of numbers [10, 20, 30, 40, 50], use the shift method to remove the first two elements. Print the updated array after each shift operation.

let numbers = [10, 20, 30, 40, 50];
numbers.shift();
console.log(numbers); // Output: [20, 30, 40, 50]
numbers.shift();
console.log(numbers); // Output: [30, 40, 50]

//Create an empty array called emptyArray. Use the shift method on this array and print the result. Check what happens to the array after calling shift.

let emptyArray = [];
let result = emptyArray.shift();
console.log(result); // Output: undefined
console.log(emptyArray); // Output: []


// Create an array called people with the following objects: { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, and { name: 'Charlie', age: 35 }. Use shift to remove the first object and store it in a variable called firstPerson.

let people = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }];
let firstPerson = people.shift();
console.log(firstPerson); // Output: { name: 'Alice', age: 25 }
console.log(people);      // Output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

//Given an array of strings ['a', 'b', 'c', 'd'], use a loop to shift elements from the array until it is empty. Print each element as you remove it and print the array after each shift operation.

let letters = ['a', 'b', 'c', 'd'];
while (letters.length > 0) {
    let shiftedElement = letters.shift();
    console.log(shiftedElement);
    console.log(letters);
}
// Output:
// a
// ['b', 'c', 'd']
// b
// ['c', 'd']
// c
// ['d']
// d
// []
