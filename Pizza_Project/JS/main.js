// Pizza Menu

// Array of pizza objects - each has a name and a price
// This is the "menu" the app uses to look up names and prices
let pizzaMenu = [
  { name: "Margherita", price: 10 },
  { name: "Pepperoni", price: 12 },
  { name: "Hawaiian", price: 11 },
  { name: "Veggie", price: 9 }
];

// Calculates and displays the order based on the quantities entered
function calculateOrder() {
  let summaryText = "<h2>Your Order</h2>";
  let total = 0; // keeps a running total of the whole order
  let itemsOrdered = 0; // counts how many different pizzas were ordered

  // Loop through every pizza in the menu using a for loop
  for (let i = 0; i < pizzaMenu.length; i++) {
    // Get the quantity the user entered for this pizza (qty0, qty1, etc.)
    let quantityInput = document.getElementById("qty" + i);
    let quantity = parseInt(quantityInput.value);

    // If the quantity isn't a valid number, treat it as 0
    if (isNaN(quantity) || quantity < 0) {
      quantity = 0;
    }

    // Only add this pizza to the summary if at least one was ordered
    if (quantity > 0) {
      let lineTotal = pizzaMenu[i].price * quantity;
      total += lineTotal;
      itemsOrdered++;

      summaryText += "<p>" + pizzaMenu[i].name + " x " + quantity +
        " = $" + lineTotal + "</p>";
    }
  }

  // If nothing was ordered, show a message instead of an empty summary
  if (itemsOrdered === 0) {
    summaryText += "<p>No pizzas selected yet.</p>";
  } else {
    summaryText += "<p id='totalPrice'>Total: $" + total + "</p>";
  }

  // Display the finished summary on the page
  document.getElementById("orderSummary").innerHTML = summaryText;
}

// Resets all quantity inputs back to 0 and clears the order summary
function resetOrder() {
  for (let i = 0; i < pizzaMenu.length; i++) {
    document.getElementById("qty" + i).value = 0;
  }

  document.getElementById("orderSummary").innerHTML = "";
}