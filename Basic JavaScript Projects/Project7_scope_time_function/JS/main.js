// Project 7: Scope, Time & Function

// 1. Global variable (accessible anywhere in this file)
let globalMessage = "This is a global variable";

// Function that uses a local variable and an if statement
function checkAge() {
  // Local variable (only exists inside this function)
  let userAge = 20;

  // If statement checking the local variable
  if (userAge >= 18) {
    document.getElementById("ageResult").innerHTML = "You are an adult (age: " + userAge + ")";
  } else {
    document.getElementById("ageResult").innerHTML = "You are a minor (age: " + userAge + ")";
  }

  // Logging the global variable to show it's still accessible here
  console.log(globalMessage);
}

// 3. Intentionally buggy function (for debugging practice with console.log)
// Bug: the variable is named "resutl" instead of "result" in one place,
// and "num1" is misspelled as "numb1" when it's used.
// The commented-out lines below show the broken version and how console.log
// was used in Chrome Dev Tools to find the mistake.
function addNumbers(num1, num2) {
  // Buggy version (kept as a comment for reference):
  // let resutl = numb1 + num2;   // ReferenceError: numb1 is not defined
  // console.log(resutl);

  // Fixed version after debugging with console.log in the console:
  let result = num1 + num2;
  console.log("Debug check - result is: " + result); // used this to confirm the fix worked
  return result;
}

// Call the fixed function once so the debug log shows up in the console
addNumbers(5, 7);

// 4. Time_function(): displays the current time and updates it every second
function Time_function() {
  // Create a new Date object to get the current time
  let now = new Date();

  // Extract hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add a leading zero if the number is below 10 (e.g. 9 -> "09")
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the formatted time on the page
  document.getElementById("timeDisplay").innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Run Time_function immediately, then repeat every 1000ms (1 second)
Time_function();
setInterval(Time_function, 1000);