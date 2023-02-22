"use strict";

let jumbo = document.querySelector(".jumbotron");
console.log(jumbo);

let classlist = jumbo.classList;
console.log(classlist);

// Klassen hinzufügen
jumbo.classList.add("meine-klasse");
// Klassen entfernen
jumbo.classList.remove("jumbotron");
// Klassen ersetzen
jumbo.classList.replace("meine-klasse", "deine-klasse");
// Vorhandensein von Klassen abfragen
console.log(jumbo.classList.contains("jumbotron"));
console.log(jumbo.classList.contains("deine-klasse"));
// Klassen togglen (An-Aus-Schalter)
jumbo.classList.toggle("auch-eine-klasse");
jumbo.classList.toggle("auch-eine-klasse");