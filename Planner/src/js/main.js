"use strict";

// Eingabedaten holen
let titel_1 = prompt("Titel:");
let typ_1 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag_1 = parseInt(prompt("Betrag (in Cent):"));
let datum_1 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${titel_1}
Typ: ${typ_1}
Betrag: ${betrag_1} ct
Datum: ${datum_1}`
);


let titel_2 = prompt("Titel:");
let typ_2 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag_2 = parseInt(prompt("Betrag (in Cent):"));
let datum_2 = prompt("Datum (jjjj-mm-tt):");
console.log(`Titel: ${titel_2}
Typ: ${typ_2}
Betrag: ${betrag_2} ct
Datum: ${datum_2}`
);

// Gesamtbilanz
let einnahmen;
let ausgaben;
let bilanz = betrag_1 + betrag_2;
console.log(`Bilanz: ${bilanz} ct`);

let positiv = bilanz >= 0;
console.log(`Bilanz ist positiv: ${positiv}`);
