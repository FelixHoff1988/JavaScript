"use strict";

let jumbo = document.querySelector(".jumbotron");

// Das CSSStyleDeclaration-Object ausgeben
console.log(jumbo.style);
// Inline-Styles auslesen
console.log(jumbo.style.backgroundColor);
// Inline-Styles verändern
jumbo.style.backgroundColor = "blue";
jumbo.style.width = "80%";
jumbo.style.height = "800px";
jumbo.style.fontSize = "15px";
