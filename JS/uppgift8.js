// Lösning på uppgift 8 av Moa Jönsson, 2026
"use strict";

// Objekt - bok

let book = {
    title : "Fourth wing",
    author : "Rebecca Yarros",
    year : 2023, 
}

//Funktion
function Book(titleInput, authorInput, yearInput) {
    this.title = titleInput;
    this.author = authorInput;
    this.year = yearInput;
    this.presentation = function() {
        console.log(`Titel: ${book.title}`);
        console.log(`Författare: ${book.author}`);
        console.log(`Utgivningsår: ${book.year}`);
    };     
}

const book1 = new Book("title","author","year");

book1.presentation();