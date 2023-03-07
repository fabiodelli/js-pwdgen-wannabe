// Richiesta nome, cognome e colore preferito all'utente
const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci il tuo cognome:");
const colorePreferito = prompt("Inserisci il tuo colore preferito:");

// Concatenazione delle tre stringhe
const risultato = nome+cognome+colorePreferito;

// Visualizzazione del risultato nel DOM

//document.write("La tua password è: " + risultato+"23"); 

document.getElementById("your_password").innerHTML = ` ${risultato}23`

