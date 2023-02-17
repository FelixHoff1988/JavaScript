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


let auto = {
    marke: "Opel",
    modell: "Crossland",
    kraftstoffart: "Super",
    kilometerstand: 11540,
    ausstattung: {
        navigationsystem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: false,
        panoramadach: false,
    },
    zustand: "gebraucht",
    preis: 12500
};

auto["ps"] = 65;
auto["modell"] = "Corsa";
let m = "modell";
console.log(`Ein ${auto["marke"]} ${auto[m]} hat ${auto["ps"]} PS.`);