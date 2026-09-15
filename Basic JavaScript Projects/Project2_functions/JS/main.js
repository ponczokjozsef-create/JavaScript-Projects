// Uses the += operator to concatenate a string, then displays it using document.getElementById
function showOperatorResult() {
  let baseText = "JavaScript ";
  baseText += "is a powerful language.";
  document.getElementById("operatorOutput").innerHTML = baseText;
}

// Function that updates the paragraph text using two variables and document.getElementById
function updateMessage() {
  let greeting = "Hello there!";
  let name = "Joseph";
  document.getElementById("output").innerHTML = greeting + " " + name;
}