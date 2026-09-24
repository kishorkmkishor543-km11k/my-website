// Show the current year in the footer

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// Simple button animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Button clicked:", button.textContent);

    });

});