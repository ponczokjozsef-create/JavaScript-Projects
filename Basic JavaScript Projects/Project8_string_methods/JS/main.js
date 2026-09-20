// Project 8: String Methods

// 1. concat() - joins two or more strings together
function useConcat() {
  let firstName = "Joseph";
  let lastName = "Ponczok";

  // concat() combines the strings, here we add a space between them
  let fullName = firstName.concat(" ", lastName);

  document.getElementById("concatResult").innerHTML = "Result: " + fullName;
}

// 2. slice() - extracts a section of a string and returns it as a new string
function useSlice() {
  let sentence = "I am learning JavaScript";

  // slice(5, 18) extracts characters from index 5 up to (not including) index 18
  let sliced = sentence.slice(5, 18);

  document.getElementById("sliceResult").innerHTML = "Result: " + sliced;
}

// 3. toString() - converts a value (e.g. a number) into a string
function useToString() {
  let number = 100;

  // toString() turns the number into a string value
  let numberAsString = number.toString();

  document.getElementById("toStringResult").innerHTML =
    "Result: " + numberAsString + " (type: " + typeof numberAsString + ")";
}

// 4. toPrecision() - formats a number to a specified total number of digits
function useToPrecision() {
  let pi = 3.14159265;

  // toPrecision(4) rounds the number to 4 significant digits total
  let piRounded = pi.toPrecision(4);

  document.getElementById("toPrecisionResult").innerHTML = "Result: " + piRounded;
}