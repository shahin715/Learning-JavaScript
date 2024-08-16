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
