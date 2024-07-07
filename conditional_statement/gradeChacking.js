// let score = prompt("enter the score (0-100):");
let score = 90

let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score <= 89) {
    grade = "B";
} else if (score >= 70 && score <= 79) {
    grade = "C";
} else {
    grade = "F";
}
console.log("grade", grade);