// Lösning av uppgift 5 av Moa Jönsson, 2026
"use strict";

// Array med 5 maträtter
const food = ["Pizza", "Kyckling med ris", "Lax och potatis", "Lasange","Pannkaka"];

food.push("Tomatsoppa"); // Tillägg av maträtt
food.shift(); // Tagit bort det första elementet

// Första och sista elementet
console.log(food[0]);
console.log(food[4]);