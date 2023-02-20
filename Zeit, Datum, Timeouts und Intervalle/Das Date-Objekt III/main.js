"use strict";

let d = new Date();
console.log(d);

// d.toLocaleString([schema [, optionen]])

let de_DE = d.toLocaleString("de-DE");
let us_US = d.toLocaleString("en-US");
console.log(de_DE);
console.log(us_US);

let optionen ={
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
}

let de_DE_2 = d.toLocaleString("de-De", optionen);
console.log(de_DE_2);

let de_DE_datum = d.toLocaleDateString("de-De", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
});
console.log(de_DE_datum)

let de_DE_zeit = d.toLocaleTimeString("de-De", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
})
console.log(de_DE_zeit)