// Richiesta nome, cognome e colore preferito all'utente
let nome = prompt("Inserisci il tuo nome:");
let cognome = prompt("Inserisci il tuo cognome:");
let colorePreferito = prompt("Inserisci il tuo colore preferito:");

// Concatenazione delle tre stringhe
let risultato = nome+cognome+colorePreferito;

// Visualizzazione del risultato nel DOM

/* document.write("La tua password è: " + risultato+"23"); */

document.getElementById("your_password").innerHTML = "La tua password è: " + risultato+"23";

