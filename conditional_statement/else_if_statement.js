/*Write a function that provides a discount based on the user’s age. The discounts are:

20% for ages 60 and above
15% for ages 30 to 59
10% for ages 18 to 29
No discount for ages below 18*/

function providesDiscount(age) {
    if (age >= 60) {
        console.log("20% discount");
    } else if (age >= 30) {
        console.log("15% discount");
    } else if (age >= 18) {
        console.log("10% discount");
    } else {
        console.log("No discount");
    }
}

// Test the function with different age values
providesDiscount(66); // Outputs: 20% discount
providesDiscount(60); // Outputs: 20% discount
providesDiscount(20); // Outputs: 10% discount
providesDiscount(15); // Outputs: No discount

/* Write a function that determines the membership tier based on the number of points a user has:

Gold: 1000 or more points
Silver: 500 to 999 points
Bronze: 100 to 499 points
Basic: Less than 100 points*/

function membershipTier(points) {
    if (points >= 1000) {
        console.log("Gold");
    } else if (points >= 500) {
        console.log("Silver");

    } else if (points >= 100) {
        console.log("Bronze");
    } else {
        console.log("Basic");
    }
}
membershipTier(10);    // Outputs: Basic
membershipTier(1000);  // Outputs: Gold
membershipTier(300);  //  Outputs: Bronze
membershipTier(525); //   Outputs: Silver
