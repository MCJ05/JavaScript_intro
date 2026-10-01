// Lösning på uppgift 7 av Moa Jönsson, 2026
"use strict";

// Array med 6 tal
let number = [7, 13, 20, 5, 14, 6];

// Funktion
function calculateSum(array) {
    let Sum = 0;
    for(let number of array){
        Sum += number;
    }
    return Sum;
}

let totalSum = calculateSum(number);
console.log("Summan är: " + totalSum);