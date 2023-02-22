"use strict";

let navi = document.querySelector("#navigation");

// navi.remove();

let jumbo = document.querySelectorAll(".jumbotron");
console.log(jumbo);
jumbo.forEach(e => {
    e.remove();
});
