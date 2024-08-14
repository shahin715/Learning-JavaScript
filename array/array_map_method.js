//Use the map() method to create a new array called squaredNumbers where each element is the square of the corresponding element in the original numbers array.

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//You have an array of objects, and you want to create a new array containing just the values of a specific property from each object.

let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
let names = people.map(person => person.name);

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
