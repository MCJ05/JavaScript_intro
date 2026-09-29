// Lösning till uppgift 3 av Moa Jönsson, 2026
"use strict";

let age = 18;

// Åldrarna 65 år och uppåt = pensionär
if (age >= 65) {
    console.log("Pensionär");
} 

// Åldrarna 17 år och neråt = barn
else if (age < 18) { 
    console.log ("Barn");
}

// Ålder 18-64 år = vuxen
else {
    console.log ("Vuxen");
}
