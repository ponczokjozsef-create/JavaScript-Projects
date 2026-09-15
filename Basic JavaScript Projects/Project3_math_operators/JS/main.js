// Function that performs an addition operation and displays the result in the paragraph with id "Math"
function calculateSum() {
  let num1 = 10;
  let num2 = 25;
  let sum = num1 + num2;
  document.getElementById("Math").innerHTML = "The sum of " + num1 + " and " + num2 + " is: " + sum;
}