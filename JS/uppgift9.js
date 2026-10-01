/* Lösning till uppgift 9. Av Moa JÖnsson, 2026 */
"use strict";

// Array med tre personer
const people = [
    {
        name: "Moa",
        age: 20,
        city: "Sundsvall"
    },
    {
        name: "Hannes",
        age: 17,
        city: "Sunsvall"
    },
    {
        name: "Sofie",
        age: 23,
        city: "Ålesund"
    }
];

// Funktion
function printPerson(person) {
    if (person.age >= 18) {
        console.log(`${person.name} bor i ${person.city} och är myndig.`);
    } else {
        console.log(`${person.name} bor i ${person.city} och är inte myndig.`);
    }
}

// Loop
for (let person of people) {
    printPerson(person);
}