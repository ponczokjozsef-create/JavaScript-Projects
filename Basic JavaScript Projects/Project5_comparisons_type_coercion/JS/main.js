// Project 5: Comparisons & Type Coercion

// 1. Using document.write() and typeof to show a variable's data type
let age = 25;
document.write("The variable 'age' holds a value of type: " + typeof age + "<br>");

// 2. An expression combining a string and a number (type coercion happens here)
let combined = "My age is " + age;
document.write(combined + "<br>");

// 3. Comparison and logical operators, displayed in the browser
let a = 10;
let b = "10";

document.write("a == b: " + (a == b) + "<br>");   // loose equality (true, coerces types)
document.write("a === b: " + (a === b) + "<br>"); // strict equality (false, different types)
document.write("a > 5: " + (a > 5) + "<br>");      // greater than
document.write("a < 5: " + (a < 5) + "<br>");      // less than
document.write("(a > 5 && a < 20): " + (a > 5 && a < 20) + "<br>"); // AND
document.write("(a < 5 || a > 8): " + (a < 5 || a > 8) + "<br>");   // OR
document.write("!(a === b): " + !(a === b) + "<br>"); // NOT