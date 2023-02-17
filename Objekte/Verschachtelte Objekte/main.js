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

console.log(konto1);
console.log(konto2);

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

console.log(auto);

console.log(`${konto1.inhaber.vorname} ${konto1.inhaber.nachname} hat ${konto1.kontostand} € auf seinem Konto.`)

auto.ps = 65;
auto.modell = "Corsa";
console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps} PS.`);