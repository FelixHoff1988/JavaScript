"use strict";

let d = new Date();
console.log(d);

console.log(Date.now());

let e = new Date(1576883537378);
console.log(e);

let f = new Date("April 01 1988 09:59:56 GMT+0100");
console.log(f);

// new Date(jahr, monat-index[, tag,[ stunde,[ minute,[ sekunde,[ millisekunde]]]]])
let g = new Date(2012, 5, 23, 15, 15 ,33, 2);
console.log(g)