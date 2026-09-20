// Project 10: Loops & Arrays

// 1. Function that uses a while loop
function runWhileLoop() {
  let output = "";
  let counter = 1; // local variable that controls the loop

  // The while loop keeps running as long as the condition is true
  while (counter <= 5) {
    output += counter + " ";
    counter++; // increase counter each time, otherwise this would loop forever
  }

  document.getElementById("whileResult").innerHTML = "While loop result: " + output;
}

// 2. Function that uses a for loop
function runForLoop() {
  let output = "";

  // for loop: starts at 1, runs while i <= 5, increases i by 1 each time
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }

  document.getElementById("forResult").innerHTML = "For loop result: " + output;
}

// 3. Function that uses an array
function runArrayFunction() {
  // An array holding a list of fruits
  let fruits = ["Apple", "Banana", "Cherry", "Mango"];

  let output = "";

  // Looping through the array with a for loop to display each item
  for (let i = 0; i < fruits.length; i++) {
    output += fruits[i] + ", ";
  }

  document.getElementById("arrayResult").innerHTML = "Fruits array: " + output;
}

// 4. Object created using the "let" keyword
function showObject() {
  // Creating an object that represents a student
  let student = {
    name: "Joseph",
    course: "JavaScript",
    age: 25
  };

  // Displaying the object's properties on the page
  document.getElementById("objectResult").innerHTML =
    "Name: " + student.name + ", Course: " + student.course + ", Age: " + student.age;
}