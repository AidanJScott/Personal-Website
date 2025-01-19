// Aidan Scott
"use strict";
let colorArray = [["#52278A", "#AE98D7"], ["#194C82", "#9AC6F5"], ["#AF974D", "#DCCA87"], ["#3F594A", "#A7BEB5"], ["#D24E01", "#EE9F27"], ["#9B0109", "#FD5A5D"], ["#DA8592", "#F4B5CD"], ["#4A4A4A", "#ADADAD"], ["#F88378", "#E7C1A8"]]

// handle sliding for background icon
let backgroundIcon = document.querySelector("main img");
let colorTable = document.querySelector("table");
backgroundIcon.setAttribute("clicked", "False");
backgroundIcon.addEventListener("click", event => {
    if (backgroundIcon.getAttribute("clicked") == "False"){
        backgroundIcon.setAttribute("class", "slideLeft");
        backgroundIcon.setAttribute("clicked", "True");
        setTimeout(function(){colorTable.style.zIndex = "0";} , 2000);
    }
    else{
        colorTable.style.zIndex = "-1";
        backgroundIcon.setAttribute("class", "slideRight");
        backgroundIcon.setAttribute("clicked", "False");
    }
});

// add table event listener for color changes
let colorCells = document.querySelectorAll("td");
colorCells.forEach(cell => {
    cell.addEventListener("click", event=>{
        clearBorders();
        cell.style.border = "solid 4px #333333";
        let pagePalette = cell.getAttribute("paletteNum");
        changePageColors(colorArray[pagePalette][0], colorArray[pagePalette][1]);
    });
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
    let asideLink = document.querySelector("aside p a");
    asideLink.style.color = darkColor;


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

function clearBorders(){
    let cells = document.querySelectorAll("td");
    cells.forEach(cell =>{
        cell.style.border = "4px solid transparent";
    });
}