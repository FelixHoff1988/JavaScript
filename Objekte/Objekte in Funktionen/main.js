"use strict";

let konto1 = {
    iban: "DE453004570004576823",
    bic: "WELDAWD2NS",
    inhaber: {
        vorname: "Felix",
        nachname: "Hoff",
        geschlecht: "m",
        alter: 35
    },
    kontostand: 6843,
    aktiv: true
};

let konto2 = {
    iban: "DE453045813604576823",
    bic: "WELDAWD2NS",
    inhaber: {
        vorname: "Julia",
        nachname: "Schulze",
        geschlecht: "f",
        alter: 37
    },
    kontostand: 2548,
    aktiv: true
};

const kontostand_ausgeben = function(konto) {
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand} € auf dem Konto.`);
};

kontostand_ausgeben(konto1);
kontostand_ausgeben(konto2);