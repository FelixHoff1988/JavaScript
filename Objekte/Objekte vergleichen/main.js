"use strict";

let auto_1 = {
    marke: "Tesla",
    modell: "Model X"
}

let auto_2 = {
    marke: "Tesla",
    modell: "Model X"
}

let auto_3 = {
    marke: "BMW",
    modell: "i8"
}

let equals = function(car1, car2) {
    if ((car1.marke === car2.marke) && (car1.modell === car2.modell)) {
        return true;
    } else {
        return false;
    }
}

console.log(equals(auto_1, auto_2));
console.log(equals(auto_2, auto_3));