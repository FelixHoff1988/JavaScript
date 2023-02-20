"use strict";

let meine_map = new Map();

meine_map.set("Hallo", "Welt");
meine_map.set(42, "Die Antwort auf alles.");
meine_map.set([], "Leeres Array");
meine_map.set({}, "Leeres Objekt");
meine_map.set(function(){}, "Leere Funktion");

console.log(meine_map);

let mein_set = new Set();

mein_set.add("Hallo");
mein_set.add(42);
mein_set.add(42);
mein_set.add([]);
mein_set.add({});
mein_set.add(function(){});

console.log(mein_set);
/* 
console.log(meine_map.entries());
console.log(meine_map.values());
console.log(meine_map.keys());

console.log(mein_set.entries());
console.log(mein_set.values());
console.log(mein_set.keys());
 */

for (let [k,v] of meine_map.entries()){
    console.log(k)
    console.log(v)
}