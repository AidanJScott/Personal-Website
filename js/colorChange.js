// Aidan Scott
"use strict";

// select background icon
let backgroundIcon = document.querySelector("main img");
backgroundIcon.setAttribute("clicked", "False");

backgroundIcon.addEventListener("click", event => {
    console.log(backgroundIcon.getAttribute("clicked"));
    if (backgroundIcon.getAttribute("clicked") == "False"){
        backgroundIcon.setAttribute("class", "slideLeft");
        backgroundIcon.setAttribute("clicked", "True");
    }
    else{
        backgroundIcon.setAttribute("class", "slideRight");
        backgroundIcon.setAttribute("clicked", "False");
    }
});

// add color palette change on double click
backgroundIcon.addEventListener("dblclick", event =>{
    changePageColors("#194C82", "#9AC6F5");
});

function changePageColors(darkColor, lightColor){
    // navigation bar
    let navigationLinks = document.querySelectorAll("nav a");
    navigationLinks.forEach(link =>{
        link.style.background = darkColor;
    });
    let currentPage = document.querySelector("#current");
    currentPage.style.color = lightColor;

    // main
    let span = document.querySelector("span");
    span.style.color = darkColor;

    // section and aside
    let section = document.querySelector("section");
    section.style.background = darkColor;
    let aside = document.querySelector("aside");
    aside.style.background = lightColor;

    // images
    let profileImage = document.querySelector("#profile");
    profileImage.style.backgroundColor = darkColor;

    let gitImage = document.querySelector("#githead");
    gitImage.style.backgroundColor = darkColor;

    let linkedInImage = document.querySelector("#lihead");
    linkedInImage.style.backgroundColor = darkColor;

    let backgroundIconImage = document.querySelector("main img");
    backgroundIconImage.style.backgroundColor = lightColor;

    let footerImage = document.querySelector("footer img");
    footerImage.style.backgroundColor = lightColor;

    // links
    let footerLinks = document.querySelectorAll("footer a");
    footerLinks.forEach(footerLink =>{
        footerLink.style.color = darkColor;
    });    
}