function calculateSum() {
    // Base numbers
    let a = 15;
    let b = 4;

    // Multiple mathematical operations
    let sum = a + b;        // Addition
    let difference = a - b; // Subtraction
    let product = a * b;    // Multiplication
    let quotient = a / b;   // Division
    let remainder = a % b;  // Modulo (remainder)
    let power = a ** 2;     // Exponentiation

    // Log results to the console
    console.log("Sum: " + sum);
    console.log("Difference: " + difference);
    console.log("Product: " + product);
    console.log("Quotient: " + quotient);
    console.log("Remainder: " + remainder);
    console.log("Power: " + power);

    // Display results on the clicked element
    document.getElementById("Math").innerHTML = `
        Sum: ${sum} | Difference: ${difference} | Product: ${product} |
        Quotient: ${quotient.toFixed(2)} | Remainder: ${remainder} | Power: ${power}
    `;
    }
// Function that demonstrates the negation (!) operator and displays the result
function calculateNegation() {
    let isLoggedIn = true;
    let isNegated = !isLoggedIn; // Negation operator flips true to false

    let hasPermission = false;
    let isNegatedPermission = !hasPermission; // Flips false to true

    console.log("Original value: " + isLoggedIn + " | Negated: " + isNegated);
    console.log("Original value: " + hasPermission + " | Negated: " + isNegatedPermission);

    document.getElementById("Negation").innerHTML = `
        isLoggedIn: ${isLoggedIn} → Negated: ${isNegated}<br>
        hasPermission: ${hasPermission} → Negated: ${isNegatedPermission}
    `;
}
// Function that demonstrates the increment (++) and decrement (--) operators and displays the results
function calculateIncrementDecrement() {
    let counter = 10;

    counter++; // Increment operator increases the value by 1
    let incrementedValue = counter;

    counter--; // Decrement operator decreases the value by 1
    counter--; // Decrement again to show a clear change
    let decrementedValue = counter;

    console.log("Incremented value: " + incrementedValue);
    console.log("Decremented value: " + decrementedValue);

    document.getElementById("IncrementDecrement").innerHTML = `
        Incremented value: ${incrementedValue}<br>
        Decremented value: ${decrementedValue}
    `;
}