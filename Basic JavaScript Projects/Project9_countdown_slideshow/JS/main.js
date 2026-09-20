// Project 9: Countdown & Slideshow

// 1. countdown() function - counts down from a given number of seconds
function countdown(seconds) {
  // Local variable to keep track of the remaining time
  let remaining = seconds;

  // Show the starting value immediately
  document.getElementById("countdownResult").innerHTML = remaining;

  // setInterval runs the code inside every 1000ms (1 second)
  let timer = setInterval(function () {
    remaining--; // decrease the remaining time by 1 each second

    if (remaining <= 0) {
      // Once we hit 0, stop the timer and show a message
      document.getElementById("countdownResult").innerHTML = "Countdown finished!";
      clearInterval(timer); // stops setInterval from running again
    } else {
      // Otherwise, update the displayed number
      document.getElementById("countdownResult").innerHTML = remaining;
    }
  }, 1000);
}

// 2. Basic slideshow using HTML, CSS, and JavaScript

// Get all elements that have the "slide" class
let slides = document.querySelectorAll(".slide");
let currentSlide = 0; // keeps track of which slide is currently showing

function showNextSlide() {
  // Hide the current slide by removing the "active" class
  slides[currentSlide].classList.remove("active");

  // Move to the next slide, looping back to 0 after the last one
  currentSlide = (currentSlide + 1) % slides.length;

  // Show the new current slide by adding the "active" class
  slides[currentSlide].classList.add("active");
}

// Automatically change the slide every 2 seconds
setInterval(showNextSlide, 2000);