"use strict";

let vn = "Felix";
let nn = "Hoff";
let age = 35;

const who = function(vorname = "Max", nachname = "Mustermann", alter = 18) {
    console.log(`Hallo, mein Name ist ${vorname} ${nachname} und ich bin ${alter} Jahre alt`);
}

who(vn,nn,age);
who();
who(undefined, nn, age);