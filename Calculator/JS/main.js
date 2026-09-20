// Calculator

// Holds the full expression that gets built up as the user clicks buttons
let currentExpression = "";

// Adds the clicked value (number, operator, or decimal point) to the expression
function appendValue(value) {
  currentExpression += value;

  // Update the display so the user sees what they've entered so far
  document.getElementById("display").value = currentExpression;
}

// Clears the entire expression and resets the display
function clearDisplay() {
  currentExpression = "";
  document.getElementById("display").value = "";
}

// Removes the last character from the expression (like a backspace)
function deleteLast() {
  // slice(0, -1) returns the string without its last character
  currentExpression = currentExpression.slice(0, -1);
  document.getElementById("display").value = currentExpression;
}

// Calculates the result of the expression when "=" is pressed
function calculateResult() {
  try {
    // eval() runs the expression as JavaScript code and returns the result
    // (e.g. "5+3" becomes 8)
    let result = eval(currentExpression);

    // Show the result and store it so further calculations can continue from it
    document.getElementById("display").value = result;
    currentExpression = result.toString();
  } catch (error) {
    // If the expression is invalid (e.g. "5++"), show an error instead of crashing
    document.getElementById("display").value = "Error";
    currentExpression = "";
  }
}