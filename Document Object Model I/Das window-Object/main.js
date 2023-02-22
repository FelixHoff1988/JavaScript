"use strict";

console.log(window);

// Eigenschaften des Window-Objekts
console.log(innerWidth);
console.log(innerHeight);
console.log(outerWidth);
console.log(outerHeight);
console.log(scrollX);
console.log(scrollY);
// für später im Kurs...
console.log(location);
console.log(localStorage);
console.log(sessionStorage);

// Methoden des window-Objekts
alert("ACHTUNG!");
console.log(confirm("Bist du dir sicher?"));
let antwort = prompt("Wie geht es dir?");
console.log(antwort);

print();
//open("https://www.google.de/");
//close();

let nav = document.querySelector("#navigation");
console.log(getComputedStyle(nav));