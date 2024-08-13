//Given an array numbers with the elements [1, 2, 3, 4, 5], use the slice method to create a new array that contains the elements from index 1 to index 3 (not including index 3).

let numbers = [1, 2, 3, 4, 5];
let subArray = numbers.slice(1, 3);
console.log(subArray); // Output: [2, 3]

//Given an array numbers with the elements [10, 20, 30, 40, 50, 60], use slice with negative indices to create a new array that contains the last 3 elements.

let nums = [10, 20, 30, 40, 50, 60];
let lasthree = nums.slice(-3);
console.log(lasthree); // Output: [40, 50, 60]


