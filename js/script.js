// genero la griglia al click dell utente( con 10 caselle e 10 righe/colonne)


// inserisco numeri random da 1 a 100 all interno degli #square

// inserisco un bg color alle celle al click dell utente sulla casella
//  messaggio della cella appena cliccata dall utente con descrizione







//  fuction  per generare la griglia al click dell'utente
function generateGrid() {
    // Seleziona l'elemento  con id "grid" 
    const gridElement = document.querySelector("#grid");

    // Itera attraverso un ciclo for che si ripete 100 volte
    for (let i = 0; i < 100; i++) {
        // Crea un nuovo elemento div
        const newElement = document.createElement("div");
        
        // Aggiunge la classe "square" al div appena creato
        newElement.classList.add("square");

    //   aggiungo il numero casuale all elemento
        newElement.textContent = randomNumbers();

// listener per colorare lo square al click dell utente
        newElement.addEventListener("click", function() {
            // Colora la cella di azzurro al click
            this.style.backgroundColor = "lightblue";
            // Stampa il numero della cella cliccata nella console
            console.log("Cella cliccata: " + this.textContent);
        });
        // Aggiunge il div appena creato come figlio di #grid
        gridElement.appendChild(newElement);
    }
}

//  event listener al pulsante #start che chiama la funzione generateGrid() quando viene cliccato
document.getElementById("start").addEventListener("click", generateGrid);




// fuction che crea numeri random da 1 a 100
function randomNumbers() {
    return Math.floor(Math.random() * 100) + 1;
}