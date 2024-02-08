//  function  per generare la griglia al click dell'utente
function generateGrid() {
    // Seleziona l'elemento  con id "grid" 
    const gridElement = document.querySelector("#grid");

    // Seleziona l'elemento con id "difficulty"
    const selectElement = document.querySelector("#difficulty");

    // Determina il numero di celle in base alla difficoltà selezionata
    let cellNumber;
    if (selectElement.value === "extreme") { // Se la difficoltà è "extreme"
        cellNumber = 49; // Imposta il numero di celle a 49
    } else if (selectElement.value === "normal") { //  se la difficoltà è "normal"
        cellNumber = 81; // Imposta il numero di celle a 81
    } else { // Altrimenti 
        cellNumber = 100; // Imposta il numero di celle a 100
    }

    // Resetta la griglia
    gridElement.innerHTML = "";

    // Itera per creare le celle della griglia
    for (let i = 0; i < cellNumber; i++) {
        // Crea un nuovo elemento div
        const newElement = document.createElement("div");

        // Aggiunge la classe "square" al div appena creato
        newElement.classList.add("square");

        // Aggiunge il numero casuale all'elemento
        newElement.textContent = randomNumbers(selectElement);

        // listener per colorare la cella al click dell'utente
        newElement.addEventListener("click", function() {
            this.style.backgroundColor = "lightblue"; 
            console.log("Cella cliccata: " + this.textContent); 
        });

        // Aggiunge il div  creato  a #grid
        gridElement.appendChild(newElement);
    }
}

// Funzione per generare numeri casuali in base alla difficoltà
function randomNumbers(selectElement) {
    if (selectElement.value === "extreme") { // Se la difficoltà è "extreme"
        return Math.floor(Math.random() * 49) + 1; // Restituisce un numero casuale compreso tra 1 e 49
    } else if (selectElement.value === "normal") { // Altrimenti, se la difficoltà è "normal"
        return Math.floor(Math.random() * 81) + 1; // Restituisce un numero casuale compreso tra 1 e 81
    } else { // Altrimenti (quindi se la difficoltà è "easy")
        return Math.floor(Math.random() * 100) + 1; // Restituisce un numero casuale compreso tra 1 e 100
    }
}

//  event listener al pulsante #start che chiama la funzione generateGrid() quando viene cliccato
document.getElementById("start").addEventListener("click", generateGrid);
