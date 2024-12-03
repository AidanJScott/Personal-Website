// Aidan Scott
"use strict";

// select background icon
let backgroundIcon = document.querySelector("main img");

// add color palette change on double click
backgroundIcon.addEventListener("dblclick", event =>{
    // navigation bar
    let navigationLinks = document.querySelectorAll("nav a");
    navigationLinks.forEach(link =>{
        link.style.background = "#194C82"
    });
    let currentPage = document.querySelector("#current");
    currentPage.style.color = "#9AC6F5";

    // main
    let span = document.querySelector("span");
    span.style.color = "#194C82"

    // section and aside
    let section = document.querySelector("section");
    section.style.background = "#194C82";
    let aside = document.querySelector("aside");
    aside.style.background = "#9AC6F5";

    // footer
    let printButton = document.querySelector("button");
    printButton.style.backgroundColor = "#9AC6F5"

    // images
    let profileImage = document.querySelector("#profile");
    profileImage.src = "images/Alt_Profile_Icon.png";

    let gitImage = document.querySelector("#githead");
    gitImage.src = "images/Alt_GitHub_Icon.png";

    let linkedInImage = document.querySelector("#lihead");
    linkedInImage.src = "images/Alt_Linked_In_Icon.png";

    let backgroundIconImage = document.querySelector("main img");
    backgroundIconImage.src = "images/Alt_Profile_Icon_Background.png";

    let footerImage = document.querySelector("footer img");
    footerImage.src = "images/Alt_Footer_Profile_Icon.png";
});
