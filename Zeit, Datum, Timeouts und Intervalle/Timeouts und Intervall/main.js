"use strict";

// setTimeout(callback-Funktion, zeitspanne[, parameter1, parameter2, ..., parameterN])

console.log("Los!");
setTimeout(function() {
    console.log("Fertig!")
}, 2000);

// setTimeout(code-string, zeitspanne)

console.log("Los!");
console.log(setTimeout("console.log('Fertig!');", 2000));

clearTimeout(2);

console.log("-------------------------");

// setInterval(callback-Funktion, zeitspanne[, parameter1, parameter2, ..., parameterN])

setInterval(function() {
    console.log("Eine Sekunde ist um!")
}, 1000)

// setInterval(code-string, zeitspanne)

console.log(setInterval("console.log('Eine Sekunde ist um!');", 2000));

clearInterval(2);