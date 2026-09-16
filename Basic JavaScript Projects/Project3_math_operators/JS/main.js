// main.js

function addition() { // Defining and naming the addition function
    let add = 15 + 4;
    document.getElementById("Add").innerHTML = "15 + 4 = " + add; // Print the result in HTML
}

function subtraction() { // Defining and naming the subtraction function
    let sub = 15 - 4;
    document.getElementById("Sub").innerHTML = "15 - 4 = " + sub; // Print the result in HTML
}

function multiplication() { // Defining and naming the multiplication function
    let mult = 15 * 4;
    document.getElementById("Mlt").innerHTML = "15 * 4 = " + mult; // Print the result in HTML
}

function division() { // Defining and naming the division function
    let divide = 15 / 4;
    document.getElementById("Div").innerHTML = "15 / 4 = " + divide.toFixed(2); // Print the result in HTML
}

function modulus_operator() { // Defining and naming the modulus function
    let mod = 15 % 4;
    document.getElementById("Mod").innerHTML = "15 % 4 = " + mod; // Print the result in HTML
}

function random() { // Defining and naming the random function
    let ran = Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
    document.getElementById("Ran").innerHTML = "Random: " + ran; // Print the result in HTML
}

function increment() { // Defining and naming the increment function
    let counter = 10;
    counter++; // Increment operator increases the value by 1
    document.getElementById("IncrementText").innerHTML = counter; // Print the result in HTML
}

function decrement() { // Defining and naming the decrement function
    let counter = 10;
    counter--; // Decrement operator decreases the value by 1
    document.getElementById("DecrementText").innerHTML = counter; // Print the result in HTML
}

function negation() { // Defining and naming the negation function
    let isLoggedIn = true;
    let isNegated = !isLoggedIn; // Negation operator flips true to false
    document.getElementById("Neg").innerHTML = "isLoggedIn: " + isLoggedIn + " -> Negated: " + isNegated; // Print the result in HTML
}