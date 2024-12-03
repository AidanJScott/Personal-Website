// Aidan Scott
"use strict";

// create print button
let printButton = document.createElement("button");
printButton.innerHTML = "<strong>Print Home Page</strong>";
printButton.setAttribute("id", "print_button");
printButton.style.backgroundColor = "#AE98D7";
printButton.style.marginBottom = "0.5rem";

// add it to the bottom of the footer
let footer = document.querySelector("footer");
footer.appendChild(printButton);

printButton.addEventListener("click", event =>{
    print();
});