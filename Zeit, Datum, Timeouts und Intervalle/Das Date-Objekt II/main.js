"use strict";

let d = new Date();

d.setFullYear(1988);
d.setMonth(3);
d.setDate(1);
d.setHours(9);
d.setMinutes(9);
d.setSeconds(0);
d.setMilliseconds(0);

console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getDay());

let d_utc = new Date();

d_utc.setUTCFullYear(1988);
d_utc.setUTCMonth(3);
d_utc.setUTCDate(1);
d_utc.setUTCHours(9);
d_utc.setUTCMinutes(9);
d_utc.setUTCSeconds(0);
d_utc.setUTCMilliseconds(0);

console.log(d_utc);

console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCHours());
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());
console.log(d.getUTCMilliseconds());
console.log(d.getUTCDay());

let d_unix = new Date();

d_unix.setTime(1568557000000);
console.log(d_unix);
console.log(d_unix.getTime());