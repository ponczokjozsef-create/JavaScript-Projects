// Defining a dictionary object with key-value pairs
const dictionary = {
    apple: "A round fruit, usually red or green",
    javascript: "A programming language used to make web pages interactive",
    dog: "A loyal, four-legged domesticated animal",
    ocean: "A large body of salt water"
};

function showDefinition() { // Defining and naming the function used in onclick
    let word = "javascript"; // Choosing which dictionary key to display
    document.getElementById("Dictionary").innerHTML = dictionary[word]; // Print the result in HTML
}

// Wait until the page (including the <p> element) has fully loaded before running this code
document.addEventListener("DOMContentLoaded", function () {
    let deletedWord = "dog";
    let deletedValue = dictionary[deletedWord]; // Store the value before it's gone

    delete dictionary[deletedWord]; // Delete operator removes the key-value pair from the dictionary

    document.getElementById("Dictionary").innerHTML = "Deleted: " + deletedWord + " -> " + deletedValue; // Print the deleted value in HTML
});