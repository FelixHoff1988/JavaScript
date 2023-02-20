"use strict";

let meine_map = new Map();

meine_map.set("Hallo", "Welt");
meine_map.set(42, "Die Antwort auf alles.");
meine_map.set([], "Leeres Array");
meine_map.set({}, "Leeres Objekt");
meine_map.set(function(){}, "Leere Funktion");

console.log(meine_map);

meine_map.forEach(function(wert, schlussel, map) {
    console.log(wert);
    console.log(schlussel);
    //console.log(map);
});

let mein_set = new Set();

mein_set.add("Hallo");
mein_set.add(42);
mein_set.add(42);
mein_set.add([]);
mein_set.add({});
mein_set.add(function(){});

console.log(mein_set);

mein_set.forEach(function(wert, NULL, set) {
    console.log(wert);
    //console.log(set);
});

for (let paar of meine_map) {
    console.log(paar);
}

// [wert, schlussel]

for (let [wert, schlussel] of meine_map) {
    console.log(wert);
    console.log(schlussel);
}

for (let wert of mein_set) {
    console.log(wert);
}