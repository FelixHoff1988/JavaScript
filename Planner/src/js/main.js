"use strict";

let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    titel,
    typ,
    betrag,
    datum;

const eintrag_erfassen = function () {
    titel = prompt("Titel:");
    typ = prompt("Typ (Einnahme oder Ausgabe):");
    betrag = parseInt(prompt("Betrag (in Cent):"));
    datum = prompt("Datum (jjjj-mm-tt):");
};

const eintrag_ausgeben = function (titel, typ, betrag, datum) {
    console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
    );
}

const eintrag_mit_gesamtbilanz_verrechnene = function (typ, betrag) {
    if (typ == "Einnahme") {
        einnahmen += betrag;
        bilanz += betrag;
    } else if (typ == "Ausgabe") {
        ausgaben += betrag;
        bilanz -= betrag;
    } else {
        console.log(`Der Typ von "${typ}" ist nicht bekannt.`);
    }
}

const gesamtbilanz_ausgeben = function(einnahmen, ausgaben, bilanz) {
    let positiv = bilanz >= 0;

console.log(`Einnahmen: ${einnahmen} ct
Ausgaben: ${ausgaben} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${positiv}`
);
}

const eintrag_hinzufügen = function() {
    eintrag_erfassen();
    eintrag_ausgeben(titel,typ,betrag,datum);
    eintrag_mit_gesamtbilanz_verrechnene(typ, betrag);
    gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
}

eintrag_hinzufügen();
eintrag_hinzufügen();

