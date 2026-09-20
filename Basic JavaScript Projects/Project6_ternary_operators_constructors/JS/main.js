// Project 6: Ternary Operators & Constructors

// 1. Function using a ternary operation with input from the browser
function checkEvenOdd() {
  // Get the number the user typed into the input field
  let userNumber = document.getElementById("numberInput").value;

  // Ternary operator: checks if the number is even or odd
  let result = (userNumber % 2 === 0) ? userNumber + " is even" : userNumber + " is odd";

  // Display the result on the page
  document.getElementById("resultText").innerHTML = result;
}

// 2. Constructor function using "new" and "this"
function Person(name, age) {
  this.name = name;
  this.age = age;

  // 4. Nested function inside the constructor: returns a greeting message
  this.greet = function () {
    // This nested function uses "this" to access the outer function's properties
    function buildMessage() {
      return "Hi, my name is " + this.name + " and I am " + this.age + " years old.";
    }
    // Using call() so the nested function can still access "this"
    return buildMessage.call(this);
  };
}

// 3. Function to create a Person object and display the result in an HTML element
function showPerson() {
  // Creating a new instance of Person using the "new" keyword
  let student = new Person("Joseph", 25);

  // Displaying the constructor's result inside the "personInfo" element
  document.getElementById("personInfo").innerHTML = student.greet();
}