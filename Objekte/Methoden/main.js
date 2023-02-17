"use strict";

let konto = {
    iban: "DE453004570004576823",
    bic: "WELDAWD2NS",
    inhaber: {
        vorname: "Felix",
        nachname: "Hoff",
        geschlecht: "m",
        alter: 35
    },
    kontostand: 6843,
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;
    },
    abheben(a) {
        this.kontostand -= a;
    }
};

konto.einzahlen(233);
console.log(konto.kontostand);

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18,
    verarbeiten() {
        return {
            name: `${this.vorname} ${this.nachname}`,
            zusammenfassung: `${this.vorname} ${this.nachname} (${this.alter})`,
            b: `Hallo ${this.vorname} ${this.nachname}`
        };
    }
};

console.log(person.verarbeiten());